import Link from 'next/link';
import { Mail, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Trust */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-6">
                            <span className="font-extrabold text-2xl tracking-tight">
                                <span className="text-amber-500">{siteConfig.brandLogo.text1}</span>
                                <span className="text-white">{siteConfig.brandLogo.text2}</span>
                                <span className="text-zinc-500 font-medium">{siteConfig.brandLogo.suffix}</span>
                            </span>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                            {siteConfig.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                            <Mail className="w-4 h-4" />
                            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-amber-500 transition-colors">{siteConfig.contactEmail}</a>
                        </div>
                    </div>

                    {/* Knowledge Base (Internal Links) */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Knowledge Base</h3>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            {siteConfig.footer.knowledgeBase.map((link) => (
                                <li key={link.path}>
                                    <Link href={link.path} className="hover:text-amber-500 transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Store Deep Links (External, Nofollow) */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Equipment Catalog</h3>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            {siteConfig.footer.equipmentCatalog.map((link) => (
                                <li key={link.link}>
                                    <a href={link.link} target="_blank" rel="nofollow noopener noreferrer" className="hover:text-amber-500 transition-colors flex items-center group">
                                        {link.name} <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Trust */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal & Trust</h3>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            {siteConfig.footer.legal.map((link) => (
                                <li key={link.path}>
                                    <Link href={link.path} className="hover:text-white transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-xs">
                        &copy; {new Date().getFullYear()} {siteConfig.footer.copyright}
                    </p>
                    <p className="text-zinc-600 text-xs">
                        {siteConfig.footer.tagline}
                    </p>
                </div>
            </div>
        </footer>
    );
}
