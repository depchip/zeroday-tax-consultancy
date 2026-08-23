import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon/ComingSoon';

export const metadata: Metadata = {
  title: 'FaaS | Zeroday Tax Consultancy',
};

export default function FaasPage() {
  return (
    <ComingSoon
      title="Finance as a Service (FaaS)"
      text="Our outsourced Finance-as-a-Service offering — full-stack accounting, tax and compliance support for growing businesses — is being finalized. Reach out to discuss early access."
    />
  );
}
