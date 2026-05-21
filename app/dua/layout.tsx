import { DUAS, CATS } from '@/lib/data';
import DuaShell from '@/components/DuaShell';

export default function DuaLayout({ children }: { children: React.ReactNode }) {
  return (
    <DuaShell duas={DUAS} cats={CATS}>
      {children}
    </DuaShell>
  );
}
