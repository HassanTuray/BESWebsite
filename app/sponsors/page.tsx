export default function SponsorsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {/* Big page title */}
      <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
        Thanks to our Sponsors!
      </h1>
          
      {/* Vertical stack of the three cards */}
      <div className="mt-12 grid min-h-[50dvh] place-items-center">
        <div className="flex flex-col items-center justify-center gap-8">
          
          {/* PLATINUM — more teal/blue */}
          <div className="h-52 w-80 md:h-60 md:w-96 rounded-2xl border border-sky-300/60 bg-gradient-to-br from-cyan-200/35 via-sky-500/20 to-blue-900/30 p-6 shadow-lg flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="mb-3 inline-block rounded-full border border-sky-200/60 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide">
                Platinum
              </div>
              <span className="block text-xl font-semibold">Sponsor 3</span>
            </div>
          </div>

          {/* GOLD (unchanged) */}
          <div className="h-52 w-80 md:h-60 md:w-96 rounded-2xl border border-amber-300/50 bg-gradient-to-br from-amber-200/30 via-amber-500/15 to-amber-800/25 p-6 shadow-lg flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="mb-3 inline-block rounded-full border border-amber-200/60 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide">
                Gold
              </div>
              <span className="block text-xl font-semibold">Sponsor 2</span>
            </div>
          </div>

          {/* SILVER — more gray */}
          <div className="h-52 w-80 md:h-60 md:w-96 rounded-2xl border border-zinc-400/60 bg-gradient-to-br from-zinc-300/35 via-zinc-600/20 to-zinc-900/30 p-6 shadow-lg flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="mb-3 inline-block rounded-full border border-zinc-300/50 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide">
                Silver
              </div>
              <span className="block text-xl font-semibold">Sponsor 1</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
