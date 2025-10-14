'use client'
import { useEffect, useRef} from 'react'
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


export default function ProgramsEventsPage() {
  
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
      <div className='h-[100vh]'></div>
    </section>
  );
}

