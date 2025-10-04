'use client'
import { useEffect } from 'react'
import Image from "next/image";


export default function ProgramsEventsPage() {
  useEffect ( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const ls = new LocomotiveScroll();
      }
    )()
  },[]
    
)

  return (
    <section>
      <div className="relative h-screen">
        <div className="absolute inset-0 flex items-center justify-center border border-red-500 z-10">
          <h1 className="whitespace-nowrap text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight z-10">
            <span className="bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(255,215,0,0.22)]">
              The Black Engineers Society
            </span>
          </h1>
        </div>

        <Image
          src="/slides/965A4015.JPG"
          alt="collage image"
          width={350}
          height={350}
          className="brightness-90 opacity-50 rounded-sm absolute top-10 left-200 z-0"
          priority        
        />

        <Image
          src="/slides/BO3A5788.JPG"
          alt="collage image"
          width={350}
          height={350}
          className="brightness-90 opacity-50 rounded-sm absolute top-10 left-20 z-0"
          priority        
        /> 

        <Image
          src="/slides/BO3A6506.JPG"
          alt="collage image"
          width={350}
          height={350}
          className="brightness-90 opacity-50 rounded-sm absolute top-100 left-250 z-0"
          priority        
        /> 

        <Image
          src="/slides/965A4015.JPG"
          alt="collage image"
          width={350}
          height={350}
          className="brightness-90 opacity-50 rounded-sm absolute top-175 left-75 z-0"
          priority        
        /> 

        <Image
          src="/slides/965A4015.JPG"
          alt="collage image"
          width={350}
          height={350}
          className="brightness-90 opacity-50 rounded-sm absolute top-90 left-115 z-0"
          priority        
        /> 

        <Image
          src="/slides/965A4015.JPG"
          alt="collage image"
          width={350}
          height={350}
          className="brightness-90 opacity-50 rounded-sm absolute top-80 left-0 z-0"
          priority        
        />       
      </div>
    </section>
  );
}

