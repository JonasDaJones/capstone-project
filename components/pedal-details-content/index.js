import React, { useState } from "react";
import { pedals } from "../../lib/pedalfx-data";
import NavButton from "../nav-button/index";
import PedalMainPage from "../pedal-details-main/index";
import PedalSpecs from "../pedal-details-specs";
import PedalSound from "../pedal-details-sound";
import {
  StyledContentMain,
  StyledContentWrapper,
  StyledHamburger,
  StyledHead,
  StyledPedalTitle,
  StyledTabBar,
  StyledTabButton,
} from "./pedal-detail-content.styled";

export default function PedalDetailContent({ id }) {
  const pedalData = pedals.find((pedal) => pedal.id === id);
  const [activeTab, setActiveTab] = useState("main");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <StyledHead>
        <NavButton label="back" />
        <StyledPedalTitle>{pedalData?.name}</StyledPedalTitle>
        <StyledHamburger>🍔</StyledHamburger>
        <StyledTabBar>
          <StyledTabButton onClick={() => handleTabClick("main")}>
            main
          </StyledTabButton>
          <StyledTabButton onClick={() => handleTabClick("specs")}>
            specs
          </StyledTabButton>
          <StyledTabButton onClick={() => handleTabClick("sound")}>
            sound
          </StyledTabButton>
        </StyledTabBar>
      </StyledHead>
      <StyledContentWrapper>
        {pedalData ? (
          <StyledContentMain>
            {activeTab === "main" && <PedalMainPage pedalData={pedalData} />}
            {activeTab === "specs" && <PedalSpecs pedalData={pedalData} />}
            {activeTab === "sound" && <PedalSound pedalData={pedalData} />}
          </StyledContentMain>
        ) : (
          <h3>No pedal found</h3>
        )}
      </StyledContentWrapper>
    </>
  );
}
