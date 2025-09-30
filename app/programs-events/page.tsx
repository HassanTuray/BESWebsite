// app/programs-events/page.tsx
import Slideshow from "../components/slideshow";
import Reveal from "../components/reveal";
import * as page from "./ProgramEventsConstants";
import Card from "../components/card";
import GlowCard from "../components/glow-card";

const proEduImages  = ["/slides/beslogo.png", "/slides/nsbe-logo.png", "/slides/temp-slideshow-2.jpg"];
const companyImages = ["/slides/beslogo.png", "/slides/nsbe-logo.png", "/slides/temp-slideshow-2.jpg"];
const socialsImages = ["/slides/beslogo.png", "/slides/nsbe-logo.png", "/slides/temp-slideshow-2.jpg"];


export default function ProgramsEventsPage() {

  return (
    
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* === CARD 2 — yellow glow + reveal === */}
      <div className="space-y-10">
        <Reveal from="up" delay={100}>
          <div className="relative">
            <GlowCard
              color = {{r:100 , g:100 , b: 100}}
              opacity = {0.75}
              cardWrapper="relative z-10 h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-full shadow-xl shadow-black/20"
            >
              <span aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/10" />
              <div className="grid h-full grid-cols-2">
                <div className="pr-6 py-3 overflow-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold">{page.companyVisitsTitleText}</h2>
                  <p className="mt-3 text-white/80 whitespace-pre-line">
                    {page.companyVisitsText}
                  </p>
                </div>
                <div className="pl-6 py-3 h-full">
                  <Slideshow
                    images={companyImages}
                    alt="Company visit photos"
                    interval={3500}
                    className="h-full w-full rounded-2xl ring-1 ring-white/10"
                  />
                </div>
              </div>
            </GlowCard>
          </div>
        </Reveal>

      
        {/* Professional development card */}
        <Reveal from="up" delay={0}>
          <div className="relative">
              <GlowCard
                color = {{r: 100, g: 100, b:100}}
                opacity = {0.75}
                cardWrapper="relative z-10 h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-full shadow-xl shadow-black/20"
              >
                <span aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/10"/>
                <div className="grid h-full grid-cols-2">
                  <div className="pr-6 py-3 overflow-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                      {page.professionalDevelopmentTitleText}
                    </h2>
                    <p className="mt-3 text-white/80 whitespace-pre-line">
                      {page.professionalDevelopmentText}
                    </p>
                  </div>
                  <div className="pl-6 py-3 h-full">
                    <Slideshow
                      images={proEduImages}
                      alt="Professional & Education photos"
                      className="h-full w-full rounded-2xl ring-1 ring-white/10"
                    />
                  </div>
                </div>
              </GlowCard>
          </div>
        </Reveal>

        {/* Socials and Mixers card*/}
        <Reveal from="up" delay={100}>
          <div className="relative">
            <GlowCard 
              color = {{r:244, g:63, b:94}}
              opacity={0.75}
              cardWrapper="relative z-10 h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-full shadow-xl shadow-black/20"
            >
              <span aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/10" />
              <div className="grid h-full grid-cols-2">
                <div className="pr-6 py-3 overflow-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold">{page.socialsAndMixersTitleText}</h2>
                  <p className="mt-3 text-white/80 whitespace-pre-line">
                    {page.socialsAndMixersText}
                  </p>
                </div>
                <div className="pl-6 py-3 h-full">
                  <Slideshow
                    images={socialsImages}
                    alt="Social events photos"
                    interval={3000}
                    className="h-full w-full rounded-2xl ring-1 ring-white/10"
                  />
                </div>
              </div>
            </GlowCard>
          </div>
        </Reveal>

        {/* Outreach card*/}
        <Reveal from="up" delay={100}>
          <div className="relative">
            <GlowCard
              color={{r:227, g:197, b: 0}}
              opacity={0.75}
              cardWrapper="relative z-10 h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-full shadow-xl shadow-black/20"
            >
              <span aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/10" />
                <div className="grid h-full grid-cols-2">
                  <div className="pr-6 py-3 overflow-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold">{page.outreachTitleText}</h2>
                    <p className="mt-3 text-white/80 whitespace-pre-line">
                      {page.outreachText}
                    </p>
                  </div>
                  <div className="pl-6 py-3 h-full">
                    <Slideshow
                      images={companyImages}
                      alt="Company visit photos"
                      interval={3500}
                      className="h-full w-full rounded-2xl ring-1 ring-white/10"
                    />
                  </div>
                </div>
            </GlowCard>   
          </div>
        </Reveal>

        <section className="mt-20">
            <h2 className="text-center text-3xl font-bold mb-6">Events Calendar</h2>

            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl shadow-black/20">
                <iframe
                // Replace with your Calendar ID: Settings → Integrate calendar → Calendar ID
                src={
                    "https://calendar.google.com/calendar/embed?" +
                    "showTitle=0&showTabs=0&showPrint=0&showCalendars=0&showTz=0&wkst=1&mode=MONTH&" +
                    "ctz=America/New_York&bgcolor=%23000000&" +
                    "src=" + encodeURIComponent("your_calendar_id@group.calendar.google.com")
                }
                className="w-full h-[700px] bg-black"
                style={{ border: 0 }}
                loading="lazy"
                title="Club Events Calendar"
                />
            </div>

            <p className="mt-3 text-center text-sm text-white/60">
                Replace <code>your_calendar_id@group.calendar.google.com</code> with your club’s Calendar ID and make the calendar public.
            </p>
        </section>
      </div>
    </section>
  );
}
