"use client";
import React from 'react';
import Link from 'next/link';

import { motion } from 'motion/react';
import { ShoppingCart, Shield, Truck, ExternalLink } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import whereToBuyConfig from '@/content/where-to-buy.json';

export default function WhereToBuy() {
  const buyFaqs = whereToBuyConfig.faqs;

  const valuePropIcons = [Shield, Truck];

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
            {whereToBuyConfig.title}
          </h1>
          <p className="text-lg text-slate-600">
            {whereToBuyConfig.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          {/* Official Store */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-brand-200 shadow-lg p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-10" />
            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
              <ShoppingCart className="w-7 h-7 text-brand-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{whereToBuyConfig.officialStore.title}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {whereToBuyConfig.officialStore.description}
            </p>
            <ul className="space-y-3 mb-8">
              {whereToBuyConfig.officialStore.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whereToBuyConfig.officialStore.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white text-center rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              {whereToBuyConfig.officialStore.cta.text} <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Value Props */}
          <div className="flex flex-col justify-center space-y-8">
            {whereToBuyConfig.valueProps.map((prop, idx) => {
              const Icon = valuePropIcons[idx] || Shield;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{prop.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <FAQSection
            title="Purchasing & Shipping FAQs"
            description="Everything you need to know about ordering, logistics, and support."
            faqs={buyFaqs}
          />
        </div>

        {/* B2B / Enterprise Section */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-10" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-4">{whereToBuyConfig.enterprise.title}</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              {whereToBuyConfig.enterprise.description}
            </p>
            <a
              href={whereToBuyConfig.enterprise.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              {whereToBuyConfig.enterprise.cta.text} <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
