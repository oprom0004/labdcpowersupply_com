"use client";
import Link from 'next/link';

import { motion } from 'motion/react';
import { useRef } from 'react';
import { Star, Award, Zap, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';

const YEAR = new Date().getFullYear();

export default function TopPicks() {


  const topPicksFaqs = [
    {
      question: "What is the best DC lab power supply for a beginner?",
      answer: "While many beginners look for a cheap 12V supply, the <strong>best DC lab power supply</strong> for starting out is a 30V/5A variable switching power supply. It offers enough voltage headroom for most Arduino, Raspberry Pi, and basic electronics projects without breaking the bank."
    },
    {
      question: "Are expensive linear power supplies worth the money?",
      answer: "Yes, if your work involves sensitive analog circuits, audio amplifiers, or RF design. In any <strong>DC lab power supply review</strong>, linear supplies consistently score highest for ultra-low ripple and noise. If you are just powering digital logic boards, a high-quality switching supply is usually sufficient."
    },
    {
      question: "Which brands make the best electronics lab DC power supplies?",
      answer: "Top-tier brands in the mid-to-high-end space include Keysight (formerly Agilent/HP), Rohde & Schwarz, Keithley (Tektronix), and B&K Precision. For excellent price-to-performance ratios in the mid-range, Rigol and Siglent are highly recommended."
    }
  ];

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
            Best Lab DC Power Supplies of {YEAR}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our top picks for high-precision <strong>variable</strong> and <strong>programmable</strong> units for every engineering budget. Whether you need an ultra-low noise linear supply or a high-density ATE unit, find the perfect match for your <strong>benchtop</strong>.
          </p>
        </motion.div>

        {/* Top Picks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

          {/* Pick 1: Best Overall */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-brand-200 shadow-xl overflow-hidden relative flex flex-col"
          >
            <div className="bg-brand-600 text-white py-2 px-4 text-center font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2">
              <Award className="w-4 h-4" /> Best Overall Precision
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium Linear Series</h3>
              <p className="text-brand-600 font-medium mb-6">30V / 3A —Triple Output</p>

              <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                The undisputed king of clean power. In our latest <strong>dc lab power supply review</strong>, this series delivered an astonishing &lt;0.35mVrms ripple. Perfect for sensitive analog and RF testing.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Fully isolated independent channels</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>1mV / 0.1mA readback resolution</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Standard USB/LAN (LXI) interfaces</span>
                </li>
              </ul>

              <a
                href="https://variabledcpowersupply.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-center rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                Check Price <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Pick 2: Best Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
          >
            <div className="bg-slate-100 text-slate-600 py-2 px-4 text-center font-bold text-sm tracking-wider uppercase">
              Best Value Programmable
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Advanced Switching Series</h3>
              <p className="text-slate-500 font-medium mb-6">60V / 10A —Autoranging</p>

              <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                If you need a versatile <strong>electronics lab dc power supply</strong> that won't break the budget, this autoranging unit replaces multiple traditional supplies while maintaining excellent transient response.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Constant Power (Autoranging) output</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Built-in arbitrary waveform generator</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Compact 1U half-rack form factor</span>
                </li>
              </ul>

              <a
                href="https://variabledcpowersupply.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-center rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                Check Price <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Pick 3: Best High Power */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
          >
            <div className="bg-slate-800 text-white py-2 px-4 text-center font-bold text-sm tracking-wider uppercase">
              Best High Power / ATE
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">High-Density System Power</h3>
              <p className="text-slate-500 font-medium mb-6">Up to 1500W —Single Output</p>

              <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                Designed for battery simulation, motor testing, and automated test equipment (ATE) racks. This is the <strong>best dc lab power supply</strong> for high-current industrial applications.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>High power density (1.5kW in 1U)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Adjustable slew rates for voltage/current</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Analog programming and monitoring</span>
                </li>
              </ul>

              <a
                href="https://variabledcpowersupply.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-center rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                Check Price <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <FAQSection
            title="DC Lab Power Supply Reviews & Buying FAQs"
            description="Common questions from our readers when selecting the best power supply for their bench."
            faqs={topPicksFaqs}
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
