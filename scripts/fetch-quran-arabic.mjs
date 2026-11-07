/**
 * Fetches verified Uthmani Arabic text from api.alquran.cloud
 * and writes lib/quran-arabic.json used by lib/data.ts
 *
 * Run: node scripts/fetch-quran-arabic.mjs
 * Hooked as "prebuild" in package.json
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../lib/quran-arabic.json');
const BASE = 'https://api.alquran.cloud/v1';
const EDITION = 'quran-uthmani';

async function fetchSurah(n) {
  const res = await fetch(`${BASE}/surah/${n}/${EDITION}`);
  if (!res.ok) throw new Error(`Failed to fetch surah ${n}: ${res.status}`);
  const { data } = await res.json();
  return data.ayahs.map((a) => a.text);
}

async function fetchAyah(surah, ayah) {
  const res = await fetch(`${BASE}/ayah/${surah}:${ayah}/${EDITION}`);
  if (!res.ok) throw new Error(`Failed to fetch ${surah}:${ayah}: ${res.status}`);
  const { data } = await res.json();
  return data.text;
}

// alquran.cloud prepends Bismillah to ayah 1 of every surah except At-Tawbah.
// For Al-Fatiha, ayah 1 IS the Bismillah.
// For all others, strip the Bismillah prefix from ayah[0] using fatiha[0] as reference.
function makeBismillahStripper(bismillahText) {
  const prefix = bismillahText + ' ';
  return function extractBismillah(ayahs) {
    const first = ayahs[0];
    if (first.startsWith(prefix)) {
      return [first.slice(prefix.length).trim(), ...ayahs.slice(1)];
    }
    return ayahs;
  };
}

console.log('Fetching Quranic Arabic from api.alquran.cloud...');

const [fatihaRaw, ikhlasRaw, falaqRaw, nasRaw, kafiroonRaw, ayatulKursi, ayah7_23, ayah23_118, ayah33_56, ayah3_173, ayah21_87, ayah2_201] = await Promise.all([
  fetchSurah(1),
  fetchSurah(112),
  fetchSurah(113),
  fetchSurah(114),
  fetchSurah(109),
  fetchAyah(2, 255),
  fetchAyah(7, 23),
  fetchAyah(23, 118),
  fetchAyah(33, 56),
  fetchAyah(3, 173),
  fetchAyah(21, 87),
  fetchAyah(2, 201),
]);

// Fatiha ayah[0] is purely the Bismillah — use it as the strip reference
const bismillah = fatihaRaw[0].replace(/^﻿/, '').trim();
const extractBismillah = makeBismillahStripper(bismillah);

// Fatiha: ayah[0] is the Bismillah (ayah 1 of the surah — keep as-is, strip BOM)
const fatiha = fatihaRaw.map((t) => t.replace(/^﻿/, '').trim());

// Other surahs: strip the Bismillah prefix from ayah[0]
const ikhlas = extractBismillah(ikhlasRaw);
const falaq = extractBismillah(falaqRaw);
const nas = extractBismillah(nasRaw);
const kafiroon = extractBismillah(kafiroonRaw);

const out = { bismillah, fatiha, ikhlas, falaq, nas, kafiroon, ayatulKursi, ayah7_23, ayah23_118, ayah33_56, ayah3_173, ayah21_87, ayah2_201 };

writeFileSync(OUT, JSON.stringify(out, null, 2), 'utf8');
console.log('Written → lib/quran-arabic.json');
console.log('bismillah:', bismillah.slice(0, 30) + '...');
console.log('falaq[0] (stripped):', falaq[0]);
console.log('ikhlas[0] (stripped):', ikhlas[0]);
