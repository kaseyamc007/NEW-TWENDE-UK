import { MessageSquare, Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-neutral-50 text-neutral-800 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Real Backing
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 mb-4" id="testimonials-heading">
            Voices From Our Community
          </h2>
          <p className="text-base text-neutral-600 font-medium leading-relaxed">
            Read about how Twende Zambia UK has provided complete peace of mind, reliable payouts, and active support to Zambian households across the country.
          </p>
        </div>

        {/* Testimonials cards grid */}
        <div className="grid md:grid-cols-3 gap-8" id="testimonials-card-grid">
          {TESTIMONIALS_DATA.map((testi) => (
            <div
              key={testi.id}
              className="bg-white border border-neutral-100 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-all relative"
            >
              {/* Giant quote mark back drop */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-neutral-100 -z-5 pointer-events-none" />

              <div>
                {/* Visual stars rating */}
                <div className="flex gap-1 mb-5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-neutral-600 italic text-sm sm:text-base leading-relaxed relative z-10 mb-6 font-medium">
                  "{testi.text}"
                </p>
              </div>

              {/* Profile card details */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 mt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-sm shadow-xs uppercase">
                  {testi.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-950 text-sm">{testi.name}</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                    <span>{testi.location}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300" />
                    <span>Member since {testi.joinedYear}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Callout */}
        <div className="mt-12 bg-emerald-55 font-sans p-6 rounded-2xl text-center border border-emerald-100 bg-emerald-50/50">
          <p className="text-sm font-semibold text-emerald-900 leading-relaxed">
            "Twende Zambia UK operates as a legally governed, non-partisan, independent group register. All bank balances, claims, and payouts are shared transparently with registered members quarterly."
          </p>
        </div>

      </div>
    </section>
  );
}
