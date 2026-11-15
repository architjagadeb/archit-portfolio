# Ask Archit — FastAPI Backend

FastAPI backend powering the "Ask Archit" portfolio AI assistant with Groq and in-memory resume caching via `pypdf`.

## Features
- **In-Memory Resume Caching**: Parses `Archit Jagadeb Resume.pdf` once at startup using `pypdf`. Zero per-message parsing overhead.
- **Strict Grounding & Security**: Prompt injection resistance with strict fallback. If information is not in the resume or prompt injection is attempted, returns exactly:
  `I don't have enough information to answer that.`
- **Rate Limiting**: Sliding-window per-IP rate limiting (configurable via env vars).
- **CORS Restricted**: Allows only the configured `FRONTEND_ORIGIN`.
- **Validation**: Rejects empty, whitespace-only, and overly long questions (> 1000 characters).

---

## Resume Setup
Place your resume PDF in the data directory:
```
backend/data/Archit Jagadeb Resume.pdf
```
Alternatively, specify a custom path using the `RESUME_PDF_PATH` environment variable.

---

## Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

| Variable | Description | Example |
| :--- | :--- | :--- |
| `GROQ_API_KEY` | Your Groq API key (**never hardcoded**) | `your_groq_api_key_here` |
| `GROQ_MODEL` | Model ID on Groq | `llama-3.3-70b-versatile` |
| `FRONTEND_ORIGIN` | Allowed origin for CORS | `http://localhost:5173` |
| `RESUME_PDF_PATH` | Path to resume PDF | `backend/data/Archit Jagadeb Resume.pdf` |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per IP in window | `20` |
| `RATE_LIMIT_WINDOW_SECONDS`| Window duration in seconds | `60` |

---

## Local Development

1. Create and activate a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run tests:
```bash
pytest backend/tests -v
```

4. Start the development server:
```bash
uvicorn backend.main:app --reload --port 8000
```

---

## API Endpoints

### `GET /health`
Returns service status and whether the resume is loaded in memory:
```json
{
  "status": "ok",
  "resume_loaded": true,
  "resume_character_count": 3412
}
```

### `POST /api/chat`
Ask a question about Archit:
- **Request**:
```json
{
  "question": "What technologies do you use?",
  "history": [
    { "role": "user", "content": "Hi" },
    { "role": "assistant", "content": "Hello! I am Archit's AI assistant." }
  ]
}
```
- **Response**:
```json
{
  "answer": "Archit uses React, TypeScript, Python, and FastAPI..."
}
```
If information is not present or an injection is detected:
```json
{
  "answer": "I don't have enough information to answer that."
}
```
