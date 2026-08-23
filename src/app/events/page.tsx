import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon/ComingSoon';

export const metadata: Metadata = {
  title: 'Events | Zeroday Tax Consultancy',
};

export default function EventsPage() {
  return (
    <ComingSoon
      title="Events & Seminars"
      text="Details on upcoming tax awareness seminars, workshops and webinars will be posted here."
    />
  );
}
