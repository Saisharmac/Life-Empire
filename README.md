# LIFE & EMPIRE v0.7.0

An India-first, birth-to-legacy life, education, career, banking, market and business simulation. This is a static HTML/CSS/JavaScript project designed for GitHub Pages and installable as a Progressive Web App (PWA).

## What is included

### Life simulation
- Start at birth and progress through early childhood, school, adolescence, higher education, work and later life.
- Three decision points per quarter; actions can be combined before manually settling the quarter.
- Character attributes and needs: health, energy, stress, happiness, smarts, fitness, creativity, discipline, charisma, confidence, social connection, resilience and empathy.
- Family background, household support, siblings, age-gated choices, relationships, marriage and children.
- A large event catalogue with age ranges, categories, weights, cooldowns, multiple choices and consequences.

### Education and career
- School types and streams, subject marks, attendance, study effort and progression.
- Entrance/professional exam catalogue, programme catalogue and institution catalogue.
- Institution pathways include IIT/IIM-style selective routes and other public, private and specialist institutions. Admission and fee values are game-balancing estimates, not current official eligibility or fee guidance.
- Career tracks and job roles with education, skill, experience, portfolio and age requirements. Some roles permit demonstrated skill/experience alternatives where appropriate; regulated professions must retain required formal qualifications and licences.

### Personal finance and markets
- Cash, current/savings balances, fixed deposits, personal loans, repayment schedules, insurance and credit score.
- Fictional exchange securities, buy/sell orders, dividend events, mutual funds, digital gold and simulated FX.
- Prices and returns are fictional game values, not live financial data or investment advice.

### Business and banking
- Companies with paid-in capital, working capital, inventory, production, procurement, staff, payroll, pricing, quality, marketing, sales, expenses, depreciation and retained earnings.
- Farm → mill → grocery starter supply chain and city-level demand/rival calculations.
- Capacity upgrades are capital expenditure, not instant profit. Distributions are limited by realised retained earnings and liquidity reserves. Owner capital is not revenue.
- Player-owned banks with paid-up capital, deposits, loan book, liquidity/capital constraints, interest income/expense, provisions/defaults, branches and owner-related loans.
- Separate economic reporting for earned income, support, asset sales, financing, expenses, investments, debt service and business/bank results.

### Interface and Android
- Fixed-height game frame, compact action controls, persistent character/finance HUD and separate sections.
- No page-level vertical scrolling in the game frame; contained dialogs may scroll when a form is taller than the available viewport.
- PWA manifest, icons and service worker for installable standalone use and offline caching after first successful online load.

## Run locally

Open `index.html` in a modern browser for a basic local preview. PWA installation and service-worker support require HTTPS or localhost. No npm, compiler, API key, server, account or paid backend is required.

## Deploy to GitHub Pages

1. Download and extract this ZIP.
2. Upload the *contents* of the extracted folder to the root of your repository (not the ZIP itself).
3. Confirm the root contains `index.html`, `game.js`, `styles.css`, `content/catalog.js`, `manifest.webmanifest`, `service-worker.js`, `.nojekyll`, `icons/` and `tests/`.
4. Commit to `main`.
5. Open **Settings → Pages → Deploy from a branch**, choose `main` and `/(root)`, then save.
6. Open the HTTPS GitHub Pages URL on Android Chrome, wait for the first load/cache, then choose **Install app** or **Add to Home screen** from Chrome's menu.

Use relative `./` paths as supplied. The app is a PWA, not a signed APK or Play Store package. A new deployment should be opened online once so the versioned service worker can install and cache the new files.

## Saves and privacy

- Save data is local to the browser profile/device; there is no cloud sync or user account.
- Export JSON backups regularly, especially before clearing browser data, changing devices or replacing a deployment.
- The game has no analytics, ad network, external font dependency or remote game API.

## Honest simulation boundaries

This is a detailed playable prototype, not a complete real-world economic model. Institutions, exams, fees, admissions thresholds, salaries, market prices, rates and event weights are simplified game data. Verify real admissions and professional licensing with the relevant official body. The stock market and FX are fictional; no real trades or bank services are connected.

The business engine models production, procurement, inventory, pricing, demand, rivals, staffing and quarterly accounting, but does not yet reproduce the full Capitalism Lab national economy. Macro feedback, deep logistics, autonomous rival conglomerates, granular consumer segmentation, tax/regulatory law, interbank markets, central-bank policy and complete insolvency resolution remain limited or future work. Owned-bank rules are game abstractions, not regulatory compliance.

## Project structure

- `index.html` — app shell and script loading
- `styles.css` — fixed-screen responsive interface
- `game.js` — game state, simulation rules, transaction handlers and rendering
- `content/catalog.js` — education, institutions, exams, careers, jobs and event content
- `manifest.webmanifest` — PWA metadata
- `service-worker.js` — versioned offline cache
- `icons/` — app icons
- `tests/test_game.cjs` — state/action regression suite
- `tests/check_pwa.cjs` — PWA asset/manifest checks
- `tests/check_catalog.cjs` — content catalogue integrity checks
- `GAME_MASTER_BLUEPRINT.md` — system design
- `ECONOMIC_ENGINE_AUDIT.md` — accounting model and known limitations
- `TEST_REPORT.md` — test coverage and limitations
- `SOURCES.md` — official reference starting points for real-world pathways
- `CHANGELOG.md` — release history

## Run checks (Node.js required only for tests)

```bash
node --check game.js
node tests/test_game.cjs
node tests/check_pwa.cjs
node tests/check_catalog.cjs
```
