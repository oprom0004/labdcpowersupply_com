import { Metadata } from 'next';
import ClientPage from './ClientPage';

import howToChooseConfig from '@/content/how-to-choose.json';

export const metadata: Metadata = {
  title: howToChooseConfig.metaTitle,
  description: howToChooseConfig.metaDescription,
  alternates: {
    canonical: '/how-to-choose',
  },
};

export default function Page() {
  return <ClientPage />;
}
