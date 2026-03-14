"use client";
import Link from 'next/link';

import { motion } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Applications() {
  

  const industries = [
    {
      id: "rf-communications",
      title: "RF & Wireless Communications",
      icon: "📡",
      painPoint: "Radio frequency circuits and transceurs are extremely sensitive to power supply noise. Even millivolts of ripple can pollute the test signal and lead to false readings.",
      solution: "We recommend our premium Linear DC Power Supplies. With ripple and noise specifications below 0.35mVrms, they provide the ultra-clean power necessary for testing sensitive analog and RF components without introducing interference.",
      keyword: "low noise power supply for RF testing",
      recommendation: {
        name: "Premium Linear Series",
        specs: "30V / 3A 鈥?<0.35mVrms Ripple",
        link: "https://variabledcpowersupply.com"
      }
    },
    {
      id: "automotive-ev",
      title: "Automotive Electronics & EV",
      icon: "🚗",
      painPoint: "Testing automotive components requires simulating engine cranking profiles (voltage drops) and handling high-power demands for EV battery charging and motor drives.",
      solution: "Our High-Power Autoranging DC Power Supplies are ideal. They feature built-in arbitrary waveform generators (List mode) to simulate automotive voltage profiles, and their autoranging capability provides maximum power across a wide range of voltage and current combinations.",
      keyword: "battery simulation power supply",
      recommendation: {
        name: "Advanced Switching Series",
        specs: "60V / 10A 鈥?Autoranging 鈥?List Mode",
        link: "https://variabledcpowersupply.com"
      }
    },
    {
      id: "semiconductor",
      title: "Semiconductor Characterization",
      icon: "🔬",
      painPoint: "Analyzing the I-V characteristics of diodes, transistors, and ICs requires extremely precise voltage sourcing and the ability to measure micro-ampere currents accurately.",
      solution: "Look for our High-Resolution Programmable Supplies. With 1mV / 0.1mA readback resolution and remote sensing capabilities (to compensate for voltage drops in test leads), they ensure the voltage at the Device Under Test (DUT) is exactly what you programmed.",
      keyword: "precision dc power supply for semiconductor",
      recommendation: {
        name: "High-Precision Programmable Series",
        specs: "Remote Sensing 鈥?0.1mA Readback",
        link: "https://variabledcpowersupply.com"
      }
    },
    {
      id: "ate-systems",
      title: "Automated Test Equipment (ATE)",
      icon: "⚙️",
      painPoint: "Production lines and automated test racks require power supplies that can be seamlessly integrated, remotely controlled, and fit into standard 19-inch racks without taking up too much space.",
      solution: "Our High-Density Programmable DC Power Supplies are designed for ATE. They support standard SCPI commands over LAN (LXI), USB, and GPIB interfaces, and offer high power density (e.g., 1.5kW in a 1U half-rack form factor).",
      keyword: "programmable dc power supply for ATE",
      recommendation: {
        name: "High-Density System Power",
        specs: "1.5kW 鈥?1U Half-Rack 鈥?LXI/LAN",
        link: "https://variabledcpowersupply.com"
      }
    }
  ];

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
            Lab DC Power Supply Applications
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From automated testing equipment (ATE) systems to sensitive RF testing, discover how high-precision <strong>variable</strong> and <strong>programmable</strong> units solve specific challenges across various engineering fields.
          </p>
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
