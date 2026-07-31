'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { DuaMeta, DuaDetail, Category, CatLabel } from '@/lib/data';
import { LogoIcon } from './Logo';

const BN = '০১২৩৪৫৬৭৮৯';
function toBn(n: number) {
  return String(n).replace(/[0-9]/g, (d) => BN[+d]);
}

export default function ReadAllClient({
  cat,
  label,
  items,
}: {
  cat: Category;
  label: CatLabel | undefined;
  items: { meta: DuaMeta; detail: DuaDetail }[];
}) {
  const [dark, setDark] = useState(false);
  const [fontSize, setFontSize] = useState(26);

  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark');
    const stored = parseInt(localStorage.getItem('dua-font-size') ?? '26', 10);
    setFontSize(stored);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--ar-font-size', `${fontSize}px`);
    localStorage.setItem('dua-font-size', String(fontSize));
  }, [fontSize]);

  function changeFontSize(delta: number) {
    setFontSize((s) => Math.max(18, Math.min(42, s + delta)));
  }

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('darkMode', String(next));
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <Link className="nav-logo" href="/" aria-label="Daily Dua — Home">
          <LogoIcon size={34} />
          <span className="nav-logo-text">Daily Dua</span>
        </Link>
        <nav className="breadcrumb" style={{ flex: 1, marginLeft: 12 }}>
          <Link href="/">হোম</Link>
          <span>›</span>
          <Link href={`/category/${cat.id}`}>{cat.titleBn}</Link>
          <span>›</span>
          <span>ধারাবাহিক পাঠ</span>
        </nav>
        <div className="font-ctrl">
          <button className="fc-btn" onClick={() => changeFontSize(-2)}>A<sup>−</sup></button>
          <span className="fc-size">{fontSize}</span>
          <button className="fc-btn" onClick={() => changeFontSize(+2)}>A<sup>+</sup></button>
        </div>
        <button className="dark-btn" onClick={toggleDark} aria-label="Toggle dark mode">
          {dark ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* HEADER */}
      <div className="cat-page-hdr">
        <div className="cph-icon">📜</div>
        <div className="cph-text">
          <div className="cph-title-bn">{cat.titleBn} — ধারাবাহিক পাঠ</div>
          {label && <div className="cph-sub">Read All in Sequence · {label.en}</div>}
          <div className="cph-count">{toBn(items.length)}টি দুআ, একটানা পড়ুন</div>
        </div>
      </div>

      {/* READ-ALL LIST */}
      <main className="main-wrap">
        <div className="ra-list">
          {items.map(({ meta, detail }, i) => (
            <div key={meta.id} className="ra-item">
              <div className="ra-item-hdr">
                <span className="ra-num">{toBn(i + 1)}</span>
                <div className="ra-titles">
                  <div className="ra-title-bn">{meta.titleBn}</div>
                  <div className="ra-title-ar">{meta.titleAr}</div>
                </div>
                <Link className="ra-link" href={`/dua/${meta.id}`}>
                  শব্দে শব্দে →
                </Link>
              </div>
              <div className="ra-body">
                <div className="ra-arabic">{detail.fullArabic}</div>
                <div className="ra-translit">{detail.fullBanglaTranslit}</div>
                <div className="ra-meaning">{detail.fullMeaningBn}</div>
                {detail.reference && <div className="ra-ref">📚 {detail.reference}</div>}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-ar">رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ</div>
        <div className="footer-credit">Daily Dua · দুআ ও সূরা শিক্ষা · © ২০২৬</div>
      </footer>
    </>
  );
}
