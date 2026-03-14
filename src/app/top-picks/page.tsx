import { Metadata } from 'next';
import ClientPage from './ClientPage';

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: `5 Best Lab DC Power Supplies in ${year} | Variable & Programmable`,
  description: `Comprehensive expert reviews and comparisons of the best lab DC power supplies in ${year}. Find the right variable or programmable bench supply for your budget.`,
  alternates: {
    canonical: '/top-picks',
  },
};

export default function Page() {
  return <ClientPage />;
}
