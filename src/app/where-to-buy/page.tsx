import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'WhereToBuy | Lab DC Power Supply',
  description: 'Comprehensive guide and review for laboratory DC power supplies.',
};

export default function Page() {
  return <ClientPage />;
}
