import { CATS, DUAS, CAT_LABELS } from '@/lib/data';
import CategoryClient from '@/components/CategoryClient';
import { notFound } from 'next/navigation';

export default async function CategoryPage(props: PageProps<'/category/[id]'>) {
  const { id } = await props.params;
  const cat = CATS.find((c) => c.id === id);
  if (!cat) notFound();
  const duas = DUAS.filter((d) => d.cat === id);
  const label = CAT_LABELS[id];
  return <CategoryClient cat={cat} duas={duas} label={label} />;
}

export function generateStaticParams() {
  return CATS.map((c) => ({ id: c.id }));
}
