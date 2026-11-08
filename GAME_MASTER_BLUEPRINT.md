# LIFE & EMPIRE — Game Master Blueprint v0.2.0

## 1. Product direction

**Genre:** single-player life simulation + personal finance + light business/economic simulation.

**Setting:** India-first, with nine playable city markets and a multi-currency personal wallet.

**Platform:** static mobile-first web app, installable on supported Android/iOS browsers as a Progressive Web App. This build is not a native APK.

**Design promise:** the player grows from birth, makes several choices in each quarter, manages interacting needs and relationships, learns at school, enters adult life, builds financial security and may eventually operate a connected group of businesses.

## 2. Core time model

- The character is born at age 0 in the starting year 2026.
- The calendar contains four quarters per year.
- The player receives **three decision points per quarter**.
- A major action normally consumes one decision point. The player can combine several actions in one quarter, subject to the remaining points and each action's rules.
- The player explicitly chooses **End quarter** to settle recurring systems and move to the next quarter.
- Settlement restores the action-point allowance, performs income/cost/interest/production/market calculations, recovers some needs, and advances age by one year after the fourth quarter.
- Banking transfers between the player's own cash/current/savings balances are treated as account administration; investment orders, borrowing, loan repayment, FX exchange and other material financial decisions consume a decision point.

## 3. Character foundation

### Identity

Character creation sets name, presentation, appearance style, starting city, family background, personality trait and whether a younger sibling will later join the household.

### Needs and attributes

The player model includes:

- Health
- Energy
- Stress
- Happiness
- Smarts
- Fitness
- Creativity
- Discipline
- Charisma
- Confidence
- Social wellbeing
- Resilience

These are tracked separately. Actions can improve one attribute while consuming energy, adding stress, spending money or affecting relationships. Traits alter some learning, recovery, creative, work or finance effects. Very low energy or persistently high stress increases the risk of a burnout/illness event.

### Personality traits

- Curious: gains more from learning.
- Disciplined: recovers stress faster and receives a work-performance advantage.
- Creative: benefits more from creative/social activities.
- Resilient: reduces some stress/health penalties and improves recovery.
- Social: builds relationships more quickly.
- Cautious: receives a modest financial-decision advantage.

These are game modifiers, not psychological assessments.

## 4. Life stages and decisions

### Infancy (0–2)

Available caregiver-led choices include bonding, sensory play, sleep, health checks and stories. The player is not treated as an independent worker or investor. Household resources fund care.

### Early childhood (3–5)

Play, reading, social play, simple chores, sleep and health checks introduce curiosity, early learning, discipline and relationships.

### School years (6–12)

Grade 1 begins at age six. School attendance, study, sports, friends, hobbies, family time and rest influence marks, skills and wellbeing.

### Adolescence (13–17)

School and exam preparation continue. Clubs, sports, skills, friendships and family time allow the player to balance academic performance, interests and social development.

### Adulthood (18+)

College and postgraduate study, employment, freelance work, exercise, rest, family/social life, networking, dating, banking, investment, property and business ownership become available according to eligibility and affordability.

### Later life and legacy

Health and wellbeing influence the later-life state. The simulation introduces increasing mortality risk from advanced age. On death, it presents a legacy view with years lived, net worth, companies and children recorded.

## 5. Family and household economy

Family background selects initial household funds, recurring income and expenses, school-fee capacity, pocket-money support and a transition grant at adulthood. During childhood, the household pays basic living and school costs; the child receives pocket money. Household financial pressure can lower support and raise the character's stress. Parent ages and child/family relationships progress over time.

Family members are represented as simplified relationship and household entities. They are not yet independently simulated NPCs with their own full careers, budgets and daily schedules.

## 6. Education and career

- School starts at age six and advances through Grade 12.
- Attendance and study effort combine with smarts, stress and a random result factor to determine marks.
- Passing the Grade 12 threshold unlocks the base school qualification.
- College and postgraduate programs are abstracted into study quarters and tuition costs.
- Jobs have qualification, skill and salary requirements.
- Applications use a probability influenced by skills, education, smarts, confidence and experience.
- Employed characters receive salary at quarter settlement. Work actions increase experience/performance; tenure increments once per completed employed quarter.
- Promotions require performance/tenure progress and increase salary.

Job titles and employers are fictional. There is no live job-board connection.

## 7. Personal banking and markets

### Accounts and currency

The player has pocket cash, a current account, savings account and six currency wallets: INR, USD, AED, SGD, GBP and EUR. Internal account transfers move value between personal balances. FX exchange uses the build's fixed reference rates and a conversion spread. The rates are game parameters and do not update from live markets.

### Savings and deposits

- Savings earn simulated quarterly interest based on a 3.5% annual rate.
- Fixed deposits have 1-, 2- or 3-year terms, a fixed rate, accrued interest and maturity repayment to savings.
- Active deposits and accrued interest contribute to net worth.

### Credit and protection

- Personal loans have principal, rate, term and scheduled instalments.
- The repayment schedule includes interest and principal. Unpaid amounts can carry and affect the credit score.
- Emergency borrowing may cover an adult's living-cost shortfall or a simulated medical shock.
- Basic health cover is a simplified, time-limited policy.
- The credit score is a game statistic, not a real bureau score or credit report.

### Capital markets

- Eight fictional listed companies have prices, volatility, growth assumptions and dividend rates.
- A lightweight market index, sentiment, inflation, policy rate and unemployment indicators update quarterly.
- Share purchases/sales, mutual-fund units and digital gold are tracked in the player's portfolio.
- Dividends are credited quarterly. Fund NAV, share prices and gold prices are simulated from game formulas and random factors.
- Market dealing unlocks at age 18.

No real securities, broker, exchange, payment rail, banking API or investment account is connected.

## 8. Property

The player may buy one of several simplified residential/commercial property types. Property adds an asset value and recurring rent, but also maintenance. Purchases are cash-based; mortgages and property debt are not implemented.

## 9. Company and production model

### Firm types

1. Paddy Farm — produces paddy.
2. Rice Mill — purchases paddy and produces rice.
3. Grocery Store — procures rice and sells retail baskets to household demand.
4. Electronics Workshop — purchases components and assembles devices.
5. Software Studio — delivers software contracts.

The player can own up to five companies, limited to one per type.

### Firm-level records

Each company has its own cash balance, registered city, employees, wage/payroll costs, capacity, inventory, quality, price, brand/marketing, sales, revenue, operating costs, profit, estimated value and quarterly history.

### Supply chain

The first connected production chain is:

**Paddy Farm → Rice Mill → Grocery Store → Household customers.**

Owned upstream firms can transfer stock to owned downstream firms. When owned supply is unavailable or insufficient, the model purchases from simulated outside suppliers. Farm output, mill conversion, inventory affordability, store demand and sales are settled each quarter. Other businesses have simplified input-procurement or contract-demand models.

### Demand and price

Retail demand is influenced by the firm's city demand, market sentiment, product quality, brand/marketing, asking price and a simplified competition factor. This is a starter demand model rather than an independently operating rival-company simulation.

### Management choices

The player can establish firms, inject or withdraw capital, change prices, hire or fire staff, spend on quality/marketing, and distribute owner funds. Company wages and operating expenses are separate from the player's personal wallet. Firms remain in their registered city if the character relocates.

## 10. World and relationships

Nine cities are represented: Hyderabad, Bengaluru, Mumbai, Delhi, Chennai, Pune, Kolkata, Jaipur and Ahmedabad. Cities have cost, demand and wage indexes. These are fictional game modifiers, not precise real-world city statistics.

The relationship layer supports family/friends, networking, dating, proposals, marriage and children. Children age annually. This layer is foundational; NPCs do not yet have full independent lives or autonomous decision-making.

## 11. Save and install architecture

- Vanilla HTML, CSS and JavaScript; no build tool or server is required.
- Save state is local to the current browser profile.
- JSON backup export/import is available.
- Version 0.2 uses a new storage schema. Old v0.1.x save data is left intact; automatic migration is not claimed.
- A web app manifest, PNG icons and service worker support installation and core-asset caching.
- GitHub Pages HTTPS can host the static PWA.
- Installing on Android creates a browser-managed installed web app/home-screen app experience. It does not produce an APK or Play Store publication.

## 12. Current scope boundaries

Not yet implemented at full depth: AI-controlled rival firms, detailed national supply/demand equilibrium, multiple independent product markets, logistics/warehousing, long-term supply contracts, detailed tax system, mortgages, bonds, credit cards, real bank/broker connections, a realistic demographic model, fully autonomous family NPCs, comprehensive school/university admissions, multiplayer and native Android packaging.

## 13. Next economic milestones

1. Add independent rival firms and market share calculation.
2. Add supplier contracts, procurement quotes, transport costs and warehousing.
3. Add multiple product classes and elastic demand by customer segment.
4. Add full company income statements, balance sheets and cash-flow statements.
5. Add industry cycles, GDP/unemployment/inflation feedback and fiscal/tax systems.
6. Add corporate finance, debt, equity issuance and acquisitions.
7. Add simulation balancing and long-run scenario testing.
