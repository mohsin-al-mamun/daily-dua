import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NameDetail from '@/components/NameDetail';
import { NAMES } from '@/lib/names';
import AYAT from '@/lib/name-ayat.json';

export async function generateMetadata(props: PageProps<'/names/[n]'>): Promise<Metadata> {
  const { n } = await props.params;
  const name = NAMES.find((x) => String(x.n) === n);
  if (!name) return {};
  return {
    title: `${name.bn} (${name.tr}) — আল্লাহর ৯৯ নাম`,
    description: `${name.ar} · ${name.meaningBn}। ${name.detailBn}`,
  };
}

export default async function NamePage(props: PageProps<'/names/[n]'>) {
  const { n } = await props.params;
  const idx = NAMES.findIndex((x) => String(x.n) === n);
  if (idx < 0) notFound();
  const name = NAMES[idx];
  const ayat: Record<string, string> = {};
  for (const q of name.quran) {
    for (const k of q.ayat) ayat[k] = (AYAT as Record<string, string>)[k];
  }
  return (
    <NameDetail
      name={name}
      ayat={ayat}
      prev={idx > 0 ? NAMES[idx - 1] : null}
      next={idx < NAMES.length - 1 ? NAMES[idx + 1] : null}
    />
  );
}

export function generateStaticParams() {
  return NAMES.map((x) => ({ n: String(x.n) }));
}
