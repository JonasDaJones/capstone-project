import React, { useState } from "react";
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
  StyledWarning,
} from "./pedal-detail-content.styled";
import BackButton from "../nav-button";

export default function PedalDetailContent({ pedalData }) {
  const [activeTab, setActiveTab] = useState("main");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(pedalData);
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
          <StyledWarning>No pedal found</StyledWarning>
        )}
      </StyledContentWrapper>
    </>
  );
}
