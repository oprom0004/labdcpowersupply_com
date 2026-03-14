import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Lab DC Power Supply Applications: ATE, Automotive & RF Testing',
  description: 'Comprehensive guide and review for laboratory DC power supplies.',
};

export default function Page() {
  return <ClientPage />;
}
