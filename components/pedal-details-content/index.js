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

export default function PedalDetailContent({ currentPedal }) {
  const [activeTab, setActiveTab] = useState("main");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <StyledHead>
        <BackButton />
        <StyledPedalTitle>{currentPedal?.name}</StyledPedalTitle>
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
        {currentPedal ? (
          <section>
            {activeTab === "main" && (
              <PedalMainPage currentPedal={currentPedal} />
            )}
            {activeTab === "specs" && (
              <PedalSpecs currentPedal={currentPedal} />
            )}
            {activeTab === "sound" && (
              <PedalSound currentPedal={currentPedal} />
            )}
          </section>
        ) : (
          <StyledWarning>No pedal found</StyledWarning>
        )}
      </StyledContentWrapper>
    </>
  );
}
