import React from "react";
import {
  StyledDetailSound,
  StyledSoundDescription,
} from "./pedal-details-sound.styled";
export default function PedalSound({ pedalData }) {
  return (
    <StyledDetailSound>
      <StyledSoundDescription>
        sound description: {pedalData.sound_description}
      </StyledSoundDescription>
    </StyledDetailSound>
  );
}
