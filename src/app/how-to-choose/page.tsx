import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'How to Choose a Lab DC Power Supply | Buying Guide & Specs',
  description: 'Comprehensive guide and review for laboratory DC power supplies.',
};

export default function Page() {
  return <ClientPage />;
}
