const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(root, 'content/catalog.js'), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(js, sandbox, { timeout: 5000 });
const c = sandbox.window.LIFE_EMPIRE_CONTENT;
const checks = [];
function check(name, ok) { checks.push({ name, ok: !!ok }); }
check('catalogue is loaded before game engine', html.indexOf('./content/catalog.js') >= 0 && html.indexOf('./content/catalog.js') < html.indexOf('./game.js'));
check('catalogue schema is version 4', c && c.schemaVersion === 4);
for (const [key, expected] of Object.entries({ schoolTypes:4, streams:7, exams:37, programmes:55, institutions:80, careerTracks:22, jobs:119, events:170 })) {
  check(`${key} contains ${expected} records`, Array.isArray(c[key]) && c[key].length === expected);
  const ids = (c[key] || []).map(x => x.id).filter(Boolean);
  check(`${key} IDs are unique and present`, ids.length === (c[key] || []).length && new Set(ids).size === ids.length);
}
const programmes = new Set(c.programmes.map(x => x.id));
check('every institution programme reference resolves', c.institutions.every(i => Array.isArray(i.programmes) && i.programmes.every(p => programmes.has(p))));
const examIds = new Set(c.exams.map(x => x.id));
check('programme exam references resolve when specified', c.programmes.every(p => !p.exam || p.exam === 'merit' || examIds.has(p.exam)));
check('all random events have 2+ choices', c.events.every(e => Array.isArray(e.options) && e.options.length >= 2));
check('event age bands are valid', c.events.every(e => Number.isFinite(e.minAge) && Number.isFinite(e.maxAge) && e.minAge <= e.maxAge));
check('event choice labels and effects exist', c.events.every(e => e.options.every(o => typeof o.label === 'string' && o.label.length > 0 && o.effects && typeof o.effects === 'object')));
check('catalogue metadata record counts match', Object.entries(c.metadata.recordCounts).every(([k,v]) => Array.isArray(c[k]) && c[k].length === v));
const failed = checks.filter(x => !x.ok);
console.log(JSON.stringify({ passed: checks.length - failed.length, total: checks.length, checks }, null, 2));
if (failed.length) process.exit(1);
