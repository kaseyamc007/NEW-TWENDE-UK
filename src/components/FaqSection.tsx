import { useState } from 'react';
import { FAQItem } from '../types';
import { FAQ_DATA } from '../data';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Costs', 'Eligibility', 'Claims', 'Children', 'Repatriation'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory || 
                            (selectedCategory === 'Claims' && faq.category === 'Claims') ||
                            (selectedCategory === 'Children' && faq.category === 'Children') ||
                            (selectedCategory === 'Repatriation' && faq.category === 'Repatriation');
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 sm:py-24 bg-white text-neutral-800 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Header Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 mb-4" id="faqs-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-neutral-600 font-medium">
            Find answers to common questions about Twende Zambia UK fees, membership rules, payouts, and claims process.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="space-y-4 mb-8" id="faq-filter-area">
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search or ask a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white rounded-xl border border-neutral-200 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
              id="faq-search-input"
            />
          </div>

          {/* Category Pills (horizontal scrollable on mobile) */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? 'bg-emerald-600 text-white shadow-xs' 
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Faq Items List */}
        <div className="space-y-4" id="faq-accordions-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'bg-neutral-50/50 border-neutral-350 shadow-xs' 
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-5 flex justify-between items-center gap-4 group"
                    id={`faq-btn-${faq.id}`}
                  >
                    <span className="font-extrabold text-sm sm:text-base text-neutral-900 group-hover:text-emerald-700 transition-colors">
                      {faq.question}
                    </span>
                    <span className={`p-1 rounded-lg shrink-0 ${
                      isOpen ? 'bg-emerald-50 text-emerald-600' : 'bg-neutral-100 text-neutral-500'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  
                  {/* Dynamic Accordion Body */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 border-t border-neutral-150' : 'max-h-0'
                  }`}>
                    <div className="px-5 sm:px-6 py-5 text-sm leading-relaxed text-zinc-600 bg-white">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-neutral-50 rounded-2xl border border-dashed border-neutral-250">
              <HelpCircle className="w-8 h-8 text-neutral-300 mx-auto mb-2" />
              <p className="text-neutral-500 text-sm font-medium">
                No matching FAQs found for your search.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-3 text-xs bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-lg"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Note pointing to helpdesk */}
        <div className="mt-12 text-center text-xs text-neutral-500">
          Have an unlisted question? Please call our support desk directly at <span className="font-bold text-neutral-800">+44 7376 575093</span> or email us at <span className="font-mono text-neutral-800">info@twendezambia.co.uk</span>.
        </div>

      </div>
    </section>
  );
}
