# Nour Awad — Portfolio

Personal site for Nour Awad, full-stack software engineer. Live at **https://nour-awad.github.io/portfolio/**.

Built with Next.js (App Router, static export), React 19 and Tailwind CSS v4. Project covers are hand-drawn SVG
components — the Delivery Drone cover runs a real A* search at build time.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out (served under /portfolio)
npm run lint
```

## Editing content

All copy lives in two files — no component changes needed for routine updates:

- `src/data/profile.ts` — role, location, links, experience, education, skills
- `src/data/projects.ts` — featured projects, project cards, open-source and team contributions

Repository stars and "last pushed" dates are fetched from the GitHub API at build time (`src/lib/github.ts`).
Any new public repo under `nour-awad` that isn't listed in `projects.ts` shows up automatically under
"Also on GitHub" — add its name to `hiddenRepos` to keep it off the site.

The résumé download is `public/nour-awad-resume.pdf`; replace that file to update it.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`, plus a weekly
rebuild to refresh GitHub data. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
