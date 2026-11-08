# LIFE & EMPIRE v0.3.0

A compact, India-first birth-to-legacy life, banking, markets and business simulator. This release redesigns the main game as a fixed-screen mobile interface and deepens personal/company economics and player-owned banking.

## What's new in v0.3.0

### Fixed-screen game interface

- The primary game frame uses the full viewport (`100dvh`) and suppresses page-level vertical scrolling.
- Approximate screen allocation: 20% top identity/finance index, 60% central live dashboard, 20% bottom decision dock/navigation.
- The top index shows the character, age, life stage, city, health/energy/stress/happiness meters, cash, net worth, quarterly cash flow and remaining decision slots.
- The bottom dock has compact action buttons, More Actions, End Quarter and eight compact section tabs: Life, Self, School, Bank, Market, Economy, Empire and World.
- Long forms open inside a contained modal. The main game canvas itself does not become a story feed or a vertically scrolling page.

### Multi-decision life simulation

- Start at birth, age 0. Three decision slots are available per quarter.
- Actions can be combined within the same quarter; the player explicitly settles the quarter.
- Age-appropriate choices cover infancy, early childhood, schooling, adolescence, adulthood and later life.
- Personal attributes and needs include health, energy, stress, happiness, smarts, fitness, creativity, discipline, charisma, confidence, social and resilience.
- School starts at six, with attendance, study effort and annual school results. College and postgraduate study are available later.
- Household funding, parental support, school costs and age-transition events affect the character's options.

### Personal finance and markets

- Personal current/savings accounts, fixed deposits, personal loans, scheduled repayments, insurance and credit score.
- Six simulated currency wallets with a conversion spread; exchange rates are fixed game rates, not live FX.
- A fictional equity exchange with multiple securities, share buy/sell orders, sort controls (movers, price, dividend and name), dividends and a brokerage charge.
- Mutual-fund units/NAV and digital gold, with buy and redeem/sell actions.
- The Market section is a game exchange, not a live broker connection. Purchases consume a decision slot.

### Separate economic view

- The Economy tab separates earned income, household support, asset-sale proceeds, financing/loans, living and operating expenses, investment purchases, debt repayments and market valuation changes.
- Business revenue, business costs, business profit and owned-bank profit are displayed separately from personal cash flow.
- Loan proceeds are classified as financing, not earnings. Investment purchases are assets/capital allocation, not everyday consumption. Moving money between personal cash and your own bank deposit is an internal transfer, not income.

### Player-owned banks

- Own up to three separate banks.
- Each bank has paid-up capital, vault cash, deposits/liabilities, public customer loan book, related-party loans to the player, interest income/cost, operating expenses, trust, branches and quarterly profit/loss.
- The player can deposit/withdraw personal funds, borrow from an owned bank, repay early, set quarterly lending rates and annual deposit rates, and open a new branch.
- Related-party loans are represented twice: an asset on the bank's books and a personal liability. The loan is constrained by available liquidity and the bank's reserve/buffer rules.
- Branch expansion uses bank cash and is recorded as a capitalised bank asset; each branch increases customer reach and quarterly operating costs.

### Company and asset systems

- Multiple foundational business types with company cash, working capital, workers, payroll, capacity, production, stock/inventory, pricing, quality, marketing, demand, sales, revenue, expenses and quarterly profit/loss.
- A starter farm → mill → grocery supply chain with outside suppliers when internal supply is insufficient.
- Rental property, maintenance costs, family/relationships, relocation and foundational life events.

## Install and run

The project is plain HTML, CSS and JavaScript. The game itself needs no Node.js, npm, compiler, server API, account, paid service or API key.

For a simple local preview, open `index.html`. Browser local storage works in the browser profile. **PWA installation and service-worker offline support require HTTPS or localhost**; opening an HTML file directly is not an install test.

## Publish to GitHub Pages

1. Download and extract `life-and-empire-v0.3.0.zip`.
2. Upload the *contents* of this folder to the root of the target GitHub repository. The root must include `index.html`, `game.js`, `styles.css`, `manifest.webmanifest`, `service-worker.js`, `.nojekyll` and the `icons` folder.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main`, and select `/(root)`.
6. Save and open the HTTPS URL published by GitHub Pages.
7. Keep the first load online until the service worker has cached the core files.

If the game is published in a repository subpath, keep the relative `./` paths in the manifest and service worker. Do not upload only the ZIP itself; extract it and upload its contents.

## Install on Android

This is an installable **Progressive Web App (PWA)**, not a signed APK and not a Play Store package.

1. Publish the project to an HTTPS GitHub Pages URL.
2. Open that URL in Chrome on Android (not the GitHub repository page and not a raw `index.html` URL).
3. Let the app finish its first online load.
4. Open Chrome's **⋮** menu and choose **Install app** or **Add to Home screen**; wording depends on Chrome/Android version.
5. Confirm and launch **LIFE & EMPIRE** from the home screen or app drawer.
6. Reopen the installed app online after a new release so the updated service-worker cache can activate.

The game includes a PWA manifest, standalone display mode, icons and service-worker cache. The in-game install button appears when the browser exposes its install prompt. The manual Chrome menu is the fallback because browsers do not always expose that prompt. Actual install availability depends on HTTPS, browser support and browser install criteria.

## Save data and privacy

- Saves are local to this browser profile on this device. There is no cloud sync or user account.
- Export a JSON backup regularly, especially before clearing site data, changing browser/device or reinstalling.
- v0.2 saves migrate to the v0.3 save schema on load. Old v0.1.x save data is not silently overwritten.
- No analytics, advertisements, remote game API or external font request is needed by this build.

## Simulation boundaries

This is a playable systems prototype, not a commercial-scale simulation. Market tickers and exchange prices are fictional; they are not real stocks or live prices. No real trading or banking provider is connected.

Owned banks have an aggregate customer deposit/loan book and deterministic quarterly formulas. They do not yet have full regulator capital rules, customer-by-customer credit underwriting, deposit insurance claims, interbank markets, central-bank facilities or bank-failure resolution. The player can own up to three banks; autonomous rival-bank groups are not yet implemented.

The company economy includes a basic production, procurement, inventory and sales loop, but not a complete national economy: rival firms, logistics, long-term supplier contracts, detailed product categories, full customer segmentation, taxes, GDP/unemployment feedback and advanced industry cycles remain future work. Relationships, family NPCs, school/university and property development are foundational simulations, not fully autonomous systems. Mortgages, construction, multiplayer and a native Android APK are not included.

## Project files

- `index.html` — app shell and metadata
- `styles.css` — fixed-screen mobile layout and compact controls
- `game.js` — simulation engine, transactions, UI, local storage and install prompt
- `manifest.webmanifest` — PWA identity, display mode and icons
- `service-worker.js` — offline cache and navigation fallback
- `icons/` — Android/PWA icons
- `GAME_MASTER_BLUEPRINT.md` — gameplay rules and system design
- `ECONOMIC_ENGINE_AUDIT.md` — economic accounting model and limitations
- `TEST_REPORT.md` — automated regression coverage and testing caveats
- `CHANGELOG.md` — release history

## Run the included checks

The game needs no build step. Node.js is used only to run the included regression checks:

```bash
node --check game.js
node tests/test_game.cjs
node tests/check_pwa.cjs
```

The game-state suite uses Node's built-in modules and a simulated DOM/localStorage. It exercises the actual delegated click/form handlers and simulation calculations; it is not a substitute for physical Android or full browser QA.
