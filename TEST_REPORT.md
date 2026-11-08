# Test Report — LIFE & EMPIRE v0.2.0

## Result

**31 / 31 automated harness checks passed** after the v0.2.0 implementation. JavaScript syntax and the PWA manifest validation are also part of the release checks.

The 31-check suite exercises the application's actual delegated click and form handlers inside a Node VM with a lightweight simulated DOM/localStorage environment. It is useful for repeatable game-state and calculation checks, but it is not a full browser rendering test.

## Coverage

1. New-game setup displays the birth-to-life identity.
2. New life starts at age zero with three quarterly decisions.
3. Identity, attributes/needs and family initialize.
4. Six game tabs render without runtime exceptions in the test harness.
5. Minor bank restrictions prevent investment while preserving cash transfers.
6. Three actions can be taken in one quarter.
7. A fourth action is rejected before settlement.
8. End-quarter settlement advances the calendar and restores decisions.
9. Rest improves energy without advancing time.
10. Twenty-four quarter settlements advance a birth save to age six and school entry.
11. School/study actions update attendance, effort and smarts.
12. Adult save loads and exposes adult options.
13. Fixed-deposit placement consumes one decision and records the deposit.
14. Personal-loan creation consumes a decision and records term details.
15. Share purchase consumes a decision and tracks holdings.
16. Loan interest and first-payment timing behave as configured.
17. A later scheduled loan payment reduces principal and term.
18. Mutual-fund units and NAV valuation are tracked.
19. Digital gold grams and valuation are tracked.
20. FX exchange applies its spread and consumes a decision.
21. Business startup deducts setup and working capital.
22. Farm, mill and grocery firms can coexist.
23. The quarterly production chain records finite profit/loss, stock and sales.
24. Company price, staffing and quality-management actions are decision-limited.
25. Property purchase consumes a decision and creates a rental asset.
26. Relocation does not change company registered cities.
27. Marriage and child creation run through their eligibility/cost path.
28. Invalid imported save structure is rejected.
29. Save export and Android install guide are reachable.
30. Postgraduate course progress and qualification are tested.
31. A 30-quarter economic stress run preserves numeric ranges and basic balance/inventory invariants.

## Release checks

- `node --check game.js` passes.
- `manifest.webmanifest` parses as valid JSON.
- PWA icon files exist at 192×192 and 512×512 dimensions.
- Service-worker precache asset paths exist in the project.
- `.nojekyll` is present for GitHub Pages.
- The ZIP archive integrity check passes.

## Testing limits

- Browser navigation from this environment was blocked by the execution environment (`ERR_BLOCKED_BY_ADMINISTRATOR`). Therefore no successful real-Chromium visual test is claimed.
- No physical Android device was available for end-to-end install testing.
- No live GitHub Pages deployment was performed from the user's GitHub account.
- PWA installation is conditional on HTTPS, browser support and install criteria. Chrome may expose **Install app** or **Add to Home screen**. The in-game `beforeinstallprompt` path is optional; the manual Chrome menu path remains documented.
- The 30-quarter stress run is not a comprehensive economic-balance or Monte Carlo proof. It checks for invalid numeric states and basic transaction consistency, not whether every strategy is economically balanced.

## Re-run locally

From the project root with Node.js installed:

```bash
node --check game.js
node tests/test_game.cjs
node tests/check_pwa.cjs
```

The included test harness uses only Node built-in modules. It tests game logic and selected delegated UI handlers in a simulated DOM; it should not be confused with physical-device QA.

The harness replaces `Math.random()` with a fixed value to make its scenario repeatable. This is a deterministic regression/stress scenario, not a distributional Monte Carlo test.
