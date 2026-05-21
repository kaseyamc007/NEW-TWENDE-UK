import { ArrowRight, Info, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onJoinClick: () => void;
  onLearnMoreClick: () => void;
}

export default function Hero({ onJoinClick, onLearnMoreClick }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center bg-neutral-950 text-white overflow-hidden pt-28 pb-16"
    >
      {/* Decorative gradient glowing bubbles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      {/* Subtle national flag colored stripe on the background */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-stone-800 to-orange-500 opacity-60" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* National Banner Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 shadow-xl"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold tracking-wider uppercase text-[10px]">Independent & Non-Partisan Union</span>
            </motion.div>

            {/* Main Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
              id="hero-main-title"
            >
              Supporting Zambians in the UK During Life's Most{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-500 font-extrabold">
                Difficult Moments
              </span>
            </motion.h1>

            {/* Clear supportive subhead statement */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Join a caring, community-led bereavement pool that helps Zambian expat families ease financial pressure and safely bring their loved ones home to rest with complete dignity.
            </motion.p>

            {/* Core Message / Mission Box */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="p-4 bg-neutral-900/40 border border-neutral-800/60 rounded-xl max-w-xl mx-auto lg:mx-0 text-xs text-neutral-300 italic text-left relative"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
              <p className="line-clamp-3">
                "During times of mourning, many individuals in our community face the difficult challenge of bringing their loved ones back home due to financial limitations. Twende Zambia UK exists to ensure no family has to face this burden alone."
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              id="hero-actions"
            >
              <button
                onClick={onJoinClick}
                className="px-8 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/30 transition-all flex items-center justify-center gap-2 group hover:scale-[1.02]"
              >
                Join Now 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={onLearnMoreClick}
                className="px-8 py-3.5 rounded-lg border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 text-neutral-200 hover:text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                Learn More
                <Info className="w-5 h-5 opacity-80" />
              </button>
            </motion.div>

          </div>

          {/* Graphical/Illustrative Column */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto max-w-md bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-2xl shadow-2xl"
              id="hero-info-card"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-orange-500 rounded-t-2xl" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Bereavement Benefit Pool</h3>
                  <p className="text-xs text-neutral-400">Twende Zambia UK Community</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2.5 border-b border-neutral-800">
                  <span className="text-xs text-neutral-400 font-medium">Repatriation Support:</span>
                  <span className="text-sm font-bold text-emerald-400">Up to £10,000</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-neutral-800">
                  <span className="text-xs text-neutral-400 font-medium">Pool Contribution Requirement:</span>
                  <span className="text-sm font-bold text-white">£30 per member</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-neutral-800">
                  <span className="text-xs text-neutral-400 font-medium">Target Contributors:</span>
                  <span className="text-sm font-bold text-white">335 active members</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-neutral-800">
                  <span className="text-xs text-neutral-400 font-medium">Qualification Period:</span>
                  <span className="text-sm font-bold text-orange-400">6 Months</span>
                </div>
              </div>

              {/* Graphical Progress Bar pointing to 335 contributors target */}
              <div className="mt-6 pt-2">
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-neutral-400">Current Community Target</span>
                  <span className="text-emerald-400 font-bold">100% Security</span>
                </div>
                <div className="w-full bg-neutral-800 h-3.5 rounded-full overflow-hidden p-0.5 border border-neutral-700">
                  <div 
                    className="h-full bg-emerald-500 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-inner"
                    style={{ width: '85%' }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>Start (335 Target)</span>
                  <span>Active Progress</span>
                </div>
              </div>

              {/* Emergency Hotline Alert */}
              <div className="mt-6 p-3 rounded-lg bg-neutral-950/70 border border-neutral-800/80 text-center">
                <p className="text-[11px] text-neutral-400 font-medium">
                  Have an urgent claim or question? Speak directly to our support desk:
                </p>
                <a 
                  href="tel:+447376575093" 
                  className="inline-block mt-1 font-bold text-white hover:text-orange-400 transition-colors text-sm font-mono"
                >
                  +44 7376 575093
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
