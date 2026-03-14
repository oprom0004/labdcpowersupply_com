"use client";
import Link from 'next/link';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, ShieldCheck, Activity, Settings2, Zap, ChevronDown } from 'lucide-react';

import FAQSection from '@/components/FAQSection';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);



  const homeFaqs = [
    {
      question: "What makes a DC lab power supply different from standard adapters?",
      answer: "A <strong>DC lab power supply</strong> (often called a <strong>DC bench power supply</strong>) is designed for high precision, stability, and reliability in an electronics lab. Unlike standard adapters, lab-grade units feature ultra-low ripple and noise (PARD), high-resolution voltage and current programming, and advanced protection mechanisms to safeguard sensitive components."
    },
    {
      question: "Why should I choose a programmable DC power supply?",
      answer: "<strong>Programmable DC power supplies</strong> allow you to automate testing sequences, log data, and control the unit remotely via interfaces like USB, LAN (LXI), RS-232, or GPIB using SCPI commands. This is essential for repetitive testing, burn-in processes, and integration into larger Automated Test Equipment (ATE) systems."
    },
    {
      question: "What industries typically use your high-end power supplies?",
      answer: "Our mid-to-high-end power supplies are widely used in semiconductor testing, aerospace and defense, automotive electronics (including EV battery simulation), electrochemical research, and academic laboratories where precision and reliability are non-negotiable."
    },
    {
      question: "How do I know which power supply is right for my application?",
      answer: "Choosing the right supply depends on your required voltage/current range, acceptable ripple noise, response time, and programming needs. We recommend reading our <a href='/how-to-choose' class='text-brand-600 hover:underline'>Complete Guide to Choosing a Lab Power Supply</a> to understand the key specifications that matter for your specific use case."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Industrial Luxury / Skeuomorphism 2.0 */}
      <section ref={heroRef} className="relative pt-24 pb-32 overflow-hidden bg-[#09090b] min-h-[85vh] flex items-center border-b border-zinc-800">
        {/* Strict Grid Background */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content - Swiss Typography & Data First */}
            <motion.div
              style={{ opacity: opacityText }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-left lg:col-span-7 pr-0 lg:pr-12"
            >
              {/* Micro-label */}
              <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                HIGH-PRECISION SERIES
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter mb-8 leading-[1.05]">
                <span className="font-light text-zinc-400 block mb-2">High-Precision</span>
                <span className="font-bold">Lab DC Power Supply</span>
              </h1>

              {/* Hardcore Specs - Data First */}
              <div className="flex flex-col sm:flex-row gap-6 mb-10 border-l-2 border-amber-500 pl-5">
                <div>
                  <div className="text-[10px] text-zinc-500 font-mono tracking-widest mb-1">MAX RIPPLE & NOISE</div>
                  <div className="text-sm text-zinc-200 font-mono font-medium">&lt; 0.35 mVrms</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-zinc-800"></div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-mono tracking-widest mb-1">READBACK RESOLUTION</div>
                  <div className="text-sm text-zinc-200 font-mono font-medium">1 mV / 0.1 mA</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-zinc-800"></div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-mono tracking-widest mb-1">REMOTE INTERFACE</div>
                  <div className="text-sm text-zinc-200 font-mono font-medium">LXI / GPIB / USB</div>
                </div>
              </div>

              <p className="text-lg text-zinc-400 mb-12 max-w-2xl leading-relaxed font-light">
                The definitive standard for premium test equipment. From ultra-low noise <strong className="text-zinc-200 font-medium">linear supplies</strong> for RF characterization, to high-density <strong className="text-zinc-200 font-medium">programmable units</strong> for automated test racks (ATE).
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://variabledcpowersupply.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-zinc-950 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-amber-400 transition-colors">
                  Check Pricing <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/how-to-choose" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-zinc-300 border border-zinc-700 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-zinc-800 hover:text-white transition-colors">
                  Read Guide
                </Link>
              </div>
            </motion.div>

            {/* Right Visual - Real Product with AR Annotations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0"
            >
              {/* Product Container with Hover Parallax */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-md z-20"
              >
                {/* The Real Product Image */}
                <div className="w-full relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                  <img
                    src="/hero-product.png"
                    alt="eTM-K1560PL+ Programmable DC Power Supply"
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-20"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      e.currentTarget.nextElementSibling?.classList.add('flex');
                    }}
                  />
                </div>

                {/* AR Annotation 1: Display */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute top-[15%] -left-[10%] md:-left-[20%] flex items-center gap-3 z-30"
                >
                  <div className="text-right">
                    <div className="text-amber-500 font-mono text-xs font-bold tracking-wider">6-DIGIT</div>
                    <div className="text-zinc-400 text-[10px] uppercase tracking-widest">TFT Color LCD</div>
                  </div>
                  <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-amber-500/50 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                  </div>
                </motion.div>

                {/* AR Annotation 2: Keypad */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="absolute top-[40%] -right-[10%] md:-right-[20%] flex items-center gap-3 z-30"
                >
                  <div className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-amber-500/50 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-amber-500 font-mono text-xs font-bold tracking-wider">DIRECT ENTRY</div>
                    <div className="text-zinc-400 text-[10px] uppercase tracking-widest">Numeric Keypad</div>
                  </div>
                </motion.div>

                {/* AR Annotation 3: Terminals */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="absolute bottom-[10%] -right-[5%] md:-right-[15%] flex flex-col items-center gap-2 z-30"
                >
                  <div className="h-12 md:h-16 w-px bg-gradient-to-t from-transparent to-amber-500/50 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                  </div>
                  <div className="text-center bg-[#09090b]/80 backdrop-blur-sm px-2 py-1 rounded border border-zinc-800">
                    <div className="text-amber-500 font-mono text-xs font-bold tracking-wider">LOW-NOISE</div>
                    <div className="text-zinc-400 text-[10px] uppercase tracking-widest">Output Terminals</div>
                  </div>
                </motion.div>

              </motion.div>

              {/* Floor Reflection / Shadow */}
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[20px] bg-black/80 blur-[20px] rounded-[100%] z-0"></div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-500"
        >
          <span className="text-[10px] uppercase tracking-widest mb-2 font-semibold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Premium DC Power Supplies?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">When accuracy is non-negotiable, mid-to-high-end laboratory power supplies deliver the stability and control your experiments demand.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                readout: "< 0.35 mVrms",
                title: "Ultra-Low Ripple & Noise",
                desc: "Clean power delivery essential for sensitive analog and digital circuitry testing."
              },
              {
                id: "02",
                readout: "1 mV / 0.1 mA",
                title: "High Resolution & Accuracy",
                desc: "Precise voltage and current programming with micro-volt/micro-amp readback capabilities."
              },
              {
                id: "03",
                readout: "OVP / OCP / OTP",
                title: "Advanced Protection",
                desc: "OVP, OCP, and OTP mechanisms to safeguard your expensive Device Under Test (DUT)."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative p-8 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group overflow-hidden"
              >
                {/* Background Number */}
                <div className="absolute -top-6 -right-4 text-9xl font-bold text-zinc-200 opacity-30 pointer-events-none font-mono tracking-tighter group-hover:text-zinc-300 transition-colors">
                  {feature.id}
                </div>

                {/* Micro-label */}
                <div className="flex items-center gap-2 mb-8 relative z-10">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-500 uppercase">
                    Feature_{feature.id}
                  </span>
                </div>

                {/* Parameter Readout */}
                <div className="mb-6 relative z-10">
                  <div className="inline-block bg-zinc-950 px-4 py-2 rounded-sm border border-zinc-800 shadow-inner">
                    <span className="font-mono text-amber-500 font-bold tracking-tight">
                      {feature.readout}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section (Lightweight) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Engineered for Your Industry</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our DC bench power supplies are trusted across critical sectors where precision and reliability are paramount.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "RF & Communications",
                desc: "Ultra-low noise linear supplies for sensitive transceiver testing.",
                icon: "📡"
              },
              {
                title: "Automotive & EV",
                desc: "High-power autoranging units for battery simulation and motor drives.",
                icon: "🚗"
              },
              {
                title: "Semiconductor",
                desc: "High-resolution readback for precise component characterization.",
                icon: "🔬"
              },
              {
                title: "ATE Systems",
                desc: "Fully programmable units with LAN/LXI and SCPI support.",
                icon: "⚙️"
              }
            ].map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{app.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{app.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{app.desc}</p>
                <Link href="/applications" className="mt-4 inline-flex items-center text-brand-600 text-sm font-medium hover:text-brand-700">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Lab Power Supplies"
        description="Learn more about the fundamentals of precision DC power and how it impacts your testing."
        faqs={homeFaqs}
      />

      {/* Industry Workhorse Section */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Product Image (eTM-2002C) */}
            <div className="relative w-full aspect-[4/3] bg-zinc-50 border border-zinc-200 flex flex-col items-center justify-center p-8 group overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-zinc-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-zinc-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-zinc-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-zinc-300"></div>

              <img
                src="/bestseller-product.png"
                alt="eTM-2002C Adjustable DC Power Supply"
                className="w-full h-auto object-contain drop-shadow-xl relative z-20 transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />
              {/* Local Development Placeholder removed */}

              {/* Specs Overlay */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-zinc-200 px-3 py-2 shadow-sm z-30">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Model</div>
                <div className="font-mono font-bold text-zinc-900">eTM-2002C</div>
              </div>
            </div>

            {/* Right: Technical Specs & Copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2 py-1 bg-zinc-900 text-white text-[10px] font-mono font-bold uppercase tracking-widest">Industry Workhorse</span>
                <span className="px-2 py-1 bg-amber-100 text-amber-900 text-[10px] font-mono font-bold uppercase tracking-widest">Best Seller</span>
              </div>

              <h2 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
                The Definitive Standard for <br />
                <span className="text-zinc-400 font-light">Daily Bench Testing.</span>
              </h2>

              <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                Not every project requires micro-volt precision, but every bench needs unwavering reliability. The eTM-2002C delivers robust, continuous power with an intuitive dual-display interface, making it the most cost-effective workhorse for production lines, repair centers, and educational labs.
              </p>

              {/* Spec Grid */}
              <div className="grid grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
                <div className="bg-white p-6">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">Display</div>
                  <div className="font-mono font-bold text-zinc-900 text-xl">Dual LED</div>
                  <div className="text-xs text-zinc-500 mt-1">V / A / W / R Simultaneous</div>
                </div>
                <div className="bg-white p-6">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">Controls</div>
                  <div className="font-mono font-bold text-zinc-900 text-xl">Coarse & Fine</div>
                  <div className="text-xs text-zinc-500 mt-1">Independent adjustment knobs</div>
                </div>
                <div className="bg-white p-6">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">Protection</div>
                  <div className="font-mono font-bold text-zinc-900 text-xl">OVP / OCP</div>
                  <div className="text-xs text-zinc-500 mt-1">Over-voltage & Over-current</div>
                </div>
                <div className="bg-white p-6">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">Durability</div>
                  <div className="font-mono font-bold text-zinc-900 text-xl">24/7 Rated</div>
                  <div className="text-xs text-zinc-500 mt-1">Intelligent cooling fan</div>
                </div>
              </div>

              <div className="mt-10">
                <button className="flex items-center gap-2 text-sm font-bold text-zinc-900 uppercase tracking-widest hover:text-amber-600 transition-colors group">
                  View Full Specifications
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your lab?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Explore our full catalog of mid-to-high-end variable DC power supplies at our main portal.
          </p>
          <a
            href="https://variabledcpowersupply.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-lg font-medium text-lg hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/30"
          >
            Check Online Stock & Pricing
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
