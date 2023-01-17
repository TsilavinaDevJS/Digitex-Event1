import React from "react";
import HeroSection from "../sections/home/hero";
import { Presentation } from "../sections/home/Presentation.section";
import { EngagementSection } from "../sections/home/Engagement.section";
import { ObjectifSection } from "../sections/home/Objectif.section";
import { KeyNumbers } from "../sections/home/Key.section";
import { Organisateur } from "../sections/home/organisateur.section";

export default function Home() {
  const [dataPromise, setReady] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setReady(true);
    }, 1000);
  }, []);

  return (
    <>
      <HeroSection />
      {dataPromise ? (
        <>
          <Presentation />
          <KeyNumbers />
          <ObjectifSection />
          <EngagementSection />
          <Organisateur />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
