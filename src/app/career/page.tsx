import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon/ComingSoon';

export const metadata: Metadata = {
  title: 'Career | Zeroday Tax Consultancy',
};

export default function CareerPage() {
  return (
    <ComingSoon
      title="Careers at Zeroday Tax Consultancy"
      text="We're building out our careers page. In the meantime, get in touch with us directly if you're interested in joining our tax, accountancy, corporate or HR teams."
    />
  );
}
