'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { DuaMeta, Category } from '@/lib/data';

const BN = '০১২৩৪৫৬৭৮৯';
function toBn(n: number) {
  return String(n).replace(/[0-9]/g, (d) => BN[+d]);
}

export default function HomeClient({ duas, cats }: { duas: DuaMeta[]; cats: Category[] }) {
  const [dark, setDark] = useState(false);
  const [searchQ, setSearchQ] = useState('');
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode') === 'true';
    setDark(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('darkMode', String(dark));
  }, [dark]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    sectionsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [searchQ]);

  const q = searchQ.toLowerCase().trim();

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <Link className="nav-logo" href="/">Dua Learning</Link>
        <span className="nav-arabic">دعاء و صلاة</span>
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
        <button className="dark-btn" onClick={() => setDark((d) => !d)} aria-label="Toggle dark mode">
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
      <main className="main-wrap">
        {cats.map((cat, i) => {
          const catDuas = duas.filter((d) => d.cat === cat.id);
          const filteredDuas = q
            ? catDuas.filter(
                (d) =>
                  d.titleBn.toLowerCase().includes(q) ||
                  d.titleAr.includes(q) ||
                  d.cat.includes(q)
              )
            : catDuas;

          if (q && filteredDuas.length === 0) return null;

          return (
            <section
              key={cat.id}
              className="cat-section"
              style={{ transitionDelay: `${i * 90}ms` }}
              ref={(el) => { if (el) sectionsRef.current[i] = el; }}
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

        {q && cats.every((cat) => duas.filter((d) => d.cat === cat.id && (d.titleBn.toLowerCase().includes(q) || d.titleAr.includes(q) || d.cat.includes(q))).length === 0) && (
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
