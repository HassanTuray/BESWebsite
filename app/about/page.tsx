
'use client'
// app/about/page.tsx
import Image from "next/image";
import OrgTree, { OrgTreeNode } from "../components/org-tree";
import { communicationZoneNode } from "./communicationZone";
import { financeZoneNode } from "./financeZone";
import { parlimentarianZoneNode } from "./parlimentarianZone";
import { membershipZoneNode } from "./membershipZone";
import { programsZoneNode } from "./programsZone";
import * as page from "./aboutConstants";
import Card from "../components/card";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"

import { useEffect, useRef} from 'react'
import Slideshow from "../components/slideshow";
import RotatingTopicsCard from "../components/rotating-topics-card";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const rootLabel = (
  <div className="text-center">
    <div className="text-lg font-semibold">
      {page.c_eboardTreeTitle}
    </div>
  </div>
)

const orgTreeData: OrgTreeNode = {
  label: rootLabel,
  children: [communicationZoneNode, financeZoneNode, parlimentarianZoneNode, membershipZoneNode, programsZoneNode]
}

const companyVisits = {id:"companyVisits", title:"Company Visits", body:"In spirit of collaboration and exposing our members to future employers, we host company visits. During company visits our sponsors bring representatives to talk about their culture, projects, and employment opportunities."};
const professionalDev = {id:"professionalDev", title:"Professional and Educational Development", body:"We offer our members opportunities to further their academic and professional journeys! From panels that consist of alumni at the frontier of their careers, to peer mentoring through our Little Big Program. Members are constantly taking steps to develop themselves."};
const socials = {id:"socialsMixers", title:"Socials + Mixers", body:"At BES we care about the social well being and network expansion of members. We provide members with several events throughout the year to meet other students, relax, and have fun!"};
const communityOutreach = {id:"communityOutreach", title:"Community Outreach", body:"Here at BES we aim to develop engineers that positively impact the community. We engage with our local schools and underserved populations through food drives, volunteer events, and early education assistance."}

const topics = [companyVisits, professionalDev, socials, communityOutreach];

const topicCardimages = ["/slides/BO3A8618.JPG", "/slides/965A4072.JPG", "/slides/IMG_0433.JPG", "/slides/20250419_DSC_0923.jpg"]
const flyers = ["/flyers/terp-tech-path.PNG", "/flyers/welcome-back-cookout.jpg"]

export default function AboutPage() {
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

  return (
    <>
    <section id="#hero" className="px-25 mb-10">
      <div className="relative h-screen">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="whitespace-nowrap text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight z-10" data-scroll data-scroll-speed="0.1">
            <span className="hero-text split bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(255,215,0,0.22)]">
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
          className="fade-photo brightness-90 opacity-50 rounded-sm absolute top-10 left-215 z-0"
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
          className="fade-photo brightness-90 opacity-50 rounded-sm absolute top-10 left-50 z-0"
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
          className="fade-photo brightness-90 opacity-50 rounded-sm absolute top-100 left-250 z-0"
          priority   
          data-scroll
          data-scroll-speed="0.3"     
        /> 

        {/* Bottom photo */}
        <Image
          src="/slides/BO3A8438.JPG"
          alt="collage image"
          width={300}
          height={300}
          className="fade-photo brightness-90 opacity-50 rounded-sm absolute top-175 left-150 z-0"
          priority  
          data-scroll
          data-scroll-speed="0.65"     
        /> 

        {/* Middle middle photo */}
        <Image
          src="/slides/BO3A8432.JPG"
          alt="collage image"
          width={300}
          height={300}
          className="fade-photo brightness-90 opacity-50 rounded-sm absolute top-90 left-115 z-0"
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
          className="fade-photo brightness-90 opacity-50 rounded-sm absolute top-80 left-0 z-0"
          priority        
          data-scroll
          data-scroll-speed="0.5"
        />       
      </div>
      <div className='h-[40vh]'></div>
    </section>

    <section id="#aboutUs" className="px-25 mt-25 mb-25">
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

      <section id="#programAndEvents" className="px-25 mt-25 mb-25">
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
          <div className='relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl shadow-black/20'>
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
          
          <div className='px-2'>
            <Slideshow 
              images={flyers} 
              contain={true}
            >
            </Slideshow>
          </div>
        </div>
      </section>
    </>
  );
}
