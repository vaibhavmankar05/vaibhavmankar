# Migration Plan

The original static site is preserved under `legacy-static/` for reference. The new application is intentionally separate.

## Old → New
- `website/index.html` → React page/components
- `website/css/style.css` + `responsive.css` → `frontend/src/styles/global.css`
- `website/projects/projects-data.js` → `frontend/src/data/portfolio.js`
- `website/js/filters.js` → React project filter state
- `website/js/main.js` → React navigation/state
- contact links → recruiter-first CTA section

## What changed
- React component architecture instead of one large HTML document.
- FastAPI API layer added for future dynamic profile/projects/contact features.
- Recruiter-first information hierarchy.
- Project cards emphasize problem/proof/stack instead of only technology names.
- Market-aligned positioning around Power BI + SQL + Python + Microsoft Fabric.
- AI/RAG appears as a supporting modern-data capability rather than the primary identity.
- GitHub Pages workflow builds only `frontend/dist`.
- Custom domain is prepared through `frontend/public/CNAME`.

## Before production
1. Add the final resume PDF to `frontend/public/resume/Vaibhav-Mankar-Resume.pdf`.
2. Replace any project description that cannot be demonstrated with a more conservative wording.
3. Add screenshots, architecture diagrams and repository/demo links for the strongest projects.
4. Verify all external links.
5. Buy `vaibhavmankar.in` and configure GitHub Pages custom-domain DNS.
6. If the FastAPI backend is deployed, restrict CORS and connect `/api/contact` to a real mail/database provider.
