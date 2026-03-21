import { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/config';

import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.seo.defaultTitle,
        template: siteConfig.seo.titleTemplate,
    },
    description: siteConfig.seo.defaultDescription,
    openGraph: {
        siteName: siteConfig.siteName,
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-icon.png',
        other: {
            rel: 'icon',
            url: '/icon.png',
        },
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
        name: siteConfig.brandName,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };

    const orgSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.brandName,
        url: siteConfig.url,
        contactPoint: {
            '@type': 'ContactPoint',
            email: siteConfig.contactEmail,
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
                    {siteConfig.banner.text}{' '}
                    <a href={siteConfig.banner.link} target="_blank" rel="nofollow noopener noreferrer" className="text-amber-500 hover:text-amber-400 inline-flex items-center ml-1 transition-colors font-bold">
                        {siteConfig.banner.linkText} <ExternalLink className="w-3 h-3 ml-1" />
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
