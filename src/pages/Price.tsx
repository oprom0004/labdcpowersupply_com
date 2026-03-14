import { motion } from 'motion/react';
import { Check, ExternalLink } from 'lucide-react';
import FAQSection from '../components/FAQSection';

export default function Price() {
  const priceFaqs = [
    {
      question: "Why are high-precision linear power supplies more expensive than switching models?",
      answer: "Linear power supplies use large, heavy transformers and heat sinks to provide ultra-clean, noise-free DC power. The cost of these physical components (copper and aluminum) and the engineering required to achieve micro-volt ripple specifications make them significantly more expensive than compact, high-frequency switching supplies."
    },
    {
      question: "Are there hidden costs when buying lab power supplies?",
      answer: "When budgeting, consider the total cost of ownership (TCO). While the base unit has a price, you may also need to budget for: <strong>NIST-traceable calibration certificates</strong>, specialized test leads/cables, rack-mount kits, and advanced software licenses for automated testing or data logging."
    },
    {
      question: "Do you support B2B bulk pricing or academic discounts?",
      answer: "Yes. Through our main portal, we frequently work with universities, research institutions, and enterprise procurement teams to offer volume discounts, tax-exempt purchasing, and specialized academic pricing on multi-unit orders."
    },
    {
      question: "Is it worth investing in a programmable model if I only need basic power?",
      answer: "Even for basic tasks, a programmable supply (with USB/LAN) is a smart long-term investment. As your testing needs grow, the ability to automate voltage sweeps, log current draw over time, or integrate the supply into a larger test rack will save countless hours of manual labor, easily justifying the initial price difference."
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
            Laboratory DC Power Supply Pricing
          </h1>
          <p className="text-lg text-slate-600">
            Mid-to-high-end laboratory power supplies are investments in precision. Understand the pricing tiers and what drives the cost of premium equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tier 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Mid-Range Lab</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$500 - $1,500</span>
            </div>
            <p className="text-slate-600 mb-8 text-sm h-16">
              Ideal for general R&D, education, and standard electronic testing requiring reliable, clean power.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Linear & Advanced Switching topologies",
                "Basic programmability (USB/RS232)",
                "Standard ripple & noise specs (<3mVrms)",
                "Single or dual output channels"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-brand-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tier 2 - Highlighted */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-8 flex flex-col relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">High-End Precision</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$1,500 - $5,000</span>
            </div>
            <p className="text-slate-400 mb-8 text-sm h-16">
              For critical applications, semiconductor testing, and automated test equipment (ATE) systems.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Ultra-low noise linear designs (<1mVrms)",
                "High-resolution readback (1mV/0.1mA)",
                "Full LAN/LXI, GPIB, USB interfaces",
                "Advanced arbitrary waveform generation",
                "Multi-channel isolated outputs"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-brand-400 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://variabledcpowersupply.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-brand-500 hover:bg-brand-400 text-white text-center rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              Check Current Prices <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Tier 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Specialized / High Power</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$5,000+</span>
            </div>
            <p className="text-slate-600 mb-8 text-sm h-16">
              High-voltage, high-current, or highly specialized source measure units (SMUs) for advanced research.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "High power density (kW range)",
                "Source Measure Unit (SMU) capabilities",
                "Battery simulation features",
                "Regenerative power capabilities",
                "Custom rack-mount systems"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-brand-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Looking for a specific model or custom quote?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our main platform offers a comprehensive catalog of mid-to-high-end variable DC power supplies with real-time pricing and availability.
          </p>
          <a
            href="https://variabledcpowersupply.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Check Online Stock & Pricing <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
