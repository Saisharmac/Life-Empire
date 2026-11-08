# Changelog

## v0.2.0 — Birth-to-Legacy and Economic Foundations

- Changed the starting point from age 18 to birth.
- Added three decision points per quarter and explicit quarter settlement.
- Added age-specific actions from infancy through adulthood.
- Added needs and attributes: health, energy, stress, happiness, smarts, fitness, creativity, discipline, charisma, confidence, social and resilience.
- Added personality traits and household/family background modifiers.
- Added school-age transition, attendance, effort, grade results, college and postgraduate study.
- Added career requirements, salary, performance, experience and promotion progression.
- Added current and savings accounts, term fixed deposits, personal loans, repayment schedules, credit score and basic health cover.
- Added six currency wallets, eight fictional shares, dividends, a diversified fund, digital gold and simplified market indicators.
- Added cash-based property with rent and maintenance.
- Replaced fixed business payouts with a basic firm operating loop, inventory, procurement, payroll, capacity, price, quality, demand, sales and profit.
- Added the paddy farm → rice mill → grocery supply chain with simplified outside suppliers.
- Added foundational relationship, marriage, child and later-life/legacy systems.
- Added the installable PWA manifest, icons, service worker, offline core cache and Android install instructions.
- Added a new v0.2 save schema; v0.1 data is retained separately rather than silently migrated.
- Included automated state/action tests and a clear list of remaining simulation limitations.

## v0.3.0 — Compact Game HUD, Economic Report and Owned Banks

- Rebuilt the main interface as a fixed-height, no-page-scroll game frame: ~20% top character/finance HUD, ~60% live dashboard and ~20% bottom action/navigation dock.
- Replaced large action tiles with compact quick-action buttons, a More Actions sheet and explicit End Quarter control.
- Added persistent character/finance indexes for age, life stage, city, health, energy, stress, happiness, cash, net worth, quarterly flow and available decisions.
- Split the Economy screen from personal banking and market screens; separated income, support, asset sales, financing, expenses, investments, debt service and valuation changes.
- Added company revenue/cost/profit and owned-bank profit reporting.
- Added up to three player-owned banks, bank vaults, deposits, aggregate public lending, owner-related loans, deposit and lending rate controls, early loan repayment and multi-quarter settlement.
- Added branch expansion with capitalised fixed assets, increased deposit attraction and higher operating costs.
- Corrected own-bank cash/loan liquidity double-counting, deposit-withdrawal income classification, deposit-interest cash treatment and public-loan principal recovery.
- Added a bank and company 30-quarter stress test; raised regression suite to 46 passing checks.
- Added responsive compact bank-card layout and changed HUD/dock sizing to approximate the requested 20/60/20 screen distribution.
- Invalidated the service-worker cache for v0.3.0 and updated PWA documentation.
