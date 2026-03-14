import { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://labdcpowersupply.com'),
    title: {
        default: 'Lab DC Power Supply Guide | Expert Reviews & Comparisons',
        template: '%s | LabDCPowerSupply.com',
    },
    description: 'Independent research, reviews, and application notes for mid-to-high-end laboratory DC power supplies.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        siteName: 'LabDCPowerSupply.com',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Lab DC Power Supply Guide',
        url: 'https://labdcpowersupply.com',
        description: 'Independent research, reviews, and application notes for mid-to-high-end laboratory DC power supplies.',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://labdcpowersupply.com/?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
        },
    };

    const orgSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Lab DC Power Supply Guide',
        url: 'https://labdcpowersupply.com',
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'contact@variabledcpowersupply.com',
            contactType: 'customer service',
        },
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
            </head>
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
