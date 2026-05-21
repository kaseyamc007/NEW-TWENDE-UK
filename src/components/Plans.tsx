import { Check, ShieldCheck, HeartPulse, User } from 'lucide-react';
import { PLANS_DATA } from '../data';

interface PlansProps {
  onJoinClick: () => void;
}

export default function Plans({ onJoinClick }: PlansProps) {
  // Let's pair icons manually based on the plan ID
  const getPlanIcon = (id: string) => {
    switch (id) {
      case 'plan-adult':
        return <User className="w-6 h-6 text-emerald-600" />;
      case 'plan-child':
        return <HeartPulse className="w-6 h-6 text-orange-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="plans" className="py-20 sm:py-24 bg-neutral-50 text-neutral-800 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Simple Contributions
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 mb-4" id="plans-heading">
            Caring Community Plans
          </h2>
          <p className="text-base text-neutral-600 font-medium leading-relaxed">
            Choose a plan that matches your household structure. Our annual subscription is deliberately priced low purely to maintain operations, with bereavement funds pooled upon callout.
          </p>
        </div>

        {/* Triple grid cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch" id="plans-grid">
          {PLANS_DATA.map((plan) => {
            const isDark = plan.id === 'plan-contrib';
            
            return (
              <div
                key={plan.id}
                className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] relative ${
                  isDark 
                    ? 'bg-neutral-900 text-white border-neutral-800 shadow-lg' 
                    : 'bg-white border-neutral-200/80 shadow-xs'
                }`}
              >
                {/* Visual Accent header line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl ${
                  plan.id === 'plan-adult' ? 'bg-emerald-600' : plan.id === 'plan-child' ? 'bg-orange-500' : 'bg-emerald-400'
                }`} />

                <div>
                  {/* Card Title & Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-sm font-semibold tracking-wider uppercase ${isDark ? 'text-amber-400' : 'text-neutral-500'}`}>
                      {plan.name}
                    </span>
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                      {getPlanIcon(plan.id)}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className={`text-4xl font-black ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      £{plan.price}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Feature items */}
                  <div className="space-y-4 mb-8">
                    <span className={`block text-xs font-bold uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      What's Included:
                    </span>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs sm:text-sm items-start">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                          <span className={isDark ? 'text-zinc-200' : 'text-neutral-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to action */}
                <button
                  onClick={onJoinClick}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-tight transition-all duration-200 text-center uppercase ${
                    isDark 
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md' 
                      : plan.id === 'plan-child'
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-xs'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Why Join highlight card */}
        <div className="mt-16 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 sm:p-8 text-white border border-neutral-800 shadow-xl relative overflow-hidden" id="why-join-highlight">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="grid md:grid-cols-4 gap-6 items-center">
            
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-neutral-800 pb-4 md:pb-0 md:pr-6">
              <span className="block text-3xl font-black text-amber-500 mb-1">0% Premium</span>
              <span className="text-xs text-neutral-400 font-medium">No middle-men fees. 100% of death contributions are held strictly for families.</span>
            </div>

            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-neutral-800 pb-4 md:pb-0 md:pr-6 md:pl-4">
              <span className="block text-3xl font-black text-emerald-400 mb-1">10k Limit</span>
              <span className="text-xs text-neutral-400 font-medium">Specifically mapped limit designed to secure flight and ground directors.</span>
            </div>

            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-neutral-800 pb-4 md:pb-0 md:pr-6 md:pl-4">
              <span className="block text-3xl font-black text-emerald-400 mb-1">2026 Ready</span>
              <span className="text-xs text-neutral-400 font-medium">Fully optimized digital framework for fast online payout approvals in 48h.</span>
            </div>

            <div className="md:col-span-1 md:pl-4">
              <span className="block text-3xl font-black text-[#fd7e14] mb-1">UK Wide</span>
              <span className="text-xs text-neutral-400 font-medium">Covers Zambians and spouses anywhere in England, Scotland, Wales, and NI.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
