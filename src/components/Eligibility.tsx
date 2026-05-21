import { useState } from 'react';
import { HelpCircle, CheckCircle, AlertTriangle, ShieldCheck, RefreshCw } from 'lucide-react';

export default function Eligibility() {
  const [ukResident, setUkResident] = useState<boolean | null>(null);
  const [zambianOrigin, setZambianOrigin] = useState<boolean | null>(null);
  const [willingToContribute, setWillingToContribute] = useState<boolean | null>(null);
  const [sixMonthsPass, setSixMonthsPass] = useState<boolean | null>(null);

  const resetQuiz = () => {
    setUkResident(null);
    setZambianOrigin(null);
    setWillingToContribute(null);
    setSixMonthsPass(null);
  };

  const getStatus = () => {
    if (ukResident === false) {
      return {
        status: 'ineligible',
        title: 'Outside UK Jurisdiction',
        message: 'Regrettably, Twende Zambia UK is designed specifically for individuals permanently residing in the United Kingdom. We cannot cover relatives living in Zambia or other external countries.',
        recommend: 'Please refer to local community organizations within your resident country.'
      };
    }
    if (zambianOrigin === false) {
      return {
        status: 'ineligible',
        title: 'Zambian Link Required',
        message: 'Membership requires Zambian origin, heritage, or direct alliance (such as a legal spouse of a Zambian national). We cannot accept general registrants with no links.',
        recommend: 'If your spouse is Zambian, you can still register as a dependent/member.'
      };
    }
    if (willingToContribute === false) {
      return {
        status: 'ineligible',
        title: 'Communal Accord Required',
        message: 'The model relies entirely on reciprocity. Members must commit to pay the £30 contribution when bereavement hits another member. It is a shared covenant.',
        recommend: 'We require active agreement to the communal fund guidelines to register.'
      };
    }

    if (ukResident === true && zambianOrigin === true && willingToContribute === true) {
      if (sixMonthsPass === false) {
        return {
          status: 'probation',
          title: 'Immediate Registrant (Probation Period)',
          message: 'You qualify to register! However, please note you will be in the standard 6-month qualification tier. If you register today, you will be fully eligible for the £10,000 bereavement claims after 6 consecutive months.',
          recommend: 'We advise registering as early as possible to start nesting your coverage term.'
        };
      }
      if (sixMonthsPass === true) {
        return {
          status: 'eligible',
          title: 'Fully Eligible Member',
          message: 'Excellent! You fully meet all the criteria to register and access immediate and long-term protection, provided you maintain active subscription status.',
          recommend: 'Click "Join Now" at the top of the page to submit your application details.'
        };
      }
    }

    return null;
  };

  const result = getStatus();

  return (
    <section id="eligibility" className="py-20 sm:py-24 bg-white text-neutral-800 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Coverage Guidelines
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 mb-4" id="eligibility-title">
            Who Qualifies For Assistance?
          </h2>
          <p className="text-base text-neutral-600 font-medium leading-relaxed">
            Twende Zambia UK operates under clear, fair guidelines to protect the integrity of the communal fund. Review our eligibility rules below or test your suitability using our interactive self-check.
          </p>
        </div>

        {/* Content columns */}
        <div className="grid lg:grid-cols-12 gap-12 items-start" id="eligibility-grid">
          
          {/* Rules Details list */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Standard Compliance Criteria
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex gap-4">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Active Paid Subscriptions</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    To raise any claim, your annual membership dues (£10/year for Adults, £5/year for Children) must be current and fully settled without outstanding arrears.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex gap-4">
                <div className="p-2 bg-amber-50 text-amber-500 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">6-Month Probation Rule</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    Coverage for the £10,000 repatriation payout is subject to a 6-month qualification period following your registration date. This prevents accidental bad-faith registrations during critical illnesses.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex gap-4">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Communal Callout Contribution</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    Members must consistently pay the £30 contribution each time another member experiences a bereavement. Failure to make contributions invalidates your own coverage claims.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex gap-4">
                <div className="p-2 bg-neutral-100 text-neutral-700 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Verification Guidelines</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    All support payouts are dispatched directly to the nominated legal beneficiary registered in our records. Verification requires presenting a certified UK death registry certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quiz Self Checker container */}
          <div className="lg:col-span-6 bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span>Eligibility Wizard</span>
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Check if you or your dependents qualify for the Twende Zambia coverage pool of up to £10,000.
            </p>

            {/* Step-by-step conditional questions */}
            <div className="space-y-5">
              
              {/* Question 1 */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-neutral-300 font-semibold flex items-center gap-1.5">
                  <span className="text-xs bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded-md font-mono">Q1</span>
                  Do you permanently reside in the United Kingdom?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => { setUkResident(true); }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      ukResident === true ? 'bg-emerald-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                    }`}
                  >
                    Yes, in UK
                  </button>
                  <button
                    onClick={() => { setUkResident(false); }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      ukResident === false ? 'bg-orange-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                    }`}
                  >
                    No, elsewhere
                  </button>
                </div>
              </div>

              {/* Question 2 */}
              {ukResident === true && (
                <div className="space-y-2 border-t border-neutral-800 pt-4">
                  <p className="text-xs sm:text-sm text-neutral-300 font-semibold flex items-center gap-1.5">
                    <span className="text-xs bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded-md font-mono">Q2</span>
                    Are you of Zambian origin, heritage, or married to a Zambian?
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => { setZambianOrigin(true); }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        zambianOrigin === true ? 'bg-emerald-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                      }`}
                    >
                      Yes, have Zambian link
                    </button>
                    <button
                      onClick={() => { setZambianOrigin(false); }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        zambianOrigin === false ? 'bg-orange-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                      }`}
                    >
                      No connection
                    </button>
                  </div>
                </div>
              )}

              {/* Question 3 */}
              {zambianOrigin === true && ukResident === true && (
                <div className="space-y-2 border-t border-neutral-800 pt-4">
                  <p className="text-xs sm:text-sm text-neutral-300 font-semibold flex items-center gap-1.5">
                    <span className="text-xs bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded-md font-mono">Q3</span>
                    Are you willing to contribute £30 into the pool when bereavement strikes another member?
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => { setWillingToContribute(true); }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        willingToContribute === true ? 'bg-emerald-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                      }`}
                    >
                      Yes, commit to contribute
                    </button>
                    <button
                      onClick={() => { setWillingToContribute(false); }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        willingToContribute === false ? 'bg-orange-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                      }`}
                    >
                      Cannot commit £30
                    </button>
                  </div>
                </div>
              )}

              {/* Question 4 */}
              {willingToContribute === true && zambianOrigin === true && ukResident === true && (
                <div className="space-y-2 border-t border-neutral-800 pt-4">
                  <p className="text-xs sm:text-sm text-neutral-300 font-semibold flex items-center gap-1.5">
                    <span className="text-xs bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded-md font-mono">Q4</span>
                    Have you been an active registered member for at least 6 months already?
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => { setSixMonthsPass(true); }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        sixMonthsPass === true ? 'bg-emerald-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                      }`}
                    >
                      Yes, already registered/6+ months
                    </button>
                    <button
                      onClick={() => { setSixMonthsPass(false); }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        sixMonthsPass === false ? 'bg-emerald-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                      }`}
                    >
                      No, registering now / under 6 months
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Results Alert */}
            {result && (
              <div className="mt-8 p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2.5">
                <div className="flex items-center gap-2">
                  {result.status === 'eligible' && (
                    <span className="text-emerald-400 font-bold text-xs bg-emerald-950/80 px-2 py-1 rounded-md border border-emerald-900">
                      ✓ Complete Match
                    </span>
                  )}
                  {result.status === 'probation' && (
                    <span className="text-amber-400 font-bold text-xs bg-amber-950/80 px-2 py-1 rounded-md border border-amber-900">
                      ⚠ Waiting Tier Enforced
                    </span>
                  )}
                  {result.status === 'ineligible' && (
                    <span className="text-red-400 font-bold text-xs bg-red-950/80 px-2 py-1 rounded-md border border-red-900">
                      ✕ Ineligible
                    </span>
                  )}
                  <h4 className="font-extrabold text-sm text-white leading-tight">
                    {result.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {result.message}
                </p>
                <p className="text-xs text-emerald-400 font-bold italic">
                  Advice: {result.recommend}
                </p>
                <button
                  onClick={resetQuiz}
                  className="mt-2 text-xs font-bold text-neutral-400 hover:text-white flex items-center gap-1.5 select-none transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Start over
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
