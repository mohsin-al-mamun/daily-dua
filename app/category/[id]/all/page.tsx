import { CATS, DUAS, CAT_LABELS, DETAIL_MAP } from '@/lib/data';
import ReadAllClient from '@/components/ReadAllClient';
import { notFound } from 'next/navigation';

export default async function ReadAllPage(props: PageProps<'/category/[id]/all'>) {
  const { id } = await props.params;
  const cat = CATS.find((c) => c.id === id);
  if (!cat) notFound();
  const label = CAT_LABELS[id];
  const items = DUAS.filter((d) => d.cat === id)
    .map((meta) => ({ meta, detail: DETAIL_MAP[meta.id] }))
    .filter((item): item is { meta: typeof item.meta; detail: NonNullable<typeof item.detail> } => !!item.detail);
  return <ReadAllClient cat={cat} label={label} items={items} />;
}

export function generateStaticParams() {
  return CATS.map((c) => ({ id: c.id }));
}
