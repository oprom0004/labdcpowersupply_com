import { Metadata } from 'next';
import ClientPage from './ClientPage';

import homeConfig from '@/content/home.json';

export const metadata: Metadata = {
  title: homeConfig.metaTitle,
  description: homeConfig.metaDescription,
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <ClientPage />;
}
