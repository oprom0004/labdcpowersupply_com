"use client";
import React from 'react';
import Link from 'next/link';

import { motion } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Info, BookOpen, Zap, Shield, Activity, Settings, Cpu } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import howToChooseConfig from '@/content/how-to-choose.json';

export default function HowToChoose() {
  const guideFaqs = howToChooseConfig.faqs;

  const iconMap: Record<string, any> = {
    Zap,
    Shield,
    Activity,
    Settings,
    Cpu,
  };

  return (
    <div className="w-full py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-brand-600 font-semibold tracking-wide uppercase text-sm mb-4">
            <BookOpen className="w-4 h-4" />
            <span>The Ultimate Technical Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            {howToChooseConfig.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: howToChooseConfig.description }} />

          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="text-slate-700 text-base">
              <p className="mb-2"><strong>Executive Summary:</strong> {howToChooseConfig.executiveSummary}</p>
              <p>Already know your specs? <a href="https://variabledcpowersupply.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-semibold hover:underline inline-flex items-center">Browse premium lab power supplies at variabledcpowersupply.com <ExternalLink className="w-3 h-3 ml-1" /></a></p>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Deep SEO Text */}
        <div className="prose prose-lg prose-slate max-w-none">

          {howToChooseConfig.sections.map((section, idx) => {
            const Icon = iconMap[section.icon] || Zap;
            return (
              <React.Fragment key={idx}>
                <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
                  <Icon className="w-8 h-8 text-brand-500" />
                  {section.title}
                </h2>
                <div className="text-slate-700 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
              </React.Fragment>
            );
          })}

          {/* FAQ Section */}
          <div className="mt-16 mb-8 border-t border-slate-200 pt-12">
            <FAQSection
              title="Frequently Asked Questions (FAQ)"
              faqs={guideFaqs}
            />
          </div>

          {/* Conclusion CTA */}
          <div className="mt-16 bg-slate-900 rounded-2xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">{howToChooseConfig.bottomCta.title}</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              {howToChooseConfig.bottomCta.description}
            </p>
            <p className="text-slate-400 mb-8 text-sm max-w-2xl mx-auto">
              {howToChooseConfig.bottomCta.subDescription}
            </p>
            <a
              href={howToChooseConfig.bottomCta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-lg font-bold text-lg hover:bg-brand-400 transition-all shadow-lg hover:shadow-brand-500/50 hover:-translate-y-1"
            >
              {howToChooseConfig.bottomCta.buttonText} <ExternalLink className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
