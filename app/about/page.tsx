
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
    <section className="px-25">
    {/* Huge page title with logos on both sides (one line, no white boxes) */}
    <section>
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
      <div className='h-[50vh]'></div>
    </section>

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
      <section>
        <div className="Flex justify-center">
        <OrgTree
        data={orgTreeData}
        lineColor="rgba(255,255,255,0.18)"
        nodeWrapperClassName="inline-flex w-fit max-w-[12rem] flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-sm leading-tight whitespace-normal break-words"
        // wrapLabel={(label) => <HoverCard hover className="">{label}</HoverCard>} // optional: wrap with your Card/HoverCard
        />
        </div>
      </section>
      </section>
    </>
  );
}
