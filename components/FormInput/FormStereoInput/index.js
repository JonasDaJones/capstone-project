import { useState } from "react";
import { StyledStereoWrapper } from "./FormStereoInput.styled";
export default function StereoInput({ onStereoChange }) {
  const handleStereoChange = (event) => {
    const isChecked = event.target.checked;
    onStereoChange(isChecked);
  };

  return (
    <StyledStereoWrapper>
      <label htmlFor="stereo">stereo?</label>

      <input
        id="stereo"
        type="checkbox"
        name="stereo"
        onChange={handleStereoChange}
      />
    </StyledStereoWrapper>
  );
}
