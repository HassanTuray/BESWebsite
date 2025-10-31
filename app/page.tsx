'use client'
// app/about/page.tsx
import Image from "next/image";
// import OrgTree, { OrgTreeNode } from "/components/org-tree";
// import { communicationZoneNode } from "./communicationZone";
// import { financeZoneNode } from "./financeZone";
// import { parlimentarianZoneNode } from "./parlimentarianZone";
// import { membershipZoneNode } from "./membershipZone";
// import { programsZoneNode } from "./programsZone";
import * as page from "./about/aboutConstants";
import Card from "./components/card";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"

import { useEffect, useRef} from 'react'
import Slideshow from "./components/slideshow";
import RotatingTopicsCard from "./components/rotating-topics-card";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// const rootLabel = (
//   <div className="text-center">
//     <div className="text-lg font-semibold">
//       {page.c_eboardTreeTitle}
//     </div>
//   </div>
// )

// const orgTreeData: OrgTreeNode = {
//   label: rootLabel,
//   children: [communicationZoneNode, financeZoneNode, parlimentarianZoneNode, membershipZoneNode, programsZoneNode]
// }

const companyVisits = {id:"companyVisits", title:"Company Visits", body:"In spirit of collaboration and exposing our members to future employers, we host company visits. During company visits our sponsors bring representatives to talk about their culture, projects, and employment opportunities."};
const professionalDev = {id:"professionalDev", title:"Professional and Educational Development", body:"We offer our members opportunities to further their academic and professional journeys! From panels that consist of alumni at the frontier of their careers, to peer mentoring through our Little Big Program. Members are constantly taking steps to develop themselves."};
const socials = {id:"socialsMixers", title:"Socials + Mixers", body:"At BES we care about the social well being and network expansion of members. We provide members with several events throughout the year to meet other students, relax, and have fun!"};
const communityOutreach = {id:"communityOutreach", title:"Community Outreach", body:"Here at BES we aim to develop engineers that positively impact the community. We engage with our local schools and underserved populations through food drives, volunteer events, and early education assistance."}

const topics = [companyVisits, professionalDev, socials, communityOutreach];

const topicCardimages = ["/slides/BO3A8618.JPG", "/slides/965A4072.JPG", "/slides/IMG_0433.JPG", "/slides/20250419_DSC_0923.jpg"]
const flyers = ["/flyers/terp-tech-path.PNG", "/flyers/welcome-back-cookout.jpg"]

const goldSponsors = [
  {src:"/gold-sponsors/Jane_Street_Capital_Logo.svg.png", alt:"Jane Street"}, 
  {src: "/gold-sponsors/Visa_Brandmark_Blue_RGB_2021.svg", alt: "Visa"}, 
  {src: "/gold-sponsors/whiting-turner-logo-vector.svg", alt: "Whiting Turner"}];

  const silverSponsors = [
  { src: "/silver-sponsors/Leidos-logo-horz-full-rgb.svg", alt: "Leidos" },
  { src: "/silver-sponsors/AmgenBlueLogo.svg", alt: "Amgen" },
  { src: "/silver-sponsors/BAE_Systems_logo.svg", alt: "BAE Systems" },
  { src: "/silver-sponsors/WMT-Wordmark-Standard-TrueBlue-RGB.svg", alt: "Walmart" },
];

export default function Home() {
  useEffect ( () => {
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const ls = new LocomotiveScroll();
    
            const tl = gsap.timeline()
    
    
          tl.fromTo(
            '.fade-photo',
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              stagger: 0.25,
              ease: 'power2.out',
            }
          )
    
          tl.fromTo(
            '.hero-text',
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: 'power2.out',
            },
            '-=0.5' 
          )
          }
          
          
        )()
      },[]  
        
      )
  
      const formRef = useRef<HTMLFormElement>(null);
  
    return (
      <>
      <section id="hero" className="">
        <div className="relative h-screen">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="hero-text relative z-20 text-center font-black leading-tight tracking-tight 
               text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
               bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22]
               bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(255,215,0,0.25)]" 
               data-scroll data-scroll-speed="0.1">
              <span className="hero-text split bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent [text-shadow:0_0_14px_rgba(255,215,0,0.25)]">
                The Black Engineers Society
              </span>
            </h1>
          </div>
               
          {/* Top right photo */}
          <Image
            id="image"
            src="/slides/965A4015.JPG"
            alt="collage image"
            width={300}
            height={300}
            className="
              fade-photo brightness-90 opacity-50 rounded-sm absolute 
              top-[5%] right-[5%]
              w-[28vw] max-w-[250px]
              sm:w-[24vw] md:w-[18vw] lg:w-[24vw] z-0"
            priority        
            data-scroll
            data-scroll-speed="0.2"
          />
  
          {/* Top left photo */}
          <Image
            src="/slides/BO3A5788.JPG"
            alt="collage image"
            width={300}
            height={300}
            className="
              fade-photo brightness-90 opacity-50 rounded-sm absolute 
              top-[5%] left-[15%] 
              w-[30vw] max-w-[250px]
              sm:w-[25vw] md:w-[20vw] z-0"
            priority   
            data-scroll
            data-scroll-speed="0.2"     
          /> 
  
          {/* Middle right photo */}
          <Image
            src="/slides/BO3A6506.JPG"
            alt="collage image"
            width={300}
            height={300}
            className="
              fade-photo brightness-90 opacity-50 rounded-sm absolute 
              top-[47%] left-[80%]
              w-[25vw] max-w-[220px]
              sm:w-[20vw] md:w-[18vw] z-0"
            priority   
            data-scroll
            data-scroll-speed="0.3"     
          /> 
  
          {/* Middle middle photo */}
          <Image
            src="/slides/BO3A8432.JPG"
            alt="collage image"
            width={300}
            height={300}
            className="
              fade-photo brightness-90 opacity-50 rounded-sm absolute 
              top-[45%] left-[40%] -translate-x-1/2
              w-[35vw] max-w-[280px]
              sm:w-[30vw] md:w-[25vw] z-0"
            priority    
            data-scroll
            data-scroll-speed="0.4"    
          /> 
  
          {/* Middle left photo */}
          <Image
            src="/slides/965A4052.JPG"
            alt="collage image"
            width={300}
            height={300}
            className="
              fade-photo brightness-90 opacity-50 rounded-sm absolute 
              top-[40%] left-[0%]
              w-[25vw] max-w-[220px]
              sm:w-[20vw] md:w-[18vw] z-0"
            priority        
            data-scroll
            data-scroll-speed="0.5"
          /> 

          {/* Bottom photo */}
          <Image
            src="/slides/BO3A8438.JPG"
            alt="collage image"
            width={300}
            height={300}
            className="
              fade-photo brightness-90 opacity-50 rounded-sm absolute
              top-[80%] left-[35%]
              w-[35vw] max-w-[280px]
              sm:w-[30vw] md:w-[25vw] z-0"
            priority  
            data-scroll
            data-scroll-speed="0.65"     
          />       
        </div>
        <div className='h-[40vh]'></div>
      </section>
  
      <section id="aboutUs" className="">
        {/* History Mission Statment Section */}
        <section>
          <div className="grid grid-cols-2 gap-5 items-stretch">
            
            {/* NSBE Mission Statement Card */}
            <div className="relative col-span-1">
              <Card>
                <h2 className="text-xl sm:text-5xl font-bold bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent">
                  {page.c_NSBEMissionTitleText}
                </h2>
                
                <p className="mt-3 text-2xl/10 text-white/80 pr-10 pb-15">
                  {page.c_NSBEMissionStatementText}
                </p>
  
                <div className="flex justify-end items-end">
                  <Image
                    src="/slides/nsbe-logo.png"  
                    alt="BES crest"
                    width={96}
                    height={96}
                    className="hidden sm:block h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 object-contain"
                    priority
                  />
                </div>
              </Card>
            </div>
  
            {/* BES Mission Statement Card */}
            <div className="relative col-span-1">
              <Card cardWrapper="h-full flex flex-col justify-between">
                <h2 className="text-xl sm:text-5xl font-bold bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent">
                  {page.c_BESMissionTitleText}
                </h2>
  
                <p className="mt-3 text-2xl/10 text-white/80 pr-10 pb-15">
                  To <b><u>recruit</u></b>, <b><u>retain</u></b>, and <b><u>release</u></b> qualified minorities in the fields of computer science, engineering, mathematics, and physical sciences.
                </p>
  
                <div className="flex justify-end items-end">
                  <Image
                    src="/slides/beslogo.png" 
                    alt="BES logo"
                    width={96}
                    height={96}
                    className="hidden sm:block h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 object-contain"
                    priority
                  />
                </div>
              </Card>
            </div>
  
            {/* History card */}
            <div className="flex justify-center w-full col-span-2">
              <Card cardWrapper="w-full min-h-[18rem]">
                <h2 className="text-xl sm:text-5xl font-bold bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent">
                  {page.c_historyTitleText}
                </h2>
                <p className="mt-3 text-2xl/10 text-white/80 pr-10 pb-15">
                  {page.c_historyText}
                </p>
              </Card>
            </div>
          </div>
        </section>
  
        {/* Test Org Tree*/}
        {/* <section>
          <div className="Flex justify-center">
          <OrgTree
          data={orgTreeData}
          lineColor="rgba(255,255,255,0.18)"
          nodeWrapperClassName="inline-flex w-fit max-w-[12rem] flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-sm leading-tight whitespace-normal break-words"
          // wrapLabel={(label) => <HoverCard hover className="">{label}</HoverCard>} // optional: wrap with your Card/HoverCard
          />
          </div>
        </section> */}
        </section>
  
        <section id="programsAndEvents" className="">
          <RotatingTopicsCard 
            topics={topics}
            cardWrapper='grid grid-cols-[0.5fr_1fr_1fr] h-[38rem]'
            intervalMs={5500}
            title='Programs and Events'
          >
            <Slideshow images={topicCardimages}>
            </Slideshow>
          </RotatingTopicsCard>
    
    
          <div className="grid grid-cols-2 mt-10">
            <h1 className="text-center text-5xl font-black leading-tight tracking-tight">
              Event Calendar
            </h1>
  
            <h1 className="text-center text-5xl font-black leading-tight tracking-tight">
              This Weeks Events
            </h1>
            <div className='relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl shadow-black/20'>
              <iframe
              // Replace with your Calendar ID: Settings → Integrate calendar → Calendar ID
              src={
                  "https://calendar.google.com/calendar/embed?" +
                  "showTitle=0&showTabs=0&showPrint=0&showCalendars=0&showTz=0&wkst=1&mode=MONTH&" +
                  "ctz=America/New_York&bgcolor=%23000000&" +
                  "src=" + encodeURIComponent("koc0po5n2nopod6betkm3r9rd4@group.calendar.google.com")
              }
              className="w-full h-[700px] bg-black"
              style={{ border: 0 }}
              loading="lazy"
              title="BES Calendar"
            />
            </div>
            
            <div className='px-2'>
              <Slideshow 
                images={flyers} 
                contain={true}
              >
              </Slideshow>
            </div>
          </div>
        </section>
  
        <section id="sponsors" className="">
          {/* Big page title */}
          <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            Thanks to our Sponsors!
          </h1>
              
          {/* Vertical stack of the three cards */}
          <div className="mt-12 grid min-h-[50dvh] place-items-center">
            <div className="flex flex-col items-center justify-center gap-8">
    
              {/* GOLD (unchanged) */}
              <Card cardWrapper="inline-block min-h-[25dvw] min-w-[50dvw] rounded-2xl border border-amber-300/50 bg-gradient-to-br from-amber-200/30 via-amber-500/15 to-amber-800/25 p-6 shadow-lg flex items-center justify-center overflow-hidden">
                <span className="mb-10">
                  <h1 className="text-center text-5xl font-black leading-tight tracking-tight bg-gradient-to-r from-[#d4af37] via-[#b7950b] to-[#8a6e2f] bg-clip-text text-transparent">
                    Gold Tier Sponsors!
                  </h1>
                </span>
    
                <div className="grid grid-cols-3 gap-6 place-items-center">
                  {goldSponsors.map((s, i) => (
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
              
              {/* SILVER — more gray */}
              <Card cardWrapper="flex inline-block min-h-[25dvw] min-w-[50dvw] rounded-2xl border border-zinc-400/60 bg-gradient-to-br from-zinc-300/35 via-zinc-600/20 to-zinc-900/30 p-6 shadow-lg items-center justify-center overflow-hidden">
                <span className="mb-10">
                  <h1 className="text-center text-5xl font-black leading-tight tracking-tight bg-gradient-to-r from-slate-200 via-zinc-400 to-slate-100 bg-clip-text text-transparent">
                  Silver Tier Sponsors!
                  </h1>
                </span>
                
                <div className="grid grid-cols-3 gap-6 place-items-center">
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
  
        <section id="contactUs" className="place-items-center">
        {/* Contact card */}
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
  
            <form
              ref={formRef}
              className="mt-6 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault(); // stop default page reload
  
                const form = e.currentTarget;
                const formData = Object.fromEntries(new FormData(form));
  
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                  });
  
                  if (res.ok) {
                    alert(" Message sent successfully!");
                    form.reset(); 
                  } else {
                    const err = await res.json();
                    alert(` Failed to send message: ${err.error || "Unknown error"}`);
                  }
                } catch (err) {
                  console.error("Error sending form:", err);
                  alert(`${err instanceof Error ? err.message : "Something went wrong."}`);
                }
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Your name"
                />
              </div>
  
              {/* Role selector */}
              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-sm font-medium">
                  Who is leaving a message?
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white
                            focus:outline-none focus:ring-2 focus:ring-slate-400/60
                            [color-scheme:dark]"
                  defaultValue="alumni"
                  required
                >
                  <option value="alumni"  className="bg-[#0B1220] text-white">Alumni</option>
                  <option value="company" className="bg-[#0B1220] text-white">Company Representative</option>
                  <option value="other"   className="bg-[#0B1220] text-white">Other</option>
                </select>
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="you@example.com"
                />
              </div>
  
              <div>
                <label htmlFor="message" className="block text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="How can we help?"
                />
              </div>
  
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-3 font-medium hover:bg-white/15"
              >
                Send
              </button>
            </form>
          </div>
  
          {/* Socials row */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/besumcp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on LinkedIn"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 hover:bg-white/10"
            >
              <img 
                src="/svgs/linkedin.svg" 
                alt="LinkedIn" 
                width="24" 
                height="24" 
                className="invert" />
            </a>
  
            <a
              href="https://www.instagram.com/besumcp/?igsh=MWR1MXNmbHJveHFxdQ%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Instagram"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 hover:bg-white/10"
            >
              <img
                src="https://cdn.simpleicons.org/instagram/ffffff"
                alt=""
                width="24"
                height="24"
              />
            </a>
          </div>
        </section>
      </>
    );
}
