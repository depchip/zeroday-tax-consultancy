import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon/ComingSoon';

export const metadata: Metadata = {
  title: 'Blog | Zeroday Tax Consultancy',
};

export default function BlogPage() {
  return (
    <ComingSoon
      title="Zeroday Insights Blog"
      text="Our blog covering tax, corporate and compliance updates for Pakistan is on its way. Check back soon."
    />
  );
}
