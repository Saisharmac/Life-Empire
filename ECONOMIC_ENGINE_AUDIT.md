# Economic Engine Audit — LIFE & EMPIRE v0.3.0

## Purpose

This build separates the player's household cash flow from asset purchases, debt financing, trading proceeds, company results and owned-bank accounting. It is a fictional turn-based game economy, not a real banking or brokerage product.

## Personal finance classification

The current-quarter ledger uses distinct buckets:

- **Earned income:** salary, work/freelance income and savings interest.
- **Household support:** family/household transfers.
- **Asset-sale proceeds:** cash from selling securities, fund units, gold or withdrawing previously held bank deposits where the action represents disposal of an asset. (A transfer from the player's deposit at their own bank back to current cash is now treated as an internal transfer, not income.)
- **Financing:** personal and owner-bank loan proceeds; these are cash received but are not earnings.
- **Expenses:** living, operating and other consumption costs.
- **Investments:** stock/fund/gold/FD/property/company/bank-capital purchases.
- **Debt service:** principal/interest payments classified as debt-related cash outflow.
- **Market valuation change:** non-cash revaluation from simulated markets and asset values.

The Economy tab shows the net cash-flow view as well as household cash flow, company revenue/costs/profit and owned-bank profit. It labels asset purchases separately from operating costs. Loan proceeds are explicitly not treated as income.

## Stock market and investments

The game has fictional securities with simulated prices, price changes and dividends. The Market tab supports sort modes for market movers, price, dividend and name, and per-security buy/sell forms. Share purchases/sales use a simulated brokerage fee. A mutual fund uses a simulated NAV. Digital gold is priced per gram. Fixed deposits have fixed rates and maturities. Currency conversion is simulated with a spread.

No prices are live, no real order routes exist, and no broker/bank accounts are connected.

## Owned-bank model

A player can establish up to three banks. Each new bank requires ₹85 lakh: ₹50 lakh paid-up capital and ₹35 lakh setup/licence/systems costs. This is an in-game price, not a statement about real regulatory capital requirements.

Each bank records:

- Vault cash (liquid funds)
- Capitalised fixed assets (branch network assets)
- Customer deposit liabilities
- Aggregate public loan book
- Loans to the player/owner (related-party loan assets)
- Owner deposits (both player's asset and bank liability)
- Annual deposit rate and quarterly lending rate
- Branch count, trust and quarterly operating cost
- Revenue, deposit costs, operating costs, profit/loss and limited history

### Owner loans

A loan from an owned bank transfers cash from the bank vault to the player's current account. The player's liability is recorded in `playerLoans`, while the same outstanding balance is recorded as a bank asset. Loan terms can be 1, 2, 3 or 4 simulated years (4, 8, 12 or 16 quarters). Scheduled principal and quarterly interest are collected at settlement when the player's funds are sufficient; missed instalments capitalise interest and reduce bank trust. Extra repayments reduce personal debt and increase bank cash.

### Deposits and withdrawals

Depositing personal cash increases the player's deposit asset and the bank's deposit liability while transferring money into bank vault cash. Withdrawing reduces both the player's deposit and the bank liability while moving funds back to current cash. A deposit withdrawal is not new earned income.

### Bank rates and branches

The player can set quarterly lending rates between 0.8% and 4.0%, and annual savings/deposit rates between 0.5% and 10.0%. Rate changes use a quarterly decision. Opening a branch costs ₹12.5 lakh from bank vault cash, increases branch count and capitalised fixed assets, improves deposit-attraction capacity and raises quarterly running costs.

### Liquidity and lending

The model reserves 18% of aggregate deposits and retains a ₹15 lakh liquidity/operating buffer for related-party loans. Public lending uses a separate liquidity buffer and is capped to a small percentage of available cash. Outstanding owner loans are not subtracted again from available cash because those loan proceeds have already left the vault; this prevents double-counting the same liquidity use.

At quarter settlement, customer deposit growth, public-loan origination/interest/principal recovery, owner-loan instalments, deposit interest and branch operating costs are processed. Owner deposit interest is capitalised into the owner's deposit liability, not deducted a second time as a cash payment. Public-loan principal recoveries return to bank cash. Owner interest is recognised in bank revenue; actual cash is received when the instalment is paid.

## Company economy

The company engine has company-specific cash, working capital, staff/payroll, capacity, production, inventory, prices, quality, marketing, demand, sales, revenues, costs and quarterly profit/loss. A starter paddy farm → rice mill → grocery store chain can source from owned suppliers and simplified external suppliers.

## Regression evidence

`node tests/test_game.cjs` currently reports 46/46 pass. It includes owner-bank deposits, withdrawals, rate changes, owner loans, early repayment, branch capitalisation, a second owned bank and a 30-quarter multi-bank stress run. `node tests/check_pwa.cjs` verifies the manifest, icons, service-worker precache paths and navigation fallback.

## Limitations and next steps

The bank is still a simplified aggregate institution: no customer-by-customer credit files, default probabilities, collateral valuation, deposit insurance, central-bank funding, interbank markets, liquidity coverage ratio, capital adequacy ratio, AML/compliance, bank resolution or AI rival banks. Public customer growth and public lending are aggregated formulas. Related-party loans are intentionally modelled as a convenience feature for gameplay and would need governance/limits for a full simulation.

The market has no real exchange, live market data, bonds, derivatives, short selling, order book, intraday trading, brokerage integration or tax treatment. The company economy still needs AI competitors, full supplier networks, freight/warehouses, varied intermediate inputs, detailed customer segments, company statements, tax and macroeconomic feedback.

This model is suitable as a playable foundation for future systems, not as financial education, investment advice or a faithful regulatory simulation.
