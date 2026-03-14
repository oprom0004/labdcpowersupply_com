import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Error 404
            </div>
            <h1 className="text-6xl font-bold text-zinc-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-zinc-700 mb-4">Page Not Found</h2>
            <p className="text-zinc-500 max-w-md mb-10 leading-relaxed">
                The page you are looking for doesn&apos;t exist or has been moved.
                Try navigating back to our guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white text-sm font-bold tracking-wider uppercase hover:bg-zinc-800 transition-colors"
                >
                    Back to Home
                </Link>
                <Link
                    href="/how-to-choose"
                    className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 text-zinc-700 text-sm font-bold tracking-wider uppercase hover:bg-zinc-50 transition-colors"
                >
                    How to Choose Guide
                </Link>
            </div>
        </div>
    );
}
