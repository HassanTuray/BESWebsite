'use client'
import { useEffect, useRef} from 'react'
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"
import RotatingTopicsCard from '../components/rotating-topics-card';
import Topic from '../components/rotating-topics-card';
import Slideshow from '../components/slideshow';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const companyVisits = {id:"companyVisits", title:"Company Visits", body:"In spirit of collaboration and exposing our members to future employers, we host company visits. During company visits our sponsors bring representatives to talk about their culture, projects, and employment opportunities."};
const professionalDev = {id:"professionalDev", title:"Professional and Educational Development", body:"We offer our members opportunities to further their academic and professional journeys! From panels that consist of alumni at the frontier of their careers, to peer mentoring through our Little Big Program. Members are constantly taking steps to develop themselves."};
const socials = {id:"socialsMixers", title:"Socials + Mixers", body:"At BES we care about the social well being and network expansion of members. We provide members with several events throughout the year to meet other students, relax, and have fun!"};
const communityOutreach = {id:"communityOutreach", title:"Community Outreach", body:"Here at BES we aim to develop engineers that positively impact the community. We engage with our local schools and underserved populations through food drives, volunteer events, and early education assistance."}

const topics = [companyVisits, professionalDev, socials, communityOutreach];

const topicCardimages = ["/slides/BO3A8618.JPG", "/slides/965A4072.JPG", "/slides/IMG_0433.JPG", "/slides/20250419_DSC_0923.jpg"]
const flyers = ["/flyers/terp-tech-path.PNG", "/flyers/welcome-back-cookout.jpg"]
export default function ProgramsEventsPage() {
  return (
    
    // rotating topic card
    <section id="#programAndEvents">
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
  );
}

