# Tulip Holding Website

Nieuwe website voor Tulip Holding s.r.o. - Asset Management & Investment in Czech Real Estate.

## Lokale ontwikkeling

**Vereisten:** Node.js (versie 20 of hoger) - alleen nodig voor development server

1. Installeer dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   De site opent automatisch op http://localhost:3000

3. Open `index.html` direct in je browser (geen build nodig voor statische site)

## GitHub Pages Deployment

De website wordt automatisch geïmplementeerd naar GitHub Pages wanneer je code pusht naar de `main` branch.

### Eerste keer instellen:

1. **Repository instellingen:**
   - Ga naar je GitHub repository
   - Klik op **Settings** → **Pages**
   - Onder **Source** selecteer: **GitHub Actions**

2. **Deployment:**
   - Push je code naar de `main` branch
   - De GitHub Actions workflow bouwt en deployt automatisch
   - Na enkele minuten is je site live op: `https://[jouw-username].github.io/[repository-naam]/`

### Vervangen van oude website:

Als je de oude website wilt vervangen:
- Zorg dat de nieuwe repository dezelfde naam heeft als de oude (of update de GitHub Pages URL)
- Of gebruik een custom domain in de Pages instellingen

## Project structuur

- `/en` - Engelse versie
- `/de` - Duitse versie  
- `/cz` - Tsjechische versie
- `/assets/css` - Stylesheets
