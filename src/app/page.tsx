import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'High-Precision Lab DC Power Supply | Premium Test Equipment',
  description: 'Comprehensive guide and review for laboratory DC power supplies.',
};

export default function Page() {
  return <ClientPage />;
}
