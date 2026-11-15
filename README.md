# Archit Jagadeb — Portfolio & "Ask Archit" AI Assistant

Modern personal portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**, featuring an interactive personal AI assistant powered by **FastAPI** and **Groq** that answers visitor questions strictly from Archit's resume.

---

## 1. Local Setup

### Prerequisites
- **Node.js** (v18+) & **npm**
- **Python** (v3.10+)

### Resume Placement
Place your resume PDF in the backend data directory with this exact filename:
```
backend/data/Archit Jagadeb Resume.pdf
```
*The FastAPI backend parses and caches the text in memory once at startup via `pypdf`.*

---

### Backend Setup (FastAPI + Groq)

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `backend/.env` with your values:
   ```ini
   GROQ_API_KEY=your_groq_api_key_here
   GROQ_MODEL=openai/gpt-oss-120b
   FRONTEND_ORIGIN=http://localhost:5173,http://localhost:5174
   RESUME_PDF_PATH=backend/data/Archit Jagadeb Resume.pdf
   RATE_LIMIT_MAX_REQUESTS=20
   RATE_LIMIT_WINDOW_SECONDS=60
   ```

5. Run backend unit & integration tests:
   ```bash
   pytest tests -v
   ```

6. Start the FastAPI backend server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```
   *The API will be available at `http://localhost:8000`.*

---

### Frontend Setup (React + Vite)

1. In the repository root, install npm packages:
   ```bash
   npm install
   ```

2. Configure frontend environment variables:
   ```bash
   cp .env.example .env
   ```
   Ensure `.env` contains:
   ```ini
   VITE_API_BASE_URL=http://localhost:8000
   ```

3. Start the Vite dev server:
   ```bash
   npm run dev
   ```
   *Open `http://localhost:5173` in your browser.*

---

## 2. Production Deployment

### Option A: Deploying Backend on Render

1. Sign in to [Render](https://render.com/) and click **New +** > **Web Service**.
2. Connect your `archit-portfolio` repository.
3. Configure service settings:
   - **Name**: `archit-portfolio-api` (or your preferred name)
   - **Root Directory**: `backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. In the **Environment Variables** tab, add:
   - `GROQ_API_KEY`: `your_groq_api_key`
   - `GROQ_MODEL`: `openai/gpt-oss-120b` (or `llama-3.3-70b-versatile`)
   - `FRONTEND_ORIGIN`: `https://architjagadeb.netlify.app`
5. Click **Create Web Service**. Once deployed, copy your backend URL (e.g., `https://archit-portfolio-api.onrender.com`).

*(Alternative: You can deploy on **Railway** by selecting the repo, setting Root Directory to `backend`, and adding the same environment variables. The included `backend/Procfile` will automatically handle startup).*

---

### Option B: Deploying Frontend on Netlify

1. Sign in to [Netlify](https://www.netlify.com/) and click **Add new site** > **Import an existing project**.
2. Select your `archit-portfolio` GitHub repository.
3. Configure the build settings:
   - **Base directory**: *(leave empty / root)*
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Under **Site configuration** > **Environment variables**, add:
   - `VITE_API_BASE_URL`: `https://YOUR-BACKEND-DOMAIN` (e.g. `https://archit-portfolio-api.onrender.com`)
5. **Deploy Site**:
   - If Netlify built before you added the environment variable, trigger **Deploy site** > **Clear cache and deploy site** so Vite bakes the `VITE_API_BASE_URL` into the production build.
6. Custom domain setup:
   - Set up your domain or ensure Netlify subdomain matches your `FRONTEND_ORIGIN` (e.g. `https://architjagadeb.netlify.app`).

---

## 3. Final Verification

### 1. Test `/health`
Check if the API and cached resume are healthy:
```bash
curl https://YOUR-BACKEND-DOMAIN/health
```
Expected response:
```json
{"status":"ok","resume_loaded":true,"resume_character_count":4869}
```

### 2. Test a Valid Resume Question
```bash
curl -X POST https://YOUR-BACKEND-DOMAIN/api/chat \
  -H "Content-Type: application/json" \
  -H "Origin: https://architjagadeb.netlify.app" \
  -d '{"question": "Where does Archit study?"}'
```
Expected response:
```json
{"answer":"Archit is pursuing a B.Tech in Computer Science at The Northcap University."}
```

### 3. Test an Unsupported Question (Strict Fallback)
```bash
curl -X POST https://YOUR-BACKEND-DOMAIN/api/chat \
  -H "Content-Type: application/json" \
  -H "Origin: https://architjagadeb.netlify.app" \
  -d '{"question": "What is his favorite video game?"}'
```
Expected response:
```json
{"answer":"I don't have enough information to answer that."}
```

### 4. Git Security Check
Verify that secrets and `.env` files can never be committed:
```bash
git status
git check-ignore .env backend/.env
```
Both `.env` and `backend/.env` are strictly ignored by `.gitignore`.

---

## Architecture Overview

```
archit-portfolio/
├── .env.example                     # Sample frontend environment config
├── backend/
│   ├── .env.example                 # Sample backend environment config
│   ├── Procfile                     # Deployment start command for Render / Railway
│   ├── data/
│   │   └── Archit Jagadeb Resume.pdf # Ingested resume PDF
│   ├── main.py                      # FastAPI app with CORS, rate limiting, and chat endpoint
│   ├── rate_limiter.py              # Sliding-window IP rate limiter
│   ├── requirements.txt             # Python dependencies
│   ├── resume.py                    # Startup text extraction & cache via pypdf
│   └── tests/
│       └── test_api.py              # Integration test suite
├── public/
│   ├── _redirects                   # Netlify SPA routing rules
│   └── port-1-hd-nobg.png           # Hero portrait
└── src/
    ├── App.tsx                      # Root component mounting AskArchitModal
    ├── api/
    │   └── chatApi.ts               # Typed frontend client for /api/chat
    └── components/
        ├── AskArchitModal.tsx       # Accessible chatbot drawer with suggested chips
        ├── ContactButton.tsx        # Styled button/link with metallic gradient
        └── HeroSection.tsx          # Hero layout with Resume (left) & ASK ARCHIT (right)
```
