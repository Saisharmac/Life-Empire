# LIFE & EMPIRE — Game Master Blueprint

**Current audited baseline:** Build 0.1.1. The current business payout system is intentionally a placeholder; see `ECONOMIC_ENGINE_AUDIT.md`.

**Document version:** 0.1  
**Playable build:** 0.1.0  
**World setting:** India  
**Currency approach:** Multi-currency  
**Target:** Android-first mobile web game, hosted on GitHub Pages

---

## 1. Product vision

LIFE & EMPIRE is a long-form life simulation in which a player begins as an ordinary young adult and can shape a complete life: education, work, relationships, money, businesses, ownership, travel and eventually a multi-company empire.

The game should combine the quick decisions and life events of a personal life simulator with the deeper progression and management of a business/economy simulator. A player's path is open-ended: a stable employee life, a professional career, entrepreneurship, investing, property ownership or a combination of these should all be viable.

The player should feel that decisions have consequences. Time, money, health, relationships, skills and opportunity must interact rather than operate as disconnected menus.

## 2. Locked product decisions

| Area | Locked decision |
|---|---|
| Product name | LIFE & EMPIRE |
| Starting world | India |
| Currency model | Multiple currency wallets, INR base accounting |
| Primary device | Android phones |
| Delivery | Static web app on GitHub Pages |
| Runtime | HTML, CSS and vanilla JavaScript |
| Backend | None in the first release |
| Cost target | ₹0 hosting and no mandatory paid APIs |
| Save model | Local device save plus manual JSON backup/restore |

These are foundational constraints. New features should not introduce a paid service, mandatory account, framework build process or server dependency without a deliberate product decision.

## 3. Core player loop

1. Review the character's condition, money, career, relationships and current quarter.
2. Choose a meaningful action: work, study, exercise, rest, socialise, network, invest, build or relocate.
3. The action consumes one quarter.
4. The simulation settles income, business cash flow and living expenses.
5. At the end of four quarters, the character ages by one year, investments are marked, career progression is evaluated and a life event may occur.
6. New opportunities unlock as the character develops skills, qualifications, capital, relationships and experience.

The time system is intentionally predictable: one major action equals one quarter; four completed actions equal one in-game year. Future features must use this same clock unless a documented exception is necessary.

## 4. Character and life systems

### 4.1 Character creation

- Character name.
- Indian starting city.
- Family/economic background: working class, middle class or affluent.
- Starting cash and living-cost assumptions vary by background.
- The character starts at age 18 in the prototype.

### 4.2 Personal attributes

The initial attribute set is deliberately small and extensible:

- Health
- Happiness
- Intelligence
- Fitness
- Charisma
- Age
- Outstanding debt

Attributes should have a purpose. Health and happiness should affect life outcomes; intelligence and skill development should influence education and work; charisma and relationships should influence social and professional opportunities.

### 4.3 Education and skills

Four broad skill tracks are used in the first build:

- Technology
- Business
- Finance
- Communication

Education progression is High School → Diploma → Bachelor's Degree → Master's Degree. The prototype uses study actions as an abstracted time commitment. A later version can introduce institutions, fees, scholarships, entrance exams, course durations and subject choices without changing the underlying character schema.

### 4.4 Career

Career progression should include applications, qualification checks, salaries, experience, promotions, job changes and unemployment. Jobs should have different requirements and salary bands. Future versions should add sectors, employers, job markets, role levels, performance reviews, layoffs and remote/international jobs.

### 4.5 Relationships and family

The prototype begins with family, friends and professional network indicators. Future phases should add parents, siblings, partner, marriage, children, caregiving, family events and relationship consequences. Relationship content should be respectful and choice-driven; it should not reduce people to simple purchasable resources.

## 5. Economy and multi-currency model

### 5.1 Accounting design

- INR is the base accounting currency for the India starting world.
- Wallets are maintained separately for INR, USD, AED, SGD, GBP and EUR.
- Each wallet is displayed in its own currency and can be converted into another wallet.
- In-game exchange rates are simulation constants and are not presented as live market data.
- Exchange fees are part of the game economy.

### 5.2 Income and expenditure

Income sources planned:

- Employment salary
- Freelance and contract work
- Business operating profit
- Investment returns
- Rental income and asset proceeds
- International work and trade

Expense categories planned:

- Daily and household living costs
- Education and training
- Transport and travel
- Healthcare
- Family and social events
- Business operating costs
- Taxes and fees
- Asset maintenance and debt service

### 5.3 Capital and investment

Initial prototype instruments:

- Fixed deposit
- Index fund
- Gold

Planned instruments and systems:

- Savings and current accounts
- Loans, credit cards and credit score
- Bonds and government securities
- Stocks and diversified funds
- Real estate and rent
- Vehicles and depreciating assets
- Insurance and emergency expenses
- Taxation and inflation

Returns must be simulated, clearly labelled as game mechanics and balanced for playability. They must not be marketed as financial advice or real-world forecasts.

## 6. Business and empire systems

The business system should evolve in layers:

1. Launch a small venture using personal capital.
2. Track revenue, expenses, profit, cash reserves and business value.
3. Reinvest to upgrade capacity and earning potential.
4. Hire employees and delegate operations.
5. Add locations, products, departments and management structure.
6. Create multiple companies and group ownership.
7. Add holding companies, subsidiaries, financing, competition and international expansion.

Prototype businesses are simplified examples (food stall, online store, farm and software studio). They establish the data model, not the final business simulation.

## 7. India world model

India is the initial playable country. The first build includes nine city choices: Hyderabad, Bengaluru, Mumbai, Delhi, Chennai, Pune, Kolkata, Jaipur and Ahmedabad. Each has a simulated cost index and broad economic character.

Future world content should add:

- More Indian cities and rural locations.
- States and regional differences.
- Sector-specific job and business opportunities.
- Property and transport markets.
- Domestic travel and relocation.
- International countries, currencies, work permits and trade links.
- Economic cycles, inflation, interest rates and policy events.

The game should use invented or abstracted data when detailed regional modelling is not available. It must not imply that simplified game values are official current economic statistics.

## 8. User experience principles

- Mobile-first layout designed for one-handed use.
- Dark, premium, readable interface with restrained gold accents.
- A small number of clear top-level sections.
- Important decisions should display costs, requirements and time consequences before execution.
- The player must receive clear feedback for success, failure and insufficient funds.
- Avoid unnecessary confirmation dialogs for ordinary actions.
- Save automatically after meaningful state changes.
- Provide export and import backups before any destructive save operation.
- Keep game rules discoverable in the interface.

## 9. Technical architecture

### 9.1 Hosting

The project is a static site. GitHub Pages serves the HTML, CSS, JavaScript, manifest and service worker. No npm install or compile stage is required.

### 9.2 Application layers

- `index.html`: application shell and metadata.
- `styles.css`: responsive interface and visual system.
- `game.js`: game state, actions, economy, progression, rendering and backup functions.
- `manifest.webmanifest`: installable web app metadata.
- `service-worker.js`: static shell caching for supported HTTPS use.

### 9.3 Persistence

The first build uses browser `localStorage` for a single local save. JSON export and import are included. A later version may migrate to IndexedDB if the save grows large. There is no cloud sync in the first build.

### 9.4 Versioning rule

Each milestone is delivered as a complete, internally consistent project snapshot. Avoid long chains of tiny manual patches. Before a new milestone, preserve the previous working version and document schema changes and migration behaviour.

## 10. Build roadmap and acceptance gates

### Build 0.1 — Playable foundation (included)

- Character creation and starting backgrounds.
- India cities and quarterly calendar.
- Attributes and basic actions.
- Career applications, education and skills.
- Relationships.
- Multi-currency wallets and exchange.
- Three investment types.
- Basic business launch and upgrade.
- Local save, JSON export/import.
- GitHub Pages-ready static project.

**Acceptance gate:** A new player can create a character, complete multiple actions, age into a new year, earn and spend money, apply for a job, hold multiple currencies, start a business and restore a JSON backup.

### Build 0.2 — Business & Market Simulation (priority pivot)

This milestone now takes priority over additional life events because the Capitalism Lab-style business economy is a central part of the product promise. Build it as a coherent, testable economic loop—not as a large collection of disconnected business buttons.

- **City markets:** population, household income, unemployment, wages, foot traffic, category demand and a local cost/price index.
- **Products:** product catalogue with units, quality, product classes, demand segments and lifecycle stage.
- **Supply chain:** suppliers, raw materials, intermediate goods, recipes, purchase orders and delivery lead times.
- **Production:** farms/factories, input consumption, capacity, output, labour, utilities, waste and downtime.
- **Inventory:** stock on hand, storage capacity, replenishment, stockouts, spoilage for perishable goods and stock transfers.
- **Retail:** store location, foot traffic, price, quality, customer conversion, units sold, revenue and market share.
- **Competition:** a small number of AI firms with their own products, prices, capacity and expansion choices.
- **Company accounting:** revenue, cost of goods sold, payroll, rent, utilities, marketing, tax, operating profit, cash flow and business valuation.
- **Reports:** product profitability, supply status, store performance, company P&L and city market overview.

**First playable chain:** use a focused Indian staple-goods chain such as paddy farm → rice mill → packaged rice → grocery retail → households. The player must be able to trace how much input is purchased, how much is processed, how much stock reaches the store, how much sells, and what margin remains after all costs. Start in one city and with a small product catalogue before widening the simulation.

**Acceptance gate:** (1) no input means no production; (2) production consumes the specified inputs and creates the specified output; (3) no inventory means no retail sales; (4) sales cannot exceed available stock or consumer demand; (5) price, quality and location change sales; (6) operating profit reconciles exactly to revenue minus itemised costs; (7) suppliers and competitors can change the player's input cost and sales; and (8) the same state survives save/export/import/reload without duplication or lost units.

### Build 0.3 — Personal finance & capital markets

- Savings/current accounts and recurring transactions.
- Loans, EMI schedules, credit limits and credit score.
- Property, vehicles, rental income and depreciation.
- Tax, insurance and business financing abstractions.
- Investment risk, portfolio allocation and event-driven returns.
- Company shares, valuation, private funding and a basic public market only after company accounts are reliable.

**Acceptance gate:** Personal and company finances remain separate, balances reconcile, debt schedules are explicit, investment returns do not create unexplained money, and the player can manage a multi-year personal balance sheet.

### Build 0.4 — Life depth

- More complete job market and career ladders.
- Course/institution model and education costs.
- Health events and recovery choices.
- Family members, friendship events, dating, marriage and children foundations.
- Life-event engine with meaningful choice outcomes.
- Achievements and milestone tracking.

**Acceptance gate:** A player can experience a coherent multi-year personal life, and career, health, family and money decisions have consistent consequences.

### Build 0.5 — Corporate management, empire & global expansion

- Business financial statements, cash flow, financing and governance beyond the first playable vertical slice.
- Employees, department managers, training, productivity and executive delegation.
- Branch networks, capacity expansion, marketing, brand investment and business risk.
- Holding-company and subsidiary structures, ownership shares and acquisitions.
- Public listings, share issuance and investor relations after company accounts are stable.
- Foreign employment, international assets, cross-border trade and more countries.

**Acceptance gate:** The player can operate multiple connected firms, delegate routine decisions, finance expansion and understand group-wide profit, cash and ownership without breaking the underlying accounting.

### Build 0.6 — Release hardening

- Long-run simulation balancing.
- Mobile viewport and Android Chrome testing.
- Save migration, backup integrity and recovery tests.
- Accessibility, performance and offline tests.
- Tutorial, help and clear version notes.

**Acceptance gate:** No known data-loss path in normal use, no blocker in the main game loop, and a reproducible GitHub Pages deployment.

## 11. Explicitly out of scope for prototype 0.1

- Multiplayer, chat or social accounts.
- Cloud save and cross-device synchronisation.
- Real-money trading or real financial account connections.
- Live exchange-rate feeds.
- Paid APIs, mandatory subscriptions or server-hosted services.
- Large-scale map rendering or 3D graphics.

These can be reconsidered later, but should not compromise the zero-cost static deployment target.

## 12. Known prototype limitations

Build 0.1.1 uses simplified fixed game rates, random job outcomes and abstracted annual investment returns. Business profit is represented as a fixed quarterly amount per business level. It does not yet model the full family lifecycle, healthcare system, loans, detailed accounting, property ownership, taxes or international travel. These are planned systems, not completed features.
