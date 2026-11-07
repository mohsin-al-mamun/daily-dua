'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { AllahName } from '@/lib/names';
import { LogoIcon } from './Logo';

const BN = '০১২৩৪৫৬৭৮৯';
function toBn(n: number) {
  return String(n).replace(/[0-9]/g, (d) => BN[+d]);
}

export default function NamesClient({ names }: { names: AllahName[] }) {
  const [dark, setDark] = useState(false);
  const [searchQ, setSearchQ] = useState('');

  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  const q = searchQ.toLowerCase().trim();
  const list = q
    ? names.filter(
        (x) =>
          x.ar.includes(searchQ.trim()) ||
          x.tr.toLowerCase().includes(q) ||
          x.bn.includes(searchQ.trim()) ||
          x.en.toLowerCase().includes(q) ||
          x.meaningBn.includes(searchQ.trim())
      )
    : names;

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
          <span>আল্লাহর ৯৯ নাম</span>
        </nav>
        <div className="nav-search-wrap">
          <input
            className="nav-search"
            type="search"
            placeholder="নাম বা অর্থ খুঁজুন…"
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

      <div className="cat-page-hdr">
        <div className="cph-icon">✨</div>
        <div className="cph-text">
          <div className="cph-title-bn">আল্লাহর ৯৯ নাম</div>
          <div className="cph-sub">Asmaul Husna · The Beautiful Names of Allah</div>
          <div className="cph-count">{toBn(names.length)}টি নাম · অর্থ ও সংক্ষিপ্ত ব্যাখ্যা</div>
        </div>
      </div>

      <main className="main-wrap">
        <div className="names-intro">
          <div className="names-intro-ar">
            إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةً إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ
          </div>
          <p>
            “নিশ্চয়ই আল্লাহর ৯৯টি নাম আছে, এক কম একশ। যে এগুলো আয়ত্ত করবে (মুখস্থ, অর্থ বুঝে ও আমল করবে) সে জান্নাতে প্রবেশ করবে।”
            <span> — সহীহ বুখারি ২৭৩৬, সহীহ মুসলিম ২৬৭৭</span>
          </p>
        </div>

        {list.length > 0 ? (
          <div className="names-grid">
            {list.map((x) => (
              <Link key={x.n} href={`/names/${x.n}`} className="name-card">
                <span className="name-num">{toBn(x.n)}</span>
                <span className="name-ar">{x.ar}</span>
                <span className="name-bn">{x.bn}</span>
                <span className="name-tr">{x.tr}</span>
                <span className="name-meaning">{x.meaningBn}</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-results show">
            <div className="no-results-ar">لم يوجد</div>
            কোনো নাম পাওয়া যায়নি। অনুগ্রহ করে অন্য শব্দ দিয়ে অনুসন্ধান করুন।
          </div>
        )}

        <p className="names-note">
          ৯৯ নামের তালিকা বিভিন্ন সূত্রে সামান্য ভিন্ন হতে পারে; এখানে প্রচলিত তালিকা অনুসরণ করা হয়েছে। অর্থ ও ব্যাখ্যা সংক্ষিপ্ত ও সাধারণ বোঝার জন্য।
        </p>
      </main>

      <footer className="site-footer">
        <div className="footer-ar">وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا</div>
        <div className="footer-credit">Daily Dua · দুআ ও সূরা শিক্ষা · © ২০২৬</div>
      </footer>
    </>
  );
}
