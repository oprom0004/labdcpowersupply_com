"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ExternalLink } from 'lucide-react';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Top Picks & Reviews', path: '/top-picks' },
        { name: 'Applications', path: '/applications' },
        { name: 'Price', path: '/price' },
        { name: 'How to Choose', path: '/how-to-choose' },
        { name: 'Where to Buy', path: '/where-to-buy' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <>
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center gap-2.5 group">
                                <span className="font-extrabold text-2xl tracking-tight">
                                    <span className="text-amber-500">LabDC</span>
                                    <span className="text-zinc-900">PowerSupply</span>
                                    <span className="text-zinc-400 font-medium">.com</span>
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-brand-600' : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://variabledcpowersupply.com"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 border border-zinc-800 text-sm font-bold tracking-widest uppercase rounded-sm text-amber-500 bg-zinc-950 hover:bg-zinc-900 hover:border-amber-500/50 shadow-sm transition-all"
                            >
                                Online Store
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-slate-500 hover:text-slate-700 p-2"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-slate-100 bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                            ? 'bg-brand-50 text-brand-600'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://variabledcpowersupply.com"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="block px-3 py-2 rounded-md text-base font-medium text-brand-600 hover:bg-brand-50"
                            >
                                Visit Online Store &rarr;
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
