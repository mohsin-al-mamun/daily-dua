'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { AllahName } from '@/lib/names';
import { LogoIcon } from './Logo';

const BN = '০১২৩৪৫৬৭৮৯';
function toBn(n: number) {
  return String(n).replace(/[0-9]/g, (d) => BN[+d]);
}

export default function NameDetail({
  name,
  ayat,
  prev,
  next,
}: {
  name: AllahName;
  ayat: Record<string, string>;
  prev: AllahName | null;
  next: AllahName | null;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link className="nav-logo" href="/" aria-label="Daily Dua — Home">
          <LogoIcon size={34} />
          <span className="nav-logo-text">Daily Dua</span>
        </Link>
        <nav className="breadcrumb" style={{ flex: 1, marginLeft: 12 }}>
          <Link href="/">হোম</Link>
          <span>›</span>
          <Link href="/names">আল্লাহর ৯৯ নাম</Link>
          <span>›</span>
          <span>{name.bn}</span>
        </nav>
        <button className="dark-btn" onClick={() => {
          const nextTheme = !dark;
          setDark(nextTheme);
          document.documentElement.setAttribute('data-theme', nextTheme ? 'dark' : 'light');
          localStorage.setItem('darkMode', String(nextTheme));
        }} aria-label="Toggle dark mode">
          {dark ? '☀️' : '🌙'}
        </button>
      </nav>

      <main className="name-page">
        <header className="name-hero">
          <div className="name-hero-num">{toBn(name.n)} / {toBn(99)}</div>
          <div className="name-hero-ar">{name.ar}</div>
          <h1 className="name-hero-bn">{name.bn}</h1>
          <div className="name-hero-tr">{name.tr}</div>
          <div className="name-hero-meaning">{name.meaningBn}</div>
          <div className="name-hero-en">{name.en}</div>
        </header>

        <section className="name-sec">
          <h2>ব্যাখ্যা</h2>
          <p>{name.detailBn}</p>
        </section>

        {name.quran.length > 0 && (
          <section className="name-sec">
            <h2>কুরআনে</h2>
            <ul className="ref-list">
              {name.quran.map((r) => (
                <li key={r.ref}>
                  <span className="ref-src">{r.ref}</span>
                  <span className="ref-ar" lang="ar" dir="rtl">
                    {r.ayat.map((k) => ayat[k]).filter(Boolean).join(' ')}
                  </span>
                  <span>{r.gistBn}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {name.hadith.length > 0 && (
          <section className="name-sec">
            <h2>হাদীসে</h2>
            <ul className="ref-list">
              {name.hadith.map((r) => (
                <li key={r.src}>
                  <span className="ref-src">{r.src}</span>
                  <span>{r.textBn}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {name.story && (
          <section className="name-sec">
            <h2>ঘটনা</h2>
            <div className="story-title">{name.story.title}</div>
            <p>{name.story.textBn}</p>
          </section>
        )}

        <section className="name-sec name-lesson">
          <h2>আমাদের জন্য শিক্ষা</h2>
          <p>{name.lessonBn}</p>
        </section>

        <nav className="name-pager" aria-label="নামের তালিকা">
          {prev ? (
            <Link href={`/names/${prev.n}`} className="pager-link">
              <span className="pager-dir">← আগের নাম</span>
              <span className="pager-ar">{prev.ar}</span>
              <span className="pager-bn">{prev.bn}</span>
            </Link>
          ) : <span />}
          <Link href="/names" className="pager-all">সব নাম</Link>
          {next ? (
            <Link href={`/names/${next.n}`} className="pager-link pager-next">
              <span className="pager-dir">পরের নাম →</span>
              <span className="pager-ar">{next.ar}</span>
              <span className="pager-bn">{next.bn}</span>
            </Link>
          ) : <span />}
        </nav>

        <p className="names-note">
          আয়াত ও হাদীসের সূত্রগুলো সংক্ষিপ্ত সারাংশ আকারে দেওয়া হয়েছে। বিস্তারিত জানতে নির্ভরযোগ্য আলেম ও মূল গ্রন্থের শরণাপন্ন হোন।
        </p>
      </main>

      <footer className="site-footer">
        <div className="footer-ar">وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا</div>
        <div className="footer-credit">Daily Dua · দুআ ও সূরা শিক্ষা · © ২০২৬</div>
      </footer>
    </>
  );
}
