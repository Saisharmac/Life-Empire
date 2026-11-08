# Economic Engine Review — LIFE & EMPIRE v0.2.0

## Overall verdict

**Improved to a foundational business-and-market simulation; not yet equivalent to Capitalism Lab.**

Version 0.2.0 replaces the previous fixed quarterly business payout with a basic quarter-settled operating model. Personal banking and market investments are also substantially expanded. The economic simulation is still deliberately smaller and more abstract than a full tycoon/economy game.

## Personal finance systems

| System | Current behaviour | Boundary |
|---|---|---|
| Pocket cash | Holds personal spending money | Not a payment network |
| Current account | Cash-like bank balance | No bank-specific transfer rails |
| Savings | Earns simulated 3.5% annual interest, credited quarterly | Fixed game rate |
| Fixed deposits | 1/2/3-year terms, accrued interest and maturity | No early-break penalty modelling |
| Personal loans | Principal, rate, term, scheduled principal/interest instalments | No real credit bureau or lender underwriting |
| Credit score | Changes with repayment performance | Game score only |
| Health cover | Simple time-limited policy | Not a detailed insurance contract |
| Currency exchange | Six currency wallets with fixed reference exchange rates and a spread | No live FX rates; no forex market orders |
| Shares | Eight fictional securities; buy/sell, price changes and dividends | No real exchange, order book, trading hours or company financial statements |
| Mutual fund | Units and a simulated NAV | No underlying holdings, fees or fund manager simulation |
| Digital gold | Grams and a simulated per-gram price | Not linked to bullion markets |
| Property | Cash-based purchase, recurring rent and maintenance | No mortgages, vacancies, taxes or property market transactions |

### Accounting rule

Net worth includes personal cash/current/savings balances, stock/fund/gold valuations, fixed-deposit principal **plus accrued interest**, property/business value, less outstanding loan balances. Business working capital remains on the company side and is included through company value rather than being added to the personal cash balance.

## Business engine

### Company operating loop

At each quarter settlement, each company attempts to operate within its staffing, production capacity, stock availability and cash affordability. It calculates output or deliverable capacity, buys required inputs, pays wages and overhead, carries inventory, sells units into simulated demand, records revenue/costs/profit and updates an estimated value/history.

### Current firm set

| Company | Main activity | Primary economic role |
|---|---|---|
| Paddy Farm | Produce paddy | Agricultural supplier |
| Rice Mill | Convert paddy to rice | Manufacturer |
| Grocery Store | Sell retail baskets | Retailer |
| Electronics Workshop | Assemble devices from components | Manufacturer |
| Software Studio | Deliver software contracts | Services firm |

### Connected production chain

**Farm paddy → mill rice → grocery retail basket → households.**

Owned upstream stock can feed the player's downstream company. When it cannot meet a downstream firm's stock need, a simplified external supplier provides the remainder, subject to available company cash. Internal transfers are accounted for as a cost to the downstream firm and revenue to the supplying firm. Company city is independent of the player's residential city.

### Demand and pricing

Grocery and other firm demand is a simplified function of local demand, market sentiment, price, quality, brand/marketing and a fixed competition factor. The player can modify prices, hire/fire, spend on quality/marketing and inject/withdraw company capital. There is one company per firm type and a five-company ownership cap.

## Reconciliation and known limitations

- Company cash is separate from personal cash.
- Wages and overhead are paid from company cash.
- Inventory carries from quarter to quarter.
- Production and sales cannot exceed modeled capacity or available inputs.
- Internal supply-chain purchases must be affordable to the buying company.
- Company settlement is quarterly; there is no real-time production or intraday sales.
- Outside suppliers are a simplified balancing mechanism, not a modeled supplier network.
- No autonomous AI-owned competing companies currently make their own investment, procurement, staffing, pricing and expansion decisions.
- Market demand does not yet clear through a national equilibrium or input-output matrix.
- There is no sophisticated accounting for taxes, depreciation, debt covenants, interest on company loans, working-capital cycles, logistics, warehousing, spoilage or multi-product retail inventory.
- Market indicators (inflation, repo rate, unemployment, sentiment) are game signals rather than a calibrated macroeconomic model.
- Stock fundamentals and prices are fictional. This is not a financial model for real investing.

## Comparison with the design target

| Capability | v0.2.0 status |
|---|---|
| Own and operate different firm types | Implemented at starter depth |
| Production capacity and inventory | Implemented at starter depth |
| Labour and payroll | Implemented at starter depth |
| Input procurement | Implemented with simplified outside suppliers |
| Connected farm/manufacturer/retailer chain | Implemented at starter depth |
| Pricing and demand response | Simplified model |
| Company revenue, costs, profit and value | Implemented at starter depth |
| Independent AI competitors | Not implemented |
| Market share and rival strategy | Not implemented |
| Complex supplier/transport/warehouse network | Not implemented |
| Multiple input-output sectors / national supply chain | Not implemented |
| Detailed company statements and corporate finance | Not implemented |
| Fully dynamic macroeconomy | Not implemented |

## Next audit targets

1. Repeat multi-year scenarios with different player strategies (low-price/high-volume, premium/high-quality, expansion, cash conservation).
2. Add competitor firms and validate market-share conservation.
3. Add supplier/transport/warehouse costs and compare internal versus external procurement.
4. Reconcile full company balance sheets and cash-flow statements, not only quarter P&L.
5. Run sensitivity analysis on wages, input prices, demand elasticity, inflation and interest rates.
