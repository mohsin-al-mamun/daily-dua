import { DUAS, DETAIL_MAP } from '@/lib/data';
import DuaReader from '@/components/DuaReader';
import { notFound } from 'next/navigation';

export default async function DuaPage(props: PageProps<'/dua/[id]'>) {
  const { id } = await props.params;
  const meta = DUAS.find((d) => d.id === id);
  if (!meta) notFound();
  const detail = DETAIL_MAP[id] ?? null;
  return <DuaReader meta={meta} detail={detail} />;
}

export function generateStaticParams() {
  return DUAS.map((d) => ({ id: d.id }));
}
