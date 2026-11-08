# LIFE & EMPIRE v0.2.0

An India-first, birth-to-legacy life simulation with a multi-decision quarterly calendar, personal attributes and needs, family and education, banking and investments, property, and a small connected business economy.

## What changed in v0.2.0

- Start at birth (age 0), not age 18.
- Three decision points are available in each quarter. Actions can be combined; the player chooses when to settle the quarter.
- Age-appropriate life choices: infancy, early childhood, school years, adolescence, adulthood and later life.
- Character identity, personality traits, family background and a household budget influence the journey.
- Personal attributes include health, energy, stress, happiness, smarts, fitness, creativity, discipline, charisma, confidence, social and resilience.
- School begins at age six. Attendance, study effort, wellbeing and smarts influence school results. College and postgraduate study are available later.
- Career progression, salary, work performance, experience and promotion.
- Bank accounts, savings interest, fixed deposits and maturity, term loans and repayment, credit score, insurance and multi-currency wallets.
- A fictional stock market, dividends, mutual-fund NAV, digital gold, FX conversion spread, market sentiment, inflation, policy rate and unemployment indicators.
- Rent-producing property with maintenance expenses.
- Five company types: paddy farm, rice mill, grocery store, electronics workshop and software studio. Companies have separate cash, workers, payroll, capacity, production, inventory, pricing, quality, marketing, demand, sales, revenue, costs and profit.
- A starter owned supply chain: Paddy Farm → Rice Mill → Grocery Store, with simulated external suppliers when owned supply is insufficient.
- Relationships, dating, marriage, children, city relocation, annual life events and an end-of-life legacy screen.
- Local save, JSON backup/restore, offline asset cache and installable PWA support.

## Run locally

The project is static HTML/CSS/JavaScript. No Node.js, npm, build step, backend, API key or paid service is required.

For a simple local preview, open `index.html` in a desktop browser. Browser storage is scoped to the browser profile. **PWA installation and service-worker offline support require HTTPS or localhost**, so opening the file directly is not a valid PWA installation test.

## Publish to GitHub Pages

1. Download and extract this project ZIP.
2. Create or open the GitHub repository where the game should live.
3. Upload the *contents* of this folder to the repository root. The root should contain `index.html`, `game.js`, `styles.css`, `manifest.webmanifest`, `service-worker.js`, `.nojekyll` and the `icons` folder.
4. Commit the files to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**, choose `main`, and choose `/(root)`.
7. Save. Wait for GitHub Pages to publish the site, then open the HTTPS URL shown by GitHub Pages.
8. First load the game while online so the service worker can install and cache the core files.

GitHub Pages serves published `github.io` sites over HTTPS, which is required for the service worker and PWA installability.

## Install on Android

This is an installable **Progressive Web App (PWA)**, not a signed APK and not a Play Store listing.

1. Open the published HTTPS GitHub Pages URL in **Chrome on Android**. Do not open the repository page, a raw file URL or the downloaded `index.html` file.
2. Allow the first page load to finish while online.
3. Open Chrome's **⋮** menu.
4. Choose **Install app** or **Add to Home screen** (the wording depends on browser/version).
5. Confirm. Launch **LIFE & EMPIRE** from the new home-screen/app-drawer icon. It should open in its own app-like window.
6. Reopen the game once while online after an update so the new service-worker cache can be installed.

The game listens for the browser's `beforeinstallprompt` event and shows an in-game install action when the browser offers it. That event is not guaranteed to fire on every browser/device. The manual Chrome menu route is therefore included as the fallback.

### iPhone / iPad

Open the HTTPS site in Safari, tap **Share**, then **Add to Home Screen**. iOS presents its own install flow.

## Save data and privacy

- Game saves are stored in the browser's local storage on the device.
- The game does not have cloud sync or a user account.
- Clearing browser/site data, uninstalling the browser or switching devices can remove access to the local save.
- Use **Settings → Export backup** regularly and keep the downloaded JSON file somewhere safe.
- Import only a v0.2-compatible JSON backup. v0.1.x saves use a different schema and are deliberately left untouched rather than being silently overwritten or incorrectly migrated.
- No analytics, ads, remote game API or external font service is required by this build.

## Simulation notes and limitations

This is a playable systems prototype, not a complete commercial-scale simulation. The market and listed firms are fictional and deterministic formulas are mixed with random quarterly events. Currency rates are fixed in-game reference values, not live FX quotes. Share prices, dividends, fund NAV and gold prices are simulated, not connected to an exchange and not financial advice.

The company system has a basic production/inventory/sales loop and a first supply chain. It does not yet model a full national input-output economy, real AI-controlled competing firms, logistics networks, long-term supplier contracts, a detailed labour market, public-company statements or sophisticated dynamic consumer segmentation. The market macro indicators are a lightweight game model, not an econometric forecast.

Other areas are foundational rather than deep: NPCs do not all have independent life simulations; family, dating and child development are simplified; property mortgages and commercial credit facilities are not implemented; school and university systems are abstracted; no multiplayer exists.

## Project files

- `index.html` — app shell and metadata
- `styles.css` — responsive mobile-first interface
- `game.js` — simulation, UI actions, storage and install prompt
- `manifest.webmanifest` — PWA identity, display and icons
- `service-worker.js` — offline cache and update lifecycle
- `icons/` — app icons
- `GAME_MASTER_BLUEPRINT.md` — rules, systems and progression
- `ECONOMIC_ENGINE_AUDIT.md` — economic model and limitations
- `TEST_REPORT.md` — automated test coverage and caveats

## Run the included checks

Install Node.js (only for running tests; the game itself does not need Node), open a terminal in this folder, then run:

```bash
node --check game.js
node tests/test_game.cjs
node tests/check_pwa.cjs
```

The game-state suite uses Node's built-in modules and a simulated DOM. It does not require npm packages.
