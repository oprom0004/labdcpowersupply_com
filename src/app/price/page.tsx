import { Metadata } from 'next';
import ClientPage from './ClientPage';

import pricingConfig from '@/content/pricing.json';

export const metadata: Metadata = {
  title: pricingConfig.metaTitle,
  description: pricingConfig.metaDescription,
};

export default function Page() {
  return <ClientPage />;
}
