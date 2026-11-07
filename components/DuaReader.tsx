'use client';

import { useEffect, useRef, useState } from 'react';
import type { DuaMeta, DuaDetail, Word } from '@/lib/data';
import { CAT_LABELS } from '@/lib/data';
import type { AmalInfo } from '@/lib/amal';

const BN = '০১২৩৪৫৬৭৮৯';
function toBn(n: number) {
  return String(n).replace(/[0-9]/g, (d) => BN[+d]);
}

type TooltipState = { word: Word; x: number; y: number } | null;

export default function DuaReader({
  meta,
  detail,
  amal = null,
}: {
  meta: DuaMeta;
  detail: DuaDetail | null;
  amal?: AmalInfo | null;
}) {
  const [fontSize, setFontSize] = useState(28);
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});
  const [tooltip, setTooltip] = useState<TooltipState>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [copyBtnLabel, setCopyBtnLabel] = useState('কপি');
  const contentRef = useRef<HTMLDivElement>(null);
  const ttTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cat = CAT_LABELS[meta.cat] ?? { bn: meta.cat, en: meta.cat };

  useEffect(() => {
    const stored = parseInt(localStorage.getItem('dua-font-size') ?? '28', 10);
    setFontSize(stored);
    const bm = JSON.parse(localStorage.getItem('dua-bookmarks') ?? '{}') as Record<string, boolean>;
    setBookmarks(bm);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--ar-font-size', `${fontSize}px`);
    localStorage.setItem('dua-font-size', String(fontSize));
  }, [fontSize]);

  useEffect(() => {
    document.getElementById('mainContent')?.scrollTo(0, 0);
  }, [meta.id]);

  useEffect(() => {
    if (!contentRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.05 }
    );
    contentRef.current.querySelectorAll('.seg-card').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [detail]);

  function changeFontSize(delta: number) {
    setFontSize((s) => Math.max(18, Math.min(42, s + delta)));
  }

  function toggleBookmark() {
    const next = { ...bookmarks };
    if (next[meta.id]) delete next[meta.id]; else next[meta.id] = true;
    setBookmarks(next);
    localStorage.setItem('dua-bookmarks', JSON.stringify(next));
  }

  async function copyArabic() {
    if (!detail) return;
    try {
      await navigator.clipboard.writeText(detail.fullArabic);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = detail.fullArabic;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setToastVisible(true);
    setCopyBtnLabel('কপি হয়েছে ✓');
    setTimeout(() => { setToastVisible(false); setCopyBtnLabel('কপি'); }, 2000);
  }

  function showWordTooltip(word: Word, e: React.MouseEvent) {
    if (ttTimer.current) clearTimeout(ttTimer.current);
    const mob = window.innerWidth < 768;
    if (mob) {
      setTooltip({ word, x: -1, y: -1 });
    } else {
      const x = Math.min(e.clientX + 14, window.innerWidth - 260);
      const y = Math.min(e.clientY - 10, window.innerHeight - 130);
      setTooltip({ word, x, y });
    }
    ttTimer.current = setTimeout(() => setTooltip(null), 2500);
  }

  const isBookmarked = !!bookmarks[meta.id];

  return (
    <>
      {/* Topbar controls injected via DuaShell — font/copy/bookmark here */}
      <div
        style={{ position: 'sticky', top: 0, zIndex: 200, display: 'flex', gap: 6, padding: '8px 0 8px', background: 'var(--cream)', justifyContent: 'flex-end' }}
      >
        <div className="font-ctrl">
          <button className="fc-btn" onClick={() => changeFontSize(-2)}>A<sup>−</sup></button>
          <span className="fc-size">{fontSize}</span>
          <button className="fc-btn" onClick={() => changeFontSize(+2)}>A<sup>+</sup></button>
        </div>
        {detail && (
          <button className="tb-btn" onClick={copyArabic} title="আরবি কপি করুন">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            {copyBtnLabel}
          </button>
        )}
        <button
          className={`tb-btn icon-only${isBookmarked ? ' bookmarked' : ''}`}
          onClick={toggleBookmark}
          title="বুকমার্ক"
        >
          {isBookmarked ? '★' : '☆'}
        </button>
      </div>

      <div ref={contentRef} onClick={() => setTooltip(null)}>
        {/* DUA HEADER */}
        <div className="dua-header">
          <div className="dh-inner">
            <div className="dh-cat">{cat.en} · {cat.bn}</div>
            <div className="dh-title-bn">{meta.titleBn}</div>
            <div className="dh-title-ar">{meta.titleAr}</div>
          </div>
        </div>

        {!detail ? (
          <div className="coming-soon">
            <div className="cs-ar">{meta.titleAr}</div>
            <div className="cs-msg">বিস্তারিত বিষয়বস্তু শীঘ্রই আসছে…</div>
          </div>
        ) : (
          <>
            {/* FULL ARABIC CARD */}
            <div className="full-arabic-card">
              <div className="fac-arabic">{detail.fullArabic}</div>
              <div className="fac-translit">{detail.fullBanglaTranslit}</div>
              <div className="fac-meaning">{detail.fullMeaningBn}</div>
              {detail.reference && (
                <div className="fac-reference">{detail.reference}</div>
              )}
            </div>

            {/* AMAL GUIDE */}
            {amal && (
              <div className="amal-guide">
                <div className="amal-box">
                  <div className="amal-title">✅ কীভাবে আমল করবেন</div>
                  <ul className="amal-howto">
                    {amal.howTo.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>
                <div className="amal-box amal-fazilat">
                  <div className="amal-title">🌟 ফজিলত</div>
                  <ul className="amal-list">
                    {amal.fazilat.map((f) => (
                      <li key={f.src}>
                        <span className="amal-src">{f.src}</span>
                        <span>{f.textBn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {amal.story && (
                  <div className="amal-box">
                    <div className="amal-title">📖 ঘটনা</div>
                    <div className="amal-story-title">{amal.story.title}</div>
                    <p className="amal-story">{amal.story.textBn}</p>
                  </div>
                )}
              </div>
            )}

            {/* SEGMENT CARDS */}
            {detail.segments.map((seg, i) => (
              <div
                key={i}
                className="seg-card"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="seg-hdr">
                  <span className="seg-num">{toBn(i + 1)}</span>
                  <div className="seg-arabic">{seg.arabic}</div>
                </div>
                <div className="seg-body">
                  <div className="translit-row">
                    <div className="tbox">
                      <div className="tbox-label">Transliteration</div>
                      <div className="tbox-text italic">{seg.translit}</div>
                    </div>
                    <div className="tbox">
                      <div className="tbox-label">বাংলা উচ্চারণ</div>
                      <div className="tbox-text">{seg.banglaTranslit}</div>
                    </div>
                  </div>
                  <div className="meaning-box">
                    <div className="mb-label">বাংলা অর্থ</div>
                    <div className="mb-text">{seg.meaningBn}</div>
                  </div>
                  <table className="word-table">
                    <thead>
                      <tr>
                        <th>আরবি</th>
                        <th>Transliteration</th>
                        <th>English</th>
                        <th>বাংলা অর্থ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seg.words.map((word, wi) => (
                        <tr
                          key={wi}
                          onClick={(e) => { e.stopPropagation(); showWordTooltip(word, e); }}
                        >
                          <td className="w-ar">{word.ar}</td>
                          <td>{word.tr}</td>
                          <td>{word.en}</td>
                          <td className="w-bn">{word.bn}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="meaning-bar">
                    <div className="mbar-en">{seg.meaningEn}</div>
                    <div className="mbar-bn">{seg.meaningBn}</div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* TOOLTIP */}
      {tooltip && (
        <div
          className="tooltip show"
          style={
            tooltip.x === -1
              ? { left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }
              : { left: tooltip.x, top: tooltip.y }
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className="tt-ar">{tooltip.word.ar}</div>
          <div className="tt-bn">{tooltip.word.bn}</div>
          <div className="tt-en">{tooltip.word.en}</div>
        </div>
      )}

      {/* TOAST */}
      <div className={`toast${toastVisible ? ' show' : ''}`}>আরবি কপি হয়েছে ✓</div>
    </>
  );
}
