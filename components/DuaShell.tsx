'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { DuaMeta, Category } from '@/lib/data';
import { LogoIcon } from './Logo';

export default function DuaShell({
  duas,
  cats,
  children,
}: {
  duas: DuaMeta[];
  cats: Category[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentId = pathname.startsWith('/dua/') ? pathname.slice(5) : null;

  const [searchQ, setSearchQ] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(localStorage.getItem('darkMode') === 'true');
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('darkMode', String(next));
  }

  function openSidebar() { setSidebarOpen(true); }
  function closeSidebar() { setSidebarOpen(false); }

  const q = searchQ.toLowerCase().trim();

  const currentDua = duas.find((d) => d.id === currentId);
  const currentCat = cats.find((c) => c.id === currentDua?.cat);

  const visibleDuas = duas.filter((d) => {
    const catMatch = d.cat === currentDua?.cat;
    const qMatch = !q || d.titleBn.toLowerCase().includes(q) || d.titleAr.includes(q);
    return catMatch && qMatch;
  });

  return (
    <>
      {/* TOPBAR */}
      <header className="topbar">
        <button className="hamburger" onClick={openSidebar} aria-label="Menu">☰</button>
        <nav className="breadcrumb">
          <Link href="/">দুআ শিক্ষা</Link>
          {currentDua && (
            <>
              <span>›</span>
              <Link href={`/category/${currentDua.cat}`}>{currentCat?.titleBn ?? currentDua.cat}</Link>
              <span>›</span>
              <span>{currentDua.titleBn}</span>
            </>
          )}
        </nav>
        <div className="topbar-right">
          <button className="tb-btn icon-only" id="darkBtn" onClick={toggleDark} title="Dark mode">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* APP SHELL */}
      <div className="app-shell">
        {/* Overlay */}
        <div
          className={`overlay${sidebarOpen ? ' show' : ''}`}
          onClick={closeSidebar}
        />

        {/* SIDEBAR */}
        <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
          <div className="sb-head">
            <Link className="sb-logo" href="/" aria-label="Daily Dua — Home">
              <LogoIcon size={44} />
              <div className="sb-logo-text">
                <div className="sb-logo-title">DAILY DUA</div>
                <div className="sb-logo-bn">দুআ ও সূরা শিক্ষা</div>
              </div>
            </Link>
          </div>

          <div className="sb-search-wrap">
            <input
              className="sb-search"
              type="search"
              placeholder="খুঁজুন…"
              autoComplete="off"
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
            />
          </div>

          {currentCat && (
            <div style={{ padding: '8px 14px 4px' }}>
              <Link
                href={`/category/${currentCat.id}`}
                style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600, letterSpacing: '.04em', textDecoration: 'none' }}
              >
                ← {currentCat.titleBn}
              </Link>
            </div>
          )}

          <ul className="dua-list">
            {visibleDuas.map((d) => (
              <li key={d.id}>
                <Link
                  className={`dua-item${d.id === currentId ? ' active' : ''}`}
                  href={`/dua/${d.id}`}
                  onClick={closeSidebar}
                >
                  <div className="item-ar">{d.titleAr}</div>
                  <div className="item-bn">{d.titleBn}</div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN */}
        <main className="content" id="mainContent">
          {children}
        </main>
      </div>
    </>
  );
}
