import { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import './globals.css';

export const metadata: Metadata = {
    title: 'Lab DC Power Supply Guide | Expert Reviews & Comparisons',
    description: 'Independent research, reviews, and application notes for mid-to-high-end laboratory DC power supplies.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col font-sans">
                {/* Top Banner */}
                <div className="bg-zinc-950 text-zinc-400 text-[10px] py-2 px-4 text-center font-mono tracking-[0.1em] uppercase border-b border-zinc-800">
                    Premium Laboratory DC Power Supplies | Visit our main site:{' '}
                    <a href="https://variabledcpowersupply.com" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-500 hover:text-amber-400 inline-flex items-center ml-1 transition-colors font-bold">
                        variabledcpowersupply.com <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                </div>

                <Navigation />

                {/* Main Content */}
                <main className="flex-grow">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
