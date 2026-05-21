import type { Metadata } from 'next';
import { Amiri, Noto_Serif_Bengali, Cinzel } from 'next/font/google';
import './globals.css';

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-amiri',
  display: 'swap',
});

const notoSerifBengali = Noto_Serif_Bengali({
  weight: ['400', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'দুআ ও সূরা শিক্ষা — Daily Dua',
  description: 'নামাজের দোয়া, কুরআনের সূরা, আমল ও তার ফজিলত — শব্দে শব্দে বাংলায় শিখুন।',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${amiri.variable} ${notoSerifBengali.variable} ${cinzel.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('darkMode')==='true')document.documentElement.setAttribute('data-theme','dark')}catch(_){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
