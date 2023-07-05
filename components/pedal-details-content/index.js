import React, { useState } from "react";
import { pedals } from "../../lib/pedalfx-data";
import PedalMainPage from "../pedal-details-main";
import PedalSpecs from "../pedal-details-specs";
import PedalSound from "../pedal-details-sound";
import {
  StyledContentWrapper,
  StyledHamburger,
  StyledHead,
  StyledPedalTitle,
  StyledTabBar,
  StyledTabButton,
} from "./pedal-detail-content.styled";
import BackButton from "../nav-button";
export default function PedalDetailContent({ id }) {
  const pedalData = pedals.find((pedal) => pedal.id === id);
  const [activeTab, setActiveTab] = useState("main");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <StyledHead>
        <BackButton />
        <StyledPedalTitle>{pedalData?.name}</StyledPedalTitle>
        <StyledHamburger>🍔</StyledHamburger>
        <StyledTabBar>
          <StyledTabButton
            active={activeTab === "main"}
            onClick={() => handleTabClick("main")}
          >
            main
          </StyledTabButton>
          <StyledTabButton
            active={activeTab === "specs"}
            onClick={() => handleTabClick("specs")}
          >
            specs
          </StyledTabButton>
          <StyledTabButton
            active={activeTab === "sound"}
            onClick={() => handleTabClick("sound")}
          >
            sound
          </StyledTabButton>
        </StyledTabBar>
      </StyledHead>
      <StyledContentWrapper>
        {pedalData ? (
          <section>
            {activeTab === "main" && <PedalMainPage pedalData={pedalData} />}
            {activeTab === "specs" && <PedalSpecs pedalData={pedalData} />}
            {activeTab === "sound" && <PedalSound pedalData={pedalData} />}
          </section>
        ) : (
          <h3>No pedal found</h3>
        )}
      </StyledContentWrapper>
    </>
  );
}
