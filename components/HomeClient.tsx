'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { DuaMeta, Category } from '@/lib/data';
import { LogoIcon } from './Logo';

const BN = '০১২৩৪৫৬৭৮৯';
function toBn(n: number) {
  return String(n).replace(/[0-9]/g, (d) => BN[+d]);
}

export default function HomeClient({ duas, cats }: { duas: DuaMeta[]; cats: Category[] }) {
  const [dark, setDark] = useState(false);
  const [searchQ, setSearchQ] = useState('');
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.06 }
    );
    gridRef.current.querySelectorAll('.cat-section').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [searchQ]);

  const q = searchQ.toLowerCase().trim();

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <Link className="nav-logo" href="/" aria-label="Daily Dua — Home">
          <LogoIcon size={34} />
          <span className="nav-logo-text">Daily Dua</span>
        </Link>
        <div className="nav-search-wrap">
          <input
            className="nav-search"
            type="search"
            placeholder="দুআ খুঁজুন — বাংলা বা Arabic..."
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

      {/* HERO */}
      <section className="hero">
        <div className="hero-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
        <div className="hero-greeting">Assalamu Alaikum · আস্সালামু আলাইকুম</div>
        <h1 className="hero-title">দুআ ও সূরা শিক্ষা</h1>
        <p className="hero-subtitle">নামাজের দোয়া, কুরআনের সূরা, আমল ও তার ফজিলত — শব্দে শব্দে বাংলায় শিখুন।</p>
        <div className="hero-divider">❖</div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">{toBn(duas.length)}</span>
            <span className="stat-label">মোট দুআ ও সূরা</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">{toBn(cats.length)}</span>
            <span className="stat-label">বিভাগ</span>
          </div>
          <div className="stat-item">
            <span className="stat-num is-text">শব্দে শব্দে</span>
            <span className="stat-label">বাংলায় শিখুন</span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      {q ? (
        /* ── SEARCH RESULTS ── */
        <main className="main-wrap" ref={gridRef as React.RefObject<HTMLElement>}>
          {cats.map((cat, i) => {
            const filteredDuas = duas.filter(
              (d) =>
                d.cat === cat.id &&
                (d.titleBn.toLowerCase().includes(q) || d.titleAr.includes(q))
            );
            if (filteredDuas.length === 0) return null;
            return (
              <section
                key={cat.id}
                className="cat-section"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="section-hdr">
                  <div className="sec-icon">{cat.icon}</div>
                  <div className="sec-text">
                    <div className="sec-name">{cat.titleBn}</div>
                    <div className="sec-sub">{cat.sub}</div>
                  </div>
                  <span className="count-pill">{toBn(filteredDuas.length)}</span>
                </div>
                <div className="cards-grid">
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
              </section>
            );
          })}
          {cats.every(
            (cat) =>
              duas.filter(
                (d) =>
                  d.cat === cat.id &&
                  (d.titleBn.toLowerCase().includes(q) || d.titleAr.includes(q))
              ).length === 0
          ) && (
            <div className="no-results show">
              <div className="no-results-ar">لم يوجد</div>
              কোনো দুআ পাওয়া যায়নি। অনুগ্রহ করে অন্য শব্দ দিয়ে অনুসন্ধান করুন।
            </div>
          )}
        </main>
      ) : (
        /* ── CATEGORY HERO CARDS ── */
        <div className="cat-hero-grid">
          {cats.map((cat) => {
            const catDuas = duas.filter((d) => d.cat === cat.id);
            const preview = catDuas.slice(0, 2).map((d) => d.firstLine).join('  ·  ');
            return (
              <Link key={cat.id} className="cat-hero-card" href={`/category/${cat.id}`}>
                <div className="chc-top">
                  <div className="chc-icon">{cat.icon}</div>
                  <div className="chc-preview">{preview}</div>
                </div>
                <div className="chc-btm">
                  <div className="chc-title-bn">{cat.titleBn}</div>
                  <div className="chc-sub">{cat.sub}</div>
                  <div className="chc-count">{toBn(catDuas.length)}টি দুআ ও সূরা</div>
                  <div className="chc-cta">দেখুন →</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-ar">رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ</div>
        <div className="footer-credit">Daily Dua · দুআ ও সূরা শিক্ষা · © ২০২৬</div>
      </footer>
    </>
  );
}
