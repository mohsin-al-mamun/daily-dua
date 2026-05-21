import { DUAS, CATS } from '@/lib/data';
import HomeClient from '@/components/HomeClient';

export default function HomePage() {
  return <HomeClient duas={DUAS} cats={CATS} />;
}
