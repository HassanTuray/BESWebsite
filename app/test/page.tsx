// app/programs-events/page.tsx
import Slideshow from "../components/slideshow";
import Reveal from "../components/reveal";
import * as page from "../programs-events/ProgramEventsConstants";
import RotatingTopicsCard, { Topic } from "../components/rotating-topics-card";
import Image from "next/image";

const flyers = ["/flyers/welcome-back-cookout.jpg", "/flyers/terp-tech-path.png"];

// If you prefer, move these strings into ProgramEventsConstants and import them.
const TOPICS: Topic[] = [
  {
    id: "company",
    title: "Company Visits",
    body:
      "Tour partner companies, meet engineers, and learn about internships, new grad roles, and day-in-the-life workflows. Expect Q&A, resume drops, and recruiter time.",
  },
  {
    id: "pro-ed",
    title: "Professional and Educational Development",
    body:
      "Workshops on resumes, interview prep, technical talks, grad school pathways, scholarship info, and peer study sessions to level up your skills.",
  },
  {
    id: "socials",
    title: "Socials + Mixers",
    body:
      "Game nights, mixers, and collaboration events with other orgs. Build community, unwind together, and grow your network in a low-pressure setting.",
  },
  {
    id: "outreach",
    title: "Community Outreach",
    body:
      "Mentor K-12 students, volunteer at STEM fairs, and support local initiatives. Give back while representing the BES mission on and off campus.",
  },
];

export default function ProgramsEventsPage() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-6xl border rounded-2xl border-white/10 bg-white/5 min-w-[30rem]">
        <div className="w-full">
          {/* Title directly above slideshow */}
          <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent">
            This Week’s Events!
          </h2>

          <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-[1/1] max-h-[600px] overflow-hidden slideshow-fit pb-5 content-center place-items-center">
            <Slideshow
              images={flyers}
              alt="Company visit photos"
              interval={3500}
              className=""
            />
          </div>
        </div>
      </div>
      {/* New rotating topics card */}
      {/* <div className="mt-10">
        <RotatingTopicsCard topics={TOPICS} intervalMs={5500} title="Programs & Events" />
      </div> */}

      <div>
        <h2 className="text-center text-3xl font-bold mb-6">Events Calendar</h2>
      </div>

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

    
  );
}

