# Economic Engine Audit — LIFE & EMPIRE v0.7.0

## Accounting design

### Personal finance
- Cash, deposits, fixed deposits, securities, fund units, gold, property and business/bank equity are represented as assets.
- Personal borrowing is represented as a liability; loan proceeds are financing, not earned income.
- Transfers between the player's cash and their own bank deposit are internal transfers, not new income.
- Investment purchases are asset allocation, not operating consumption. Realised fees, interest and losses are expenses.

### Company capital and upgrades
- Company launch funding is split into paid-in equity, fixed assets, working capital and formation expense.
- Further owner injections increase company cash and paid-in capital; they do not increase sales or profit.
- Capacity upgrades reduce company cash and increase fixed assets. They do not create immediate profit or guaranteed revenue.
- Capacity factor growth is incremental and capped; upgrade tier is capped at six.
- Upgrade is rejected if paying for it would breach the calculated operating reserve.
- Depreciation is recognised during operations.
- Company book value uses adjusted net assets: cash + inventory at estimated input cost + net fixed assets - debt - payables. Accumulated profit is not added a second time as a separate goodwill multiple.
- Owner distributions are capped by the lower of retained earnings after pending expenses and cash surplus above the operating reserve. The same distribution reduces company cash and retained earnings; it is not company revenue.
- Hiring, firing, quality and marketing actions have explicit costs and affect operating obligations or pending expense recognition.

### Operating company loop
- Quarterly operations estimate capacity, procurement/input cost, payroll, overhead, market demand, competitor pressure, price fit, quality, brand and service.
- Sales are limited by available inventory/production and estimated demand. Revenue and cost are recorded separately; profit updates retained earnings.
- Intercompany transfers and outside supply are simplified. This is not yet a complete multi-tier national input-output model.

### Player-owned banks
- The player may own up to three banks.
- Bank lending is constrained by available liquidity, a loan-to-deposit target and a simplified capital adequacy target.
- Deposits are liabilities; loan principal is an asset; owner-related borrowing appears as a bank loan asset and personal liability.
- Deposit interest, loan interest, operating costs, defaults/provisions and recoveries affect bank results.
- Branch expenditure is capitalised as a fixed asset and branches add recurring operating costs.

## Known gaps and exploit limitations

This is a game accounting model, not audited accounting software or a regulatory bank model. It does not yet implement full tax accounting, statutory reserves, risk-weighted asset classes, deposit insurance, resolution, interbank funding, central-bank facilities, customer-level credit scoring, fraud, liquidity stress ratios by maturity bucket, or a formal insolvency waterfall. Public bank lending and deposits are aggregate game abstractions.

Company demand, rival firms, supply, inventory costs and pricing are simplified estimates. It does not yet model detailed customer cohorts, long-term supplier contracts, freight networks, product substitution, full tax, working-capital cycles by invoice age, or competitor strategy AI. A sustained positive return is not guaranteed; demand, price, operating costs, city conditions and rival firms influence results.

The upgrade and distribution safeguards close the previously identified obvious capital-return loopholes at code level. They do not establish that no exploit exists. New strategies should be stress-tested over long horizons and across all company types before claiming the economy is balanced.

## Content and data limitations

Education institutions, programmes, exam routes, salaries, fee values and career requirements are simulation data. They are not official admission advice. Rules differ by institution, programme, category, state, year and regulator. See `SOURCES.md` for official starting points. Market prices, dividends, FX and interest rates are fictional game values.
