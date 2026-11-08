const fs = require('fs');
const path = require('path');
const assert = require('assert');
const root = path.join(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
assert.strictEqual(manifest.display, 'standalone');
assert.ok(manifest.start_url && manifest.scope);
assert.ok(manifest.icons.length >= 2);
for (const icon of manifest.icons) {
  const iconPath = path.join(root, icon.src.replace(/^\.\//, ''));
  assert.ok(fs.existsSync(iconPath), `Missing icon: ${icon.src}`);
  const bytes = fs.readFileSync(iconPath);
  assert.strictEqual(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `${icon.src} is not PNG`);
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  const [expectedWidth, expectedHeight] = icon.sizes.split('x').map(Number);
  assert.deepStrictEqual([width, height], [expectedWidth, expectedHeight]);
}
const worker = fs.readFileSync(path.join(root, 'service-worker.js'), 'utf8');
const block = worker.split('const CORE_ASSETS = [')[1].split('];')[0];
const assets = [...block.matchAll(/'([^']+)'/g)].map(match => match[1]);
assert.ok(assets.length >= 6);
for (const asset of assets) {
  const assetPath = path.join(root, asset.replace(/^\.\//, ''));
  assert.ok(fs.existsSync(assetPath), `Missing service-worker precache asset: ${asset}`);
}
assert.ok(worker.includes("request.mode === 'navigate'"), 'Navigation fallback missing');
assert.ok(fs.existsSync(path.join(root, '.nojekyll')), '.nojekyll missing');
console.log(`PWA checks passed: ${manifest.icons.length} icons, ${assets.length} precache assets, standalone manifest, navigation fallback.`);
