import os
import logging
from pathlib import Path
from pypdf import PdfReader

logger = logging.getLogger("ask_archit.resume")

class ResumeCache:
    """In-memory cache for resume text extracted once at startup."""

    def __init__(self):
        self._text: str = ""
        self._loaded: bool = False
        self._file_path: str = ""

    @property
    def text(self) -> str:
        return self._text

    @property
    def is_loaded(self) -> bool:
        return self._loaded

    @property
    def file_path(self) -> str:
        return self._file_path

    def set_text(self, text: str):
        """Allows directly injecting cached text (e.g. for testing)."""
        self._text = text
        self._loaded = bool(text.strip())

    def load(self, custom_path: str | None = None) -> bool:
        candidates = []
        if custom_path:
            candidates.append(Path(custom_path))
        env_path = os.getenv("RESUME_PDF_PATH")
        if env_path:
            candidates.append(Path(env_path))

        backend_dir = Path(__file__).resolve().parent
        candidates.extend([
            backend_dir / "data" / "Archit Jagadeb Resume.pdf",
            Path("data/Archit Jagadeb Resume.pdf"),
            Path("backend/data/Archit Jagadeb Resume.pdf"),
            backend_dir / "Archit Jagadeb Resume.pdf",
            Path("Archit Jagadeb Resume.pdf"),
        ])

        found_path: Path | None = None
        for p in candidates:
            if p.is_file():
                found_path = p.resolve()
                break

        if not found_path:
            logger.warning(
                "Resume PDF 'Archit Jagadeb Resume.pdf' not found in data directory. "
                "Place it in 'backend/data/Archit Jagadeb Resume.pdf'."
            )
            self._text = ""
            self._loaded = False
            self._file_path = ""
            return False

        try:
            reader = PdfReader(str(found_path))
            extracted_pages = []
            for page in reader.pages:
                page_text = page.extract_text()
                if page_text:
                    extracted_pages.append(page_text.strip())
            self._text = "\n\n".join(extracted_pages).strip()
            self._loaded = bool(self._text)
            self._file_path = str(found_path)
            logger.info("Successfully extracted and cached resume text from %s (%d chars)", found_path, len(self._text))
            return True
        except Exception as e:
            logger.error("Error reading resume PDF from %s: %s", found_path, e)
            self._text = ""
            self._loaded = False
            return False

resume_cache = ResumeCache()
