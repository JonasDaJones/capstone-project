import { useState } from "react";
import {
  StyledBypassInputContainer,
  StyledBypassInputSelect,
  StyledBypassLabel,
} from "./FormBypassInput.styled";

export default function BypassInput({ onBypassChange }) {
  const [bypassMode, setBypassMode] = useState("");
  const handleBypassChange = (event) => {
    const newBypassMode = event.target.value;
    setBypassMode(newBypassMode);
    onBypassChange(newBypassMode);
  };
  return (
    <StyledBypassInputContainer>
      <StyledBypassLabel htmlFor="bypassselect">
        choose way of bypass
      </StyledBypassLabel>
      <StyledBypassInputSelect
        id="bypassselect"
        name="bypass"
        value={bypassMode}
        onChange={handleBypassChange}
      >
        <option>true</option>
        <option>buffered</option>
        <option>selectable</option>
      </StyledBypassInputSelect>
      <p>bypass</p>
    </StyledBypassInputContainer>
  );
}
