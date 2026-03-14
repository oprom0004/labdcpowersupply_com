import { Metadata } from 'next';
import ClientPage from './ClientPage';

import howToChooseConfig from '@/content/how-to-choose.json';

export const metadata: Metadata = {
  title: howToChooseConfig.metaTitle,
  description: howToChooseConfig.metaDescription,
};

export default function Page() {
  return <ClientPage />;
}
