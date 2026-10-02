# Vaibhav Mankar — Data Analytics Portfolio

A recruiter-first portfolio application built from the existing static portfolio.

## Positioning
**Data Analytics Engineer | Power BI | SQL | Python | Microsoft Fabric**

The application is intentionally centered on analytics/BI rather than presenting React itself as the primary career identity. React is used as the UI technology; FastAPI is included as an optional backend/API layer.

## Structure
```text
portfolio-app/
├── frontend/          # React + Vite recruiter-facing UI
├── backend/           # FastAPI API layer for profile/projects/contact
├── docs/              # Market research and portfolio strategy
└── .github/workflows/ # GitHub Pages deployment for frontend
```

## Run frontend
```powershell
cd frontend
npm install
npm run dev
```

## Build frontend
```powershell
cd frontend
npm run build
```

## Run backend
```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

API endpoints:
- `GET /api/health`
- `GET /api/profile`
- `GET /api/projects`
- `POST /api/contact` (placeholder; connect an email provider before production use)

## Deployment
The frontend is designed for GitHub Pages. The FastAPI backend requires a separate Python-capable host; it is not deployed by GitHub Pages.

Before going live, place the final resume at:
`frontend/public/resume/Vaibhav-Mankar-Resume.pdf`

Then connect the custom domain `vaibhavmankar.in` through GitHub Pages after the deployment is verified.
