import { Metadata } from 'next';
import ClientPage from './ClientPage';

import whereToBuyConfig from '@/content/where-to-buy.json';

export const metadata: Metadata = {
  title: whereToBuyConfig.metaTitle,
  description: whereToBuyConfig.metaDescription,
};

export default function Page() {
  return <ClientPage />;
}
