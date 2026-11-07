/**
 * Fetches verified Uthmani Arabic for every ayah cited in lib/names.ts
 * (Quran references on the Allah's-names detail pages) and writes
 * lib/name-ayat.json.
 *
 * Run: node scripts/fetch-name-ayat.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '../lib/names.ts');
const OUT = join(__dirname, '../lib/name-ayat.json');
const BASE = 'https://api.alquran.cloud/v1';

const src = readFileSync(SRC, 'utf8');
const keys = new Set();
for (const m of src.matchAll(/"ayat":\s*\[([^\]]*)\]/g)) {
  for (const k of m[1].match(/\d+:\d+/g) ?? []) keys.add(k);
}

// Strip the Bismillah that alquran.cloud prepends to ayah 1 of most surahs.
const bism = (await (await fetch(`${BASE}/ayah/1:1/quran-uthmani`)).json()).data.text.trim();

const out = {};
for (const k of [...keys].sort((a, b) => {
  const [s1, a1] = a.split(':').map(Number);
  const [s2, a2] = b.split(':').map(Number);
  return s1 - s2 || a1 - a2;
})) {
  const res = await fetch(`${BASE}/ayah/${k}/quran-uthmani`);
  if (!res.ok) throw new Error(`Failed ${k}: ${res.status}`);
  let text = (await res.json()).data.text.replace(/^﻿/, '').trim();
  if (k !== '1:1' && text.startsWith(bism + ' ')) text = text.slice(bism.length + 1).trim();
  out[k] = text.replace(/^۞\s*/, '').trim(); // drop hizb marker
}

writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log(`Wrote ${Object.keys(out).length} ayat → lib/name-ayat.json`);
