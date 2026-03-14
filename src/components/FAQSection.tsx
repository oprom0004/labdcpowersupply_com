import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string; // Can contain HTML
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
}

export default function FAQSection({ title = "Frequently Asked Questions", description, faqs }: FAQSectionProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>?/gm, '') // Strip HTML for schema text
      }
    }))
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          {description && <p className="text-lg text-slate-600">{description}</p>}
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                <span className="text-lg pr-6">{faq.question}</span>
                <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </details>
          ))}
        </div>
      </div>
      
      {/* Inject JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </section>
  );
}
