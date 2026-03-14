"use client";
import Link from 'next/link';

import { motion } from 'motion/react';
import { ShoppingCart, Shield, Truck, ExternalLink } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

export default function WhereToBuy() {
  const buyFaqs = [
    {
      question: "Do purchases include a Calibration Certificate?",
      answer: "Yes, all our mid-to-high-end laboratory DC power supplies come with a standard factory calibration certificate. If your industry requires strict compliance, we also offer <strong>NIST-traceable calibration</strong> options at the time of purchase."
    },
    {
      question: "What is the international shipping process for heavy power supplies?",
      answer: "High-precision linear power supplies can be extremely heavy due to their internal transformers. We partner with specialized freight and international couriers (DHL, FedEx, UPS) to ensure safe, palletized (when necessary) delivery worldwide. Shipping costs and estimated customs times are calculated at checkout on our main portal."
    },
    {
      question: "How does the warranty and technical support work?",
      answer: "Purchasing through our official channels guarantees you receive the full manufacturer's warranty (typically 1 to 3 years, depending on the model). You also gain direct access to our engineering support team to help with SCPI programming, rack integration, and troubleshooting."
    },
    {
      question: "Can I return a power supply if it doesn't meet my testing requirements?",
      answer: "We offer a standard return window for unused equipment in its original packaging. However, because lab power supplies are precision instruments, restocking fees may apply. We highly recommend consulting with our pre-sales engineers or reading our <a href='/how-to-choose' class='text-brand-600 hover:underline'>Selection Guide</a> to ensure you choose the right model the first time."
    }
  ];

  return (
    <div className="w-full py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Where to Buy
          </h1>
          <p className="text-lg text-slate-600">
            Secure your mid-to-high-end laboratory DC power supplies through our official channels for guaranteed authenticity, warranty, and support.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Official Online Store</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The fastest and most reliable way to purchase is directly through our main portal. We offer the complete catalog of premium lab power supplies with real-time inventory and pricing.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Direct manufacturer warranty",
                "Technical pre-sales support",
                "Secure online checkout",
                "Global shipping options"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://variabledcpowersupply.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white text-center rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              Check Online Stock & Pricing <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Value Props */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                <Shield className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Authorized & Authentic</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Purchasing through our main site guarantees you receive genuine, factory-calibrated equipment, avoiding counterfeit or refurbished units sold as new.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                <Truck className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Secure Shipping</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  High-end lab equipment requires careful handling. We use specialized freight and courier services to ensure your precision instruments arrive safely.
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-2xl font-bold text-white mb-4">Enterprise & Institutional Buyers</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Need to issue a Purchase Order (PO), require a formal quote, or outfitting an entire laboratory? Our B2B sales team at variabledcpowersupply.com is ready to assist.
            </p>
            <a
              href="https://variabledcpowersupply.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Contact Enterprise Sales <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
