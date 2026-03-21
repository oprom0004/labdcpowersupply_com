"use client";
import React from 'react';
import Link from 'next/link';

import { motion } from 'motion/react';
import { Check, Info, ExternalLink } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import pricingConfig from '@/content/pricing.json';

export default function Price() {
  const priceFaqs = pricingConfig.faqs;

  return (
    <div className="w-full py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {pricingConfig.hero.title}
          </h1>
          <p className="text-lg text-slate-600">
            {pricingConfig.hero.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingConfig.tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className={`${tier.popular ? 'bg-slate-900 border-slate-800 shadow-xl relative transform md:-translate-y-4' : 'bg-white border-slate-200 shadow-sm'
                } rounded-2xl border p-8 flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-semibold mb-2 ${tier.popular ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.popular ? 'text-white' : 'text-slate-900'}`}>{tier.price}</span>
              </div>
              <p className={`mb-8 text-sm h-16 ${tier.popular ? 'text-slate-400' : 'text-slate-600'}`}>
                {tier.description}
              </p>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm ${tier.popular ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Check className={`w-5 h-5 shrink-0 ${tier.popular ? 'text-brand-400' : 'text-brand-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <FAQSection
            title="Pricing & Investment FAQs"
            description="Understand the value behind premium laboratory power supplies."
            faqs={priceFaqs}
          />
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-slate-200 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{pricingConfig.bottomCta.title}</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            {pricingConfig.bottomCta.description}
          </p>
          <a
            href={pricingConfig.bottomCta.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            {pricingConfig.bottomCta.buttonText} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
