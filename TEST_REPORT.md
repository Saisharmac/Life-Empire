# Test Report — LIFE & EMPIRE v0.3.0

## Results

- **46 / 46 game-state regression checks passed.**
- `node --check game.js` passed.
- PWA validator passed: three icon assets, eight precache assets, standalone manifest and navigation fallback.
- ZIP integrity is checked during packaging.

## Coverage

The suite exercises new-game creation, three actions per quarter, time settlement, wellbeing, birth-to-school progression, education/career state, personal bank accounts and loans, share trading, mutual funds, digital gold, FX, business production and sales, property, relocation, relationships, save validation and v0.2-to-v0.3 migration.

Additional v0.3 checks exercise the separate economic report, market sorting and trade entry, bank ownership and owner loans, deposits as both personal assets and bank liabilities, deposit-rate changes, bank liquidity and profit calculations, withdrawals as internal transfers, lending-rate changes, early repayment, branch expansion and capitalised branch assets, multiple owned banks, and a 30-quarter multi-bank stress run.

The fixed-screen CSS contract is checked for a `100dvh` game frame, hidden page overflow, a HUD height of approximately 15vh in addition to the compact top bar, and a 20vh bottom dock. This leaves approximately 60% for the central game dashboard on a typical phone viewport.

## Exact automated test list

1. New game setup displays birth-to-life identity.
2. New life starts at age zero with three quarterly decisions.
3. Identity, needs and family initialize.
4. Eight sections render without runtime exceptions in the simulated DOM.
5. Child bank restrictions and starter banking controls render.
6. Three actions can be taken in one quarter.
7. A fourth action is rejected before settlement.
8. End-quarter advances time and restores decision points.
9. Rest restores energy without advancing time.
10. Twenty-four quarter settlements reach school entry at age six.
11. School and study actions update attendance, effort and smarts.
12. Adult save loads and displays adult options.
13. Fixed-deposit placement consumes a decision and records the deposit.
14. Personal-loan creation records a term and consumes a decision.
15. Share purchase records the holding and consumes a decision.
16. Quarter settlement accrues interest and advances loan state.
17. A later loan payment reduces the outstanding balance.
18. Mutual-fund purchase records units and NAV value.
19. Digital-gold purchase records grams and value.
20. Currency exchange applies the spread and uses a decision.
21. Business startup records setup and working capital.
22. Separate mill and grocery firms can coexist.
23. Quarterly production records finite P&L, stock and sales.
24. Company pricing, staffing and quality actions are decision-limited.
25. Property purchase creates a rental asset.
26. Relocation does not move company registration.
27. Marriage and child creation use eligibility/cost rules.
28. Invalid imported save structure is rejected.
29. Backup and Android install-guide actions are reachable.
30. Postgraduate progress unlocks senior education eligibility.
31. Thirty-quarter company/economic stress run preserves numeric and inventory invariants.
32. Economic view separates income, expenses, investment and financing.
33. Market view supports sorting and per-security trade entry.
34. Player can establish a bank with paid-up capital.
35. Owner-bank loan appears as a bank asset and personal liability.
36. Deposits are reflected as personal assets and bank liabilities.
37. Owned-bank deposit-rate changes accept percentage input and use a decision.
38. Bank settlement preserves liquidity and loan/deposit invariants.
39. Owner-bank withdrawal is an internal transfer, not income or asset-sale revenue.
40. Owner-bank lending rate can be changed with a quarterly decision.
41. Owner can make an early repayment to their bank.
42. Bank can expand a branch and capitalise the branch asset.
43. Player can establish a second bank below the three-bank cap.
44. Multi-bank portfolio survives a 30-quarter stress run with valid balances.
45. v0.2 save migrates to v0.3 without losing the character.
46. Fixed game frame/action dock meets the no-page-scroll layout contract.

## Testing limitations

- The state/action suite uses a simulated DOM and localStorage in Node. It does not guarantee that every visual layout or every browser interaction is correct.
- A real Chromium navigation attempt in this execution environment was blocked with `ERR_BLOCKED_BY_ADMINISTRATOR`. Therefore no successful browser screenshot/visual QA is claimed.
- No physical Android device was available to complete an end-to-end install or touch usability test.
- No live GitHub Pages deployment was performed from the user's account.
- PWA validation checks local project assets and metadata. Actual installability still depends on deployment over HTTPS and browser/Android install criteria.
- The 30-quarter bank test checks accounting invariants and finite values; it is not a Monte Carlo, regulatory-capital or long-run economic-balance proof.

## Re-run

From the project folder:

```bash
node --check game.js
node tests/test_game.cjs
node tests/check_pwa.cjs
```
