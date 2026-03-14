import { Outlet, Link, useLocation } from 'react-router-dom';
import { Zap, ChevronRight, ExternalLink, Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Top Picks & Reviews', path: '/top-picks' },
    { name: 'Applications', path: '/applications' },
    { name: 'Price', path: '/price' },
    { name: 'How to Choose', path: '/how-to-choose' },
    { name: 'Where to Buy', path: '/where-to-buy' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Banner */}
      <div className="bg-zinc-950 text-zinc-400 text-[10px] py-2 px-4 text-center font-mono tracking-[0.1em] uppercase border-b border-zinc-800">
        Premium Laboratory DC Power Supplies | Visit our main site:{' '}
        <a href="https://variabledcpowersupply.com" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-500 hover:text-amber-400 inline-flex items-center ml-1 transition-colors font-bold">
          variabledcpowersupply.com <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2.5 group">
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
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'text-brand-600' : 'text-slate-600 hover:text-slate-900'
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
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
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

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
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
                <li><Link to="/how-to-choose" className="hover:text-amber-500 transition-colors">How to Choose a Power Supply</Link></li>
                <li><Link to="/applications" className="hover:text-amber-500 transition-colors">Industry Applications</Link></li>
                <li><Link to="/top-picks" className="hover:text-amber-500 transition-colors">Top Picks & Reviews</Link></li>
                <li><Link to="/price" className="hover:text-amber-500 transition-colors">Pricing Guide</Link></li>
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
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/where-to-buy" className="hover:text-white transition-colors">Where to Buy</Link></li>
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
    </div>
  );
}
