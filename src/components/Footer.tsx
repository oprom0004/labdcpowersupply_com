import Link from 'next/link';
import { Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Trust */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-6">
                            <span className="font-extrabold text-2xl tracking-tight">
                                <span className="text-amber-500">LabDC</span>
                                <span className="text-white">PowerSupply</span>
                                <span className="text-zinc-500 font-medium">.com</span>
                            </span>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                            An independent resource for engineers and researchers. We provide in-depth guides, reviews, and application notes for mid-to-high-end laboratory DC power supplies.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:contact@variabledcpowersupply.com" className="hover:text-amber-500 transition-colors">contact@variabledcpowersupply.com</a>
                        </div>
                    </div>

                    {/* Knowledge Base (Internal Links) */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Knowledge Base</h3>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li><Link href="/how-to-choose" className="hover:text-amber-500 transition-colors">How to Choose a Power Supply</Link></li>
                            <li><Link href="/applications" className="hover:text-amber-500 transition-colors">Industry Applications</Link></li>
                            <li><Link href="/top-picks" className="hover:text-amber-500 transition-colors">Top Picks & Reviews</Link></li>
                            <li><Link href="/price" className="hover:text-amber-500 transition-colors">Pricing Guide</Link></li>
                        </ul>
                    </div>

                    {/* Main Store Deep Links (External, Nofollow) */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Equipment Catalog</h3>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li>
                                <a href="https://variabledcpowersupply.com/high-precision-dc-power-supply/" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-amber-500 transition-colors flex items-center group">
                                    High Precision Power Supplies <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="https://variabledcpowersupply.com/programmable-dc-power-supply/" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-amber-500 transition-colors flex items-center group">
                                    Programmable DC Supplies <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="https://variabledcpowersupply.com/high-power-dc-power-supplies" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-amber-500 transition-colors flex items-center group">
                                    High Power DC Supplies <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="https://variabledcpowersupply.com/high-voltage-dc-power-supply/" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-amber-500 transition-colors flex items-center group">
                                    High Voltage DC Supplies <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Trust */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal & Trust</h3>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/where-to-buy" className="hover:text-white transition-colors">Where to Buy</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-xs">
                        &copy; {new Date().getFullYear()} Lab DC Power Supply Guide. All rights reserved.
                    </p>
                    <p className="text-zinc-600 text-xs">
                        Independent research and reviews for engineering professionals.
                    </p>
                </div>
            </div>
        </footer>
    );
}
