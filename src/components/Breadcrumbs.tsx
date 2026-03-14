import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on the home page
  if (pathnames.length === 0) return null;

  // Map route paths to readable names
  const routeNames: Record<string, string> = {
    'how-to-choose': 'How to Choose',
    'applications': 'Industry Applications',
    'top-picks': 'Top Picks & Reviews',
    'price': 'Pricing Guide',
    'where-to-buy': 'Where to Buy',
    'about': 'About Us',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service',
  };

  return (
    <nav className="flex items-center text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <Link to="/" className="hover:text-brand-600 transition-colors flex items-center">
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const name = routeNames[value] || value.replace(/-/g, ' ');

          return (
            <li key={to} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1 text-slate-400 flex-shrink-0" />
              {last ? (
                <span className="text-slate-900 font-medium capitalize" aria-current="page">
                  {name}
                </span>
              ) : (
                <Link to={to} className="hover:text-brand-600 transition-colors capitalize">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
