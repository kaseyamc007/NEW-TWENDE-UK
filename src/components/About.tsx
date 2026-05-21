import { useState } from 'react';
import { ShieldCheck, Heart, Sparkles, Building, ChevronRight, HelpCircle } from 'lucide-react';

export default function About() {
  const [cargoService, setCargoService] = useState(4500);
  const [directorFees, setDirectorFees] = useState(2500);
  const [flightCost, setFlightCost] = useState(1500);
  const [familyFlights, setFamilyFlights] = useState(1500);

  const totalEstimate = cargoService + directorFees + flightCost + familyFlights;

  return (
    <section id="about" className="py-20 sm:py-24 bg-white text-neutral-800 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900" id="about-heading">
            Independent. Non-Partisan. Commited.
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-medium leading-relaxed">
            Twende Zambia UK is a non-profit, independent, and non-partisan community organization registered and operating in the United Kingdom. We exist purely to offer mutual compassionate financial support during unexpected bereavement.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" id="about-story-grid">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Standing Together in Times of Mourning
            </h3>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              The departure of a loved one is always a devastating trauma. For Zambians living in the diaspora across the UK, this pain is often coupled with the immediate, massive financial challenge of transporting the deceased back to their home soil in Zambia.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Relying on sudden public crowdsourcing panels or bank debt adds stress to families at their lowest moments. Our mission is to transform emergency response into a structured, highly dignified, reliable process.
            </p>

            {/* Cultural highlights list */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm">Strictly Regulated</h4>
                  <p className="text-xs text-neutral-500">Managed in the UK with ultimate fund transparency.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm">Compassionate Union</h4>
                  <p className="text-xs text-neutral-500">Every member contributes equally to secure lives.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-neutral-100 text-neutral-700 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm">Non-Partisan</h4>
                  <p className="text-xs text-neutral-500">Open to all Zambians regardless of state politics or tribe.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm">Pure Solidarity</h4>
                  <p className="text-xs text-neutral-500">No profit motives. All funds belong entirely to active members.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Container */}
          <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h4 className="text-lg font-bold text-neutral-950 mb-1 flex items-center gap-2">
              <span>Diaspora Repatriation Cost Estimator</span>
            </h4>
            <p className="text-xs text-neutral-500 mb-6">
              Estimate the unexpected costs families pay alone, compared to being protected together.
            </p>

            <div className="space-y-4">
              {/* Cost slider 1 */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-neutral-700">Deceased Body Cargo Flight Transfer (UK to Lusaka)</span>
                  <span className="text-neutral-950">£{cargoService.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="3000" 
                  max="6000" 
                  step="250"
                  value={cargoService}
                  onChange={(e) => setCargoService(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Cost slider 2 */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-neutral-700">UK Funeral Director & Embalming Charges</span>
                  <span className="text-neutral-950">£{directorFees.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1500" 
                  max="4500" 
                  step="250"
                  value={directorFees}
                  onChange={(e) => setDirectorFees(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Cost slider 3 */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-neutral-700">Heavy Duty Casket & Consulate Paperwork Fees</span>
                  <span className="text-neutral-950">£{flightCost.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="800" 
                  max="2500" 
                  step="100"
                  value={flightCost}
                  onChange={(e) => setFlightCost(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Cost slider 4 */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-neutral-700">Emergency Family Flights and Local Zambia Ground Handling</span>
                  <span className="text-neutral-950">£{familyFlights.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="3500" 
                  step="250"
                  value={familyFlights}
                  onChange={(e) => setFamilyFlights(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Calculation output comparisons */}
            <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-100 flex justify-between items-center">
              <div>
                <span className="block text-[11px] font-semibold text-orange-800 uppercase tracking-widest">
                  Private Costs to Family
                </span>
                <span className="text-2xl font-black text-orange-950 block">
                  £{totalEstimate.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[11px] font-semibold text-emerald-800 uppercase tracking-widest">
                  Your Association Cost
                </span>
                <span className="text-2xl font-black text-emerald-600 block">
                  £10/yr + £30/case
                </span>
              </div>
            </div>

            <p className="text-[10px] text-zinc-500 mt-3 text-center italic">
              *The values are estimated national UK-to-Zambia repatriation costs. Joining Twende Zambia UK covers up to £10,000 of this sudden burden flat out.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
