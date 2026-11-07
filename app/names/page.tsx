import type { Metadata } from 'next';
import NamesClient from '@/components/NamesClient';
import { NAMES } from '@/lib/names';

export const metadata: Metadata = {
  title: 'আল্লাহর ৯৯ নাম — Daily Dua',
  description: 'আসমাউল হুসনা: আল্লাহর ৯৯ নাম, অর্থ ও সংক্ষিপ্ত ব্যাখ্যা।',
};

export default function NamesPage() {
  return <NamesClient names={NAMES} />;
}
