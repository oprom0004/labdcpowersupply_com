"use client";
import React from 'react';
import Link from 'next/link';

import { motion } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import applicationsConfig from '@/content/applications.json';

export default function Applications() {
  const industries = applicationsConfig.industries;

  return (
    <div className="w-full py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            {applicationsConfig.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: applicationsConfig.description }} />
        </motion.div>

        {/* Industries List */}
        <div className="space-y-16 mb-24">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Content Side */}
              <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-4xl">
                    {industry.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{industry.title}</h2>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-slate-700 leading-relaxed">{industry.painPoint}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-2">The Solution</h3>
                    <p className="text-slate-700 leading-relaxed">{industry.solution}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <span className="inline-block bg-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full font-mono">
                    Search Intent: {industry.keyword}
                  </span>
                </div>
              </div>

              {/* Recommendation Side */}
              <div className="bg-slate-900 text-white p-8 md:p-12 md:w-1/3 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-10" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-brand-400 mb-4 text-sm font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-5 h-5" /> Recommended
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{industry.recommendation.name}</h3>
                  <p className="text-slate-400 font-mono text-sm mb-8 pb-8 border-b border-slate-700">
                    {industry.recommendation.specs}
                  </p>

                  <a
                    href={industry.recommendation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white text-center rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    View Models <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
