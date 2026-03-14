"use client";
import React from 'react';
import Link from 'next/link';

import { motion } from 'motion/react';
import { useRef } from 'react';
import { Star, Award, Zap, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import topPicksConfig from '@/content/top-picks.json';

const YEAR = new Date().getFullYear();

export default function TopPicks() {
  const title = topPicksConfig.title.replace('{year}', YEAR.toString());
  const description = topPicksConfig.description;
  const topPicks = topPicksConfig.topPicks;
  const faqData = topPicksConfig.faqSection;

  return (
    <div className="w-full py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-slate-800 text-slate-100 text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-slate-700 shadow-sm">
            <Award className="w-3.5 h-3.5 text-slate-300" />
            <span>{YEAR} Editor&apos;s Choices</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        </motion.div>

        {/* Top Picks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {topPicks.map((pick, idx) => (
            <motion.div
              key={pick.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className={`bg-white rounded-2xl border overflow-hidden relative flex flex-col ${pick.variant === 'primary' ? 'border-brand-200 shadow-xl' : 'border-slate-200 shadow-sm'
                }`}
            >
              <div className={`${pick.variant === 'primary' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                } py-2 px-4 text-center font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2`}>
                <Award className="w-4 h-4" /> {pick.badge}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pick.name}</h3>
                <p className={`${pick.variant === 'primary' ? 'text-brand-600' : 'text-slate-500'} font-medium mb-6`}>
                  {pick.specs}
                </p>

                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow" dangerouslySetInnerHTML={{ __html: pick.description }} />

                <ul className="space-y-3 mb-8">
                  {pick.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-700">
                      {pick.variant === 'primary' ? (
                        <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                      ) : (
                        pick.id === 'best-value' ? (
                          <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                        ) : (
                          <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0" />
                        )
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={pick.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 text-center rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${pick.variant === 'primary'
                      ? 'bg-slate-900 hover:bg-slate-800 text-white'
                      : 'bg-white border border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                >
                  Check Price <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <FAQSection
            title={faqData.title}
            description={faqData.description}
            faqs={faqData.faqs}
          />
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-900 rounded-2xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to upgrade your bench?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Explore the full catalog of these top-rated models and check real-time availability at our main portal.
            </p>
            <a
              href="https://variabledcpowersupply.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-lg font-bold text-lg hover:bg-brand-400 transition-all shadow-lg hover:shadow-brand-500/50"
            >
              Shop All Top Picks <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
