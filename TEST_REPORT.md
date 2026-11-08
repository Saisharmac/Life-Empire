# Test Report — LIFE & EMPIRE v0.7.0

## Executed results

- **46 / 46** existing game-state/action regression checks passed.
- `node --check game.js` passed.
- PWA checks passed: 3 icon assets, 9 precache assets, standalone manifest and navigation fallback.
- **24 / 24** catalogue integrity checks passed. These validate catalogue load order, schema, record counts, unique IDs, institution/programme references, exam references, event choices, age bands and metadata.
- ZIP integrity is checked after packaging.

## Catalogue in this build

| Content type | Records |
|---|---:|
| School types | 4 |
| Streams | 7 |
| Entrance/professional exams | 37 |
| Academic programmes | 55 |
| Institutions | 80 |
| Career tracks | 22 |
| Job roles | 119 |
| Random events | 170 |

## Game-state test coverage

The 46-check suite exercises birth/new-game creation, age progression, quarterly decisions, school entry, study/attributes, save loading, deposits, loans, share/fund/gold/FX transactions, business startup, production and sales, property, relocation, family/relationships, economic reporting, market sorting, owned-bank formation and lending, deposits/withdrawals, rates, branch expansion, multi-bank stress and v0.2 save migration.

## Catalogue integrity coverage

The additional catalogue checker verifies that the large content database is actually loaded before `game.js`, that record counts match metadata, IDs are unique, institution programme references and programme exam references resolve, and every random event has valid age bounds and at least two labelled choices with effects.

## Important audit qualification

The legacy 46-check suite predates the v0.7 catalogue expansion. It is a regression suite for the shared simulation engine, not proof that every one of the 80 institutions, 55 programmes, 119 job roles and 170 events has been individually playtested in a full browser. Catalogue integrity checks establish structural consistency, not realism or balance.

Business upgrade safeguards in the code require capacity upgrades to be paid from company cash, preserve an operating reserve, capitalise the upgrade as fixed assets, cap capacity growth and avoid recognising capex as immediate profit. Owner distributions are capped by both retained earnings after pending expenses and surplus cash above the operating reserve. This is a code-level rule audit, not a complete exploit-proofing or Monte Carlo balance certification.

## Testing limitations

- The game-state suite uses a simulated DOM and localStorage in Node; it is not a substitute for visual QA in Chrome.
- No successful live browser screenshot/visual QA is claimed in this environment.
- No physical Android device installation test or live GitHub Pages deployment was performed.
- PWA checks validate local metadata/assets. Actual installation depends on HTTPS and browser install criteria.
- Market prices, fees, admissions thresholds, salaries and macro values are game abstractions. They are not current real-world data.

## Re-run

```bash
node --check game.js
node tests/test_game.cjs
node tests/check_pwa.cjs
node tests/check_catalog.cjs
```
