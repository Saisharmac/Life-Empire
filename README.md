# LIFE & EMPIRE — Build 0.1.1

An India-first, mobile-first life simulation and early empire-building prototype. It is a static web project designed for Android Chrome and GitHub Pages. No framework, compilation, account, paid API or backend is required.

## What this build actually includes

- Character creation with nine Indian starting cities and three economic backgrounds.
- Quarterly life loop: work, study, exercise, rest, freelance, family, friends and networking.
- Career applications, qualifications, skill progression, salary, experience, promotions and resignation.
- INR, USD, AED, SGD, GBP and EUR wallets with fixed in-game exchange rates and a 1.5% fee.
- Fixed deposits, index funds and gold with year-end simulated returns.
- Four starter businesses, launch and upgrade actions, with a three-business ownership limit.
- City relocation and city-specific living-cost indices.
- Quarterly living costs, emergency borrowing at 1.2% interest per quarter, and manual debt repayment.
- Automatic browser save, JSON export and JSON import with stricter schema validation.
- Static offline-shell caching on supported HTTPS hosting. No external font or runtime service is required.

## Important economy disclosure

The current business system is a **placeholder cash-flow model**, not a Capitalism Lab-style economic simulation. Each starter business pays a fixed, preconfigured amount every quarter. Upgrades multiply that payout and increase the displayed asset value. The game does **not** simulate production, recipes, raw materials, suppliers, inventory, employees, wages, selling prices, customers, demand, competition, market share, business operating accounts or product innovation.

City cost indices only change the character's living expenses. They do not yet create city-specific labour markets, consumer demand or industrial advantages. The current game is therefore a playable life-simulation foundation with introductory money mechanics—not yet a deep business/economy game.

See `ECONOMIC_ENGINE_AUDIT.md` for the detailed comparison and the proposed next milestone.

## Game rules in 0.1.1

1. Each successful major action advances one quarter.
2. Four actions complete one in-game year and increase the character's age.
3. Employment salary is paid at one quarter of the annual salary when a quarter settles.
4. Unemployed work and freelance actions have fixed game payouts.
5. Starter businesses receive a fixed quarterly payout; this is not calculated from real sales or costs.
6. Living costs are charged each quarter and vary by family background and city cost index.
7. Uncovered living costs become emergency debt; outstanding debt accrues 1.2% quarterly interest.
8. Investment returns are applied at year-end. Index funds and gold can gain or lose value.
9. INR is the accounting base. Other currency wallets use fixed game simulation rates, not live exchange rates.
10. Currency exchanges apply a 1.5% fee and advance one quarter.

## Run locally

The app is static. Open `index.html` for a basic local test. For service-worker testing, run a local HTTP server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `life-and-empire`.
2. Extract this ZIP file.
3. Upload the **contents** of this folder (`index.html`, `styles.css`, `game.js`, `manifest.webmanifest`, `service-worker.js` and documentation) to the repository root.
4. Open **Settings → Pages**.
5. Select **Deploy from a branch**, branch `main`, folder `/ (root)`, then save.
6. Open the HTTPS Pages URL on your Android phone in Chrome.
7. Use Chrome's menu → **Add to Home screen**.

There is no npm install, framework, build command, paid hosting, database or API key required.

## Save data and backups

- The game saves in the browser's `localStorage` for that browser profile and device.
- There is no cloud sync or automatic cross-device transfer.
- Use **Save & settings → Export save file (.json)** to keep a backup.
- Use **Import save file (.json)** to restore a compatible backup.
- Invalid or damaged saves are preserved instead of being silently deleted. The setup screen offers a backup recovery input.
- Clearing site data, changing browser profiles or uninstalling the browser can remove the local save. Keep a JSON backup.

## Audit status

The v0.1.1 interaction audit was run in headless Chromium at a 390 × 844 mobile viewport. It covered all five tabs, visible life actions, job success/failure, study submission, all investment forms, currency exchange, business launch/upgrade/cap, all nine city moves, debt repayment, JSON export/import, invalid-import rejection, corrupt-save recovery and new-life confirmation. A separate economic-arithmetic suite checked salary, living costs, FX, investment settlement, promotion and debt-interest calculations.

The test report and remaining limitations are in `ECONOMIC_ENGINE_AUDIT.md`. Automated browser tests do not replace testing on a real Android device or verification after publishing to GitHub Pages.

## File structure

```text
life-and-empire-v0.1.1/
├── index.html
├── styles.css
├── game.js
├── manifest.webmanifest
├── service-worker.js
├── README.md
├── GAME_MASTER_BLUEPRINT.md
└── ECONOMIC_ENGINE_AUDIT.md
```
