import {
  StyledImpedanceContainer,
  StyledImpedanceInput,
  StyledImpedanceLabel,
  StyledImpedanceWrapper,
} from "./FormImpedanceInput.styled";

export default function ImpedanceInput({
  inputImpedance,
  outputImpedance,
  onInputImpedanceChange,
  onOutputImpedanceChange,
}) {
  return (
    <StyledImpedanceContainer>
      <StyledImpedanceWrapper>
        <StyledImpedanceLabel htmlFor="inputImpedance">
          inputImpedance:
        </StyledImpedanceLabel>
        <StyledImpedanceInput
          name="inputImpedance"
          type="number"
          id="inputImpedance"
          value={inputImpedance}
          min="0"
          onChange={onInputImpedanceChange}
        />
        <p> MOhm</p>
      </StyledImpedanceWrapper>
      <StyledImpedanceWrapper>
        <StyledImpedanceLabel htmlFor="outputImpedance">
          outputImpedance:
        </StyledImpedanceLabel>
        <StyledImpedanceInput
          name="outputImpedance"
          type="number"
          id="outputImpedance"
          value={outputImpedance}
          min="0"
          onChange={onOutputImpedanceChange}
        />
        <p> kOhm</p>
      </StyledImpedanceWrapper>
    </StyledImpedanceContainer>
  );
}
