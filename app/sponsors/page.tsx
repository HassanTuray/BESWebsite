import Card from "../components/card";
import Image from "next/image";

const goldSponsors = [
  {src:"/gold-sponsors/Jane_Street_Capital_Logo.svg.png", alt:"Jane Street"}, 
  {src: "/gold-sponsors/Visa_Brandmark_Blue_RGB_2021.svg", alt: "Visa"}, 
  {src: "/gold-sponsors/whiting-turner-logo-vector.svg", alt: "Whiting Turner"}];

  const silverSponsors = [
  { src: "/silver-sponsors/AmgenBlueLogo.svg", alt: "Amgen" },
  { src: "/silver-sponsors/BAE_Systems_logo.svg", alt: "BAE Systems" },
  { src: "/silver-sponsors/Leidos-logo-horz-full-rgb.svg", alt: "Leidos" },
  { src: "/silver-sponsors/WMT-Wordmark-Standard-TrueBlue-RGB.svg", alt: "Walmart" },
];

export default function SponsorsPage() {
  return (
    <section id="#sponsors" className="mx-auto max-w-6xl px-4 py-16">
      {/* Big page title */}
      <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
        Thanks to our Sponsors!
      </h1>
          
      {/* Vertical stack of the three cards */}
      <div className="mt-12 grid min-h-[50dvh] place-items-center">
        <div className="flex flex-col items-center justify-center gap-8">

          {/* GOLD (unchanged) */}
          <Card cardWrapper="inline-block h-52 w-80 md:h-60 md:w-96 rounded-2xl border border-amber-300/50 bg-gradient-to-br from-amber-200/30 via-amber-500/15 to-amber-800/25 p-6 shadow-lg flex items-center justify-center overflow-hidden ">
            <span className="mb-10">
              <h1 className="text-center text-lg font-black leading-tight tracking-tight bg-gradient-to-r from-[#d4af37] via-[#b7950b] to-[#8a6e2f] bg-clip-text text-transparent">
                Gold Tier Sponsors!
              </h1>
            </span>

            <div className="flex text-center">
              {goldSponsors.map((s, i) => (
                <div key={i} className="relative aspect-[3/2] w-24 md:w-32 p-10">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 100px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </Card>
          
          {/* SILVER — more gray */}
          <Card cardWrapper="inline-block h-52 w-80 md:h-60 md:w-96 rounded-2xl border border-zinc-400/60 bg-gradient-to-br from-zinc-300/35 via-zinc-600/20 to-zinc-900/30 p-6 shadow-lg flex items-center justify-center overflow-hidden">
            <span className="mb-10">
             <h1 className="text-center text-lg font-black leading-tight tracking-tight bg-gradient-to-r from-slate-200 via-zinc-400 to-slate-100 bg-clip-text text-transparent">
              Silver Tier Sponsors!
              </h1>
            </span>
            
            <div className="flex text-center">
              {silverSponsors.map((s, i) => (
                <div key={i} className="relative aspect-[3/2] w-24 md:w-32 p-10">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 150px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
