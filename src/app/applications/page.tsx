import { Metadata } from 'next';
import ClientPage from './ClientPage';

import applicationsConfig from '@/content/applications.json';

export const metadata: Metadata = {
  title: applicationsConfig.metaTitle,
  description: applicationsConfig.metaDescription,
  alternates: {
    canonical: '/applications',
  },
};

export default function Page() {
  return <ClientPage />;
}
