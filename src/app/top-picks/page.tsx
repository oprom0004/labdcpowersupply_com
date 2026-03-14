import { Metadata } from 'next';
import ClientPage from './ClientPage';

import topPicksConfig from '@/content/top-picks.json';

const year = new Date().getFullYear().toString();

export const metadata: Metadata = {
  title: topPicksConfig.metaTitle.replace('{year}', year),
  description: topPicksConfig.metaDescription.replace('{year}', year),
  alternates: {
    canonical: '/top-picks',
  },
};

export default function Page() {
  return <ClientPage />;
}
