'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { DuaMeta, Category, CatLabel } from '@/lib/data';
import { LogoIcon } from './Logo';

const BN = '০১২৩৪৫৬৭৮৯';
function toBn(n: number) {
  return String(n).replace(/[0-9]/g, (d) => BN[+d]);
}

export default function CategoryClient({
  cat,
  duas,
  label,
}: {
  cat: Category;
  duas: DuaMeta[];
  label: CatLabel | undefined;
}) {
  const [dark, setDark] = useState(false);
  const [searchQ, setSearchQ] = useState('');

  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  const q = searchQ.toLowerCase().trim();
  const filteredDuas = q
    ? duas.filter((d) => d.titleBn.toLowerCase().includes(q) || d.titleAr.includes(q))
    : duas;

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
          <span>{cat.titleBn}</span>
        </nav>
        <div className="nav-search-wrap">
          <input
            className="nav-search"
            type="search"
            placeholder="এই বিভাগে খুঁজুন…"
            autoComplete="off"
            spellCheck={false}
            value={searchQ}
            onChange={(e) => setSearchQ(e.target.value)}
          />
        </div>
        <button className="dark-btn" onClick={() => {
          const next = !dark;
          setDark(next);
          document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
          localStorage.setItem('darkMode', String(next));
        }} aria-label="Toggle dark mode">
          {dark ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* CATEGORY HEADER */}
      <div className="cat-page-hdr">
        <div className="cph-icon">{cat.icon}</div>
        <div className="cph-text">
          <div className="cph-title-bn">{cat.titleBn}</div>
          {label && <div className="cph-sub">{label.en}</div>}
          <div className="cph-count">{toBn(duas.length)}টি দুআ ও সূরা</div>
        </div>
      </div>

      {/* DUA CARDS */}
      <main className="main-wrap">
        {filteredDuas.length > 0 ? (
          <div className="cards-grid">
            {cat.id === 'after-salat' && !q && (
              <Link className="dua-card read-all-card" href={`/category/${cat.id}/all`}>
                <div className="card-top">
                  <div className="ra-card-icon">📜</div>
                </div>
                <div className="card-btm">
                  <div className="card-title-bn">ধারাবাহিক পাঠ</div>
                  <div className="card-title-ar" style={{ color: 'var(--gold)' }}>একসাথে সব দুআ পড়ুন</div>
                  <div className="card-read">শুরু করুন <span aria-hidden="true">→</span></div>
                </div>
              </Link>
            )}
            {filteredDuas.map((dua) => (
              <Link key={dua.id} className="dua-card" href={`/dua/${dua.id}`}>
                <div className="card-top">
                  <div className="card-ar-line">{dua.firstLine}</div>
                </div>
                <div className="card-btm">
                  <div className="card-title-ar">{dua.titleAr}</div>
                  <div className="card-title-bn">{dua.titleBn}</div>
                  <div className="card-read">পড়ুন <span aria-hidden="true">→</span></div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-results show">
            <div className="no-results-ar">لم يوجد</div>
            কোনো দুআ পাওয়া যায়নি। অনুগ্রহ করে অন্য শব্দ দিয়ে অনুসন্ধান করুন।
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-ar">رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ</div>
        <div className="footer-credit">Daily Dua · দুআ ও সূরা শিক্ষা · © ২০২৬</div>
      </footer>
    </>
  );
}
