import React from "react";
import { HeaderComponent, FooterComponent } from "../../contents";
import {
  SectionServices,
  SectionWelcome,
  PartnairesSection,
  ValuesComponent,
} from "../../components";


import video from "../../assets/video/Y2Mate.is - hi tech global connection lines background 4k H4RDJ9P-cR1FyHv_rJE-1080p-1645360527831.mp4";
const Home = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="fixed -z-10 h-full w-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute z-30 mx-auto w-full items-center justify-center gap-16">
        <HeaderComponent />

        <SectionWelcome />

        <SectionServices />

        <ValuesComponent />

        <PartnairesSection />

        <FooterComponent />
      </div>
    </>
  );
};

export default Home;
