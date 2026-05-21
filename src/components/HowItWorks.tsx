import { useState } from 'react';
import { UserPlus, Coins, Users, HeartHandshake, ChevronRight, Check } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Join & Register',
      shortDesc: 'Become an official registered member of Twende Zambia UK.',
      icon: UserPlus,
      color: 'emerald',
      detail: 'Register yourself as an Adult member for £10/year or kids for £5/year. Our verification is straightforward to ensure we onboard real members of the UK-Zambian diaspora who are legally residing in the United Kingdom.'
    },
    {
      title: 'Commit the Base Contribution',
      shortDesc: 'Contribute £30 to the communal bereavement fund.',
      icon: Coins,
      color: 'emerald',
      detail: 'When a member goes through a loss, we request each registered member to contribute £30 into the secure mutual pool. All contributions are securely held and used strictly for designated funeral and flight repatriation payouts.'
    },
    {
      title: 'Power of 335 contributors',
      shortDesc: 'Pooled funds combine to reach approximately £10,000.',
      icon: Users,
      color: 'orange',
      detail: 'With our targeted base of 335+ registered contributors, each individual contribution of £30 instantly generates a massive lump sum of around £10,000. Under this structure, nobody is pressured alone, and funds are secure.'
    },
    {
      title: 'Claim Your Compassionate Support',
      shortDesc: 'Registered, eligible families receive the payout.',
      icon: HeartHandshake,
      color: 'emerald',
      detail: 'Upon loss of a registered member (who has crossed the standard 6-month qualification period), the committee releases up to £10,000 within 48 to 72 hours of receiving simple UK death certificates to settle repatriation logistics.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-neutral-900 text-white scroll-mt-10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(25,135,84,0.04)_0,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/40 border border-orange-900 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white mb-4">
            How The Communal Pool Works
          </h2>
          <p className="text-base text-neutral-400 font-medium leading-relaxed">
            Twende Zambia UK operates on a simple, transparent model of reciprocal community assurance. Click on the steps below to explore our core framework.
          </p>
        </div>

        {/* Process Map Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start" id="how-its-done-grid">
          
          {/* Left Column: Interactive Nav List */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all flex items-start gap-4 ${
                    isActive 
                      ? 'bg-neutral-800 border-emerald-500 shadow-lg relative' 
                      : 'bg-neutral-950/50 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60'
                  }`}
                  id={`step-trigger-${idx}`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    isActive 
                      ? 'bg-emerald-600 text-white shadow-md' 
                      : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className={`text-[10px] font-bold tracking-wider uppercase ${
                        isActive ? 'text-emerald-400' : 'text-neutral-500'
                      }`}>
                        Step 0{idx + 1}
                      </span>
                      {isActive && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </div>
                    <h3 className={`font-bold text-base mt-0.5 tracking-tight ${
                      isActive ? 'text-white' : 'text-neutral-300'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Explainer Deck */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-6 sm:p-8 rounded-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
              <span className="text-3xl font-black text-emerald-500/30 font-mono">0{activeStep + 1}</span>
              <h4 className="text-lg font-bold text-white tracking-tight">
                {steps[activeStep].title} – Detailed Guide
              </h4>
            </div>

            <div className="space-y-6 text-neutral-300">
              <p className="text-sm sm:text-base leading-relaxed">
                {steps[activeStep].detail}
              </p>

              {/* Math/Simulation Block for Step 3 helper */}
              {activeStep === 2 && (
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs text-neutral-400 space-y-3">
                  <div className="flex justify-between font-bold text-emerald-400 border-b border-emerald-900/30 pb-2">
                    <span>Pool Parameter</span>
                    <span>Values</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Target Members</span>
                    <span>335 Registered</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Individual contribution per call</span>
                    <span>£30 per case</span>
                  </div>
                  <div className="flex justify-between border-t border-emerald-900/30 pt-2 text-white font-bold text-sm">
                    <span>Total Pool Payout Capacity</span>
                    <span className="text-orange-400">£10,050</span>
                  </div>
                </div>
              )}

              {/* Step 4 Helper Claim flow chart */}
              {activeStep === 3 && (
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                    <span className="block font-bold text-emerald-400 mb-1">Required Papers:</span>
                    <ul className="space-y-1 text-neutral-400 list-disc pl-3.5">
                      <li>UK death registration proof</li>
                      <li>Zambian passport or lineage</li>
                      <li>Payment dues receipt</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                    <span className="block font-bold text-orange-400 mb-1">Protection Limit:</span>
                    <ul className="space-y-1 text-neutral-400 list-disc pl-3.5">
                      <li>Maximum limit per case: £10,000</li>
                      <li>Subject to 6-months waiting tier</li>
                      <li>No cash advances prior to verification</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-neutral-500 font-medium">
                  Have any customized questions? See all rules or consult the FAQ desk.
                </span>
                <a 
                  href="#faqs" 
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 shrink-0"
                >
                  Read FAQs <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
