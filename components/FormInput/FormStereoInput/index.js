import { useState } from "react";
import { StyledStereoWrapper } from "./FormStereoInput.styled";
export default function StereoInput({ onStereoChange }) {
  const [checkedStereo, setCheckedStereo] = useState(false);
  const handleStereoChange = (event) => {
    const newStereo = event.target.checked;
    setCheckedStereo(newStereo);
    onStereoChange(newStereo);
  };

  return (
    <StyledStereoWrapper>
      <label htmlFor="stereo">stereo?</label>

      <input
        id="stereo"
        type="checkbox"
        name="stereo"
        value={false}
        checked={checkedStereo}
        onChange={handleStereoChange}
      />
    </StyledStereoWrapper>
  );
}
