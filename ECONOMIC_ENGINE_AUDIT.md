# LIFE & EMPIRE — v0.1.1 Audit Report

## Executive verdict

**The v0.1.1 life-simulation foundation is playable and the tested action paths pass. The business/economic system is not yet a Capitalism Lab-style engine.** This is a substantive product gap, not a button-level defect.

Current status:

| Area | Audit result |
|---|---|
| Main navigation and visible action paths | Passed in automated mobile-viewport browser tests |
| Character, career, life actions and relationships | Basic prototype behaviour works |
| Currency, investments and emergency debt | Arithmetic paths tested and passed |
| Save, export, import and damaged-save recovery | Tested and passed for the audited cases |
| Business launch and upgrade actions | Work, but use predetermined fixed payouts |
| Production and supply chain | Not implemented |
| Retail markets, customer demand and competitors | Not implemented |
| Employees, payroll and company accounts | Not implemented |
| City-level macroeconomic simulation | Not implemented |
| Capitalism Lab-equivalent economic engine | **Not present** |

## 1. What was tested

The game was exercised in headless Chromium using a 390 × 844 mobile viewport. The HTML, CSS and JavaScript were loaded together in the browser with a controlled local-save implementation so the app could be tested without depending on a hosted site or a real user's browser data.

The interaction suite covered:

- All five navigation tabs.
- Work, exercise, rest, freelance, family, social and networking actions.
- Study modal, skill selection and submission.
- Both unsuccessful and successful job applications, including immediate refresh of the career view; work while employed; resignation.
- Fixed deposit, index fund and gold investment flows.
- Currency exchange from USD to SGD.
- Food stall, online store and farm business launches; business upgrade; the three-business limit.
- Relocation to all nine supported Indian cities.
- Debt repayment, valid JSON export/import, invalid-import rejection, damaged-save preservation and new-life cancel/confirm/create flows.
- Three repeated high-risk action sequences to check that the page remains responsive and does not accumulate stale modals.

A separate arithmetic suite tested annual salary divided into quarterly pay, unemployed-work income, living costs, upgrade multipliers, city cost indices, foreign-exchange math and fee, year-end investment results, the promotion threshold, and emergency debt interest. A negative-path suite also exercised every eligible job application, the Software Studio launch, insufficient-funds actions, invalid same-currency exchange, over-limit debt repayment, mobile horizontal overflow and unexpected external network requests.

### Recorded test totals

- Main interaction suite: **58/58 passed** in two separate successful runs (116 successful assertion executions).
- Economic arithmetic suite: **19/19 passed**.
- Negative-path / edge suite: **21/21 passed**.
- Combined: **156 successful assertion executions**, with no failed assertions in the completed runs. The main interaction suite also repeated three representative high-risk action sequences within each run.
- The edge suite found no horizontal overflow at 390 px on any of the five tabs, no external network requests from the tested page shell, and no unhandled page errors. The main suite recorded zero page errors and zero console errors.

The test scripts are verification aids used during this audit; they are not shipped as runtime dependencies.

### Interaction coverage by screen

| Screen / flow | Buttons or forms exercised | Result |
|---|---|---|
| Navigation | Home, Career, Wealth, Society, World | Pass |
| Home | Work, Exercise, Rest, Freelance, Study modal, screen shortcuts | Pass |
| Career | All seven job applications, success/failure, employed work, resignation, study | Pass |
| Wealth | Three investment flows, FX conversion, four business launches, upgrade, ownership cap, debt repayment | Pass |
| Society | Family, friends/social, professional networking | Pass |
| World | Relocation to each of the nine Indian cities | Pass |
| Save/settings | Export, valid import, invalid import, new-life cancel and confirm, create profile | Pass |
| Recovery/validation | Corrupt local save preservation, unsupported save rejection, insufficient funds and invalid form paths | Pass |

No visible action path found in the rendered tabs was left unaccounted for in the event handling review. The tests establish that these controls execute in the tested browser harness; they do not guarantee a defect-free experience on every Android device/browser version.

## 2. Defects found and corrected

1. **Career screen stale after a job application.** The job state changed and the quarter advanced, but the career panel did not refresh immediately. `applyJob()` now renders after the result is settled and shows a success/failure message.
2. **No debt repayment path.** Emergency borrowing accrued interest, but there was no way to repay it. A repayment form and action were added. Repayment reduces principal before the next quarter's normal settlement and interest.
3. **Freelance action was implemented but not visible.** A Freelance card is now available on Home.
4. **Freelance skill increment could jump to an unintended value.** It now increments the currently weaker of technology/business by one point.
5. **External font dependency.** The Google Fonts CSS import was removed so the app does not need an external font request to render.
6. **Weak save/import validation.** Save validation now checks the supported currency/investment shapes, known job and business types, core relationships, quarter/action-count consistency and bounded journal structure. Invalid local saves are preserved for recovery instead of silently removed; invalid JSON imports do not replace the current game.
7. **Investment input NaN edge case.** INR spending and investment amounts now reject non-finite or non-positive amounts instead of allowing a malformed amount to poison the wallet value.
8. **Ageing health penalty.** The year-end health decrease is applied once at the appropriate age band, rather than accidentally stacking both the 45+ and 65+ penalties.

## 3. Business and economic engine: Capitalism Lab comparison

Capitalism Lab's own product description presents a much wider connected model: purchasing and manufacturing, product design and quality, pricing and brand loyalty, advertising, distribution, staffing and training, research and development, real estate, a stock market and AI competitors. Its retail enhancement connects location traffic and chain effects to store demand. Its city/economic simulation connects population, employment, wages, GDP growth, inflation, interest rates and consumer prices. Its product simulation also models demand shifting between older and newer product types.

The current LIFE & EMPIRE build does not implement those systems. Its businesses are simple yield-bearing assets:

- Pay a one-time launch cost.
- Store a fixed quarterly payout in the save.
- Receive that amount every quarter regardless of output, customers, stock, location or market conditions.
- Upgrade by paying a fixed amount; the payout is multiplied by 1.55 and displayed value by 1.6.
- Carry a Low/Medium/High label that is descriptive only, not a working risk model.

For example, a Level 1 Food Stall costs ₹18,000 and pays ₹2,600 every quarter. That payout is not derived from meals sold, ingredients, staff, rent, spoilage, footfall or price. The game code does not contain a product inventory or a market-clearing calculation.

### Feature gap matrix

| Economic capability | Capitalism Lab benchmark | LIFE & EMPIRE v0.1.1 |
|---|---|---|
| Raw materials and intermediate products | Products, semi-products and raw materials | None |
| Production | Inputs, manufacturing/farming, output and capacity | None |
| Suppliers and purchasing | Supplier choice and supply links | None |
| Warehousing and logistics | Stock buffers and supply-management tools | None |
| Inventory | Finished and intermediate stock | None |
| Product design/quality | Product quality, design and R&D | None |
| Pricing | Selling prices and market response | None |
| Consumer demand | Demand tied to market/customer conditions | None |
| Retail locations | Traffic and chain-store effects | None; city affects personal living costs only |
| Employees | Staffing, wages and training | None; only the player has a salary |
| Competitors | AI firms that respond to player decisions | None |
| Market share | Competitive product/store performance | None |
| Macroeconomy | GDP, employment, wages, inflation and interest | None |
| Company accounts | Sales, costs and profit by operating firm | Fixed payout only |
| Product lifecycle | Demand shifts to newer products | None |
| Group ownership / securities | Subsidiaries, IPO and share market options | None |

**Assessment:** v0.1.1 is a life-simulation prototype with introductory personal finance. It is not yet the game implied by “life simulator + Capitalism Lab economy.” On the business-simulation dimension, it is still at the placeholder stage. The economic engine should be the next major build priority.

## 4. Recommended next milestone: Economy Engine 0.2

Do not add dozens of unrelated business types first. Build one complete and observable supply chain in one Indian city, then expand only after the accounting reconciles.

### First vertical slice

**Paddy farm → rice mill → packaged rice → grocery store → households**

A single chain is enough to prove the economic architecture. It should contain:

- A city market with household population, income bands, wages, unemployment, traffic and demand for staple goods.
- Raw paddy, processed rice and packaged-rice product definitions with explicit units.
- Suppliers and purchasing prices, delivery time and available supply.
- A farm or supplier that produces/presents raw input stock.
- A rice mill with recipe quantities, capacity, labour, utilities, input stock and output inventory.
- A retail shop with location traffic, selling price, product quality, customer demand, stock on hand and units sold.
- A rival firm with its own stock/price/quality so the player's market share can change.
- A company ledger with revenue, cost of goods sold, wages, rent, utilities, marketing, tax, operating profit, cash and asset value.

### Required simulation relationships

1. Production consumes inputs. If paddy is unavailable, rice output is zero.
2. Inventory is conserved through purchasing, processing, transfers and retail sales. No unit may appear or disappear without a named event (production, spoilage, sale, adjustment).
3. Retail sales cannot exceed either available inventory or consumer demand.
4. Price, quality, location traffic, household income and rival offers influence units sold.
5. Revenue is units sold × selling price. Operating profit is revenue minus explicit operating costs and cost of goods sold.
6. City wage levels affect payroll; city demand and traffic affect retail sales. A city choice must change the business problem—not only personal living expenses.
7. Competitors should make decisions that can change local prices, supply and market share.
8. Every company should have a cash balance and a reconciled period report. Player personal money and company cash must be separate.

### Build acceptance tests

- One farm, mill and store complete an entire production-to-consumer cycle.
- Raw input stock, mill output and store stock reconcile to the unit.
- Zero supply, closed facility, no staff or full storage produce the correct visible bottleneck.
- No sales occur with zero finished inventory.
- Lowering price within a tested range changes demand/sales; higher quality changes product appeal according to documented rules.
- Increasing traffic affects store demand while controlling for other variables.
- A rival entering the market can reduce the player's sales/share under the same conditions.
- A full quarter report reconciles revenue, cost of goods sold, wages, rent, utilities, other expenses and net operating profit.
- Save, reload, export and import preserve every firm's stock, cash, supplier links and production state exactly once.

Only after this vertical slice passes should the game add more industries, additional cities, warehouses, multiple stores, marketing, R&D, wider product lifecycles, stock listings and subsidiary structures.

## 5. Official Capitalism Lab reference pages

These links are used as design references for the systems named above, not as a claim that LIFE & EMPIRE already implements them:

- Press kit / overall business model: https://www.capitalismlab.com/press-kit/
- Retail simulation enhancement: https://www.capitalismlab.com/new-content/retail-simulation-enhancement/
- Warehouse and supply-chain features: https://www.capitalismlab.com/new-content/
- Enhanced macroeconomic simulation: https://www.capitalismlab.com/new-features/enhanced-macroeconomic-simulation/
- City dynamics: https://www.capitalismlab.com/new-features/city-dynamics/
- Enhanced product simulation and demand shifts: https://www.capitalismlab.com/new-content/enhanced-product-simulation/

## 6. Known testing boundary

The automated tests validate app behaviour in a controlled Chromium page with simulated browser storage. They do not yet prove installation, service-worker caching, offline behaviour or performance on a physical Android handset. The game has not yet been published to GitHub Pages in this audit. Those remain release checks.
