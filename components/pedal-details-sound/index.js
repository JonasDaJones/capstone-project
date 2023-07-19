import React from "react";
import {
  StyledDetailSound,
  StyledSoundDescription,
} from "./pedal-details-sound.styled";
export default function PedalSound({ currentPedal }) {
  return (
    <StyledDetailSound>
      <StyledSoundDescription>
        sound description: {currentPedal.soundDescription}
      </StyledSoundDescription>
    </StyledDetailSound>
  );
}
