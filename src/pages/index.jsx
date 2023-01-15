import React from "react";
import HeroSection from "../sections/home/hero";
import {Presentation} from "../sections/home/Presentation.section"
import {EngagementSection} from "../sections/home/Engagement.section"
import {ObjectifSection} from "../sections/home/Objectif.section"
import {KeyNumbers} from "../sections/home/Key.section"
import {Organisateur} from "../sections/home/organisateur.section"

export default function Home() {
  return (
    <div>
     <div>
        <HeroSection />
      </div>
       <div >
        <Presentation/>
      </div>
      <div>
        <KeyNumbers/>
      </div>
      <div>
        <ObjectifSection/>
      </div>
      <div >
        <EngagementSection/>
      </div>
      <div>
        <Organisateur/>
      </div>
    </div>
  );
}
