import { StyledCurrentTable } from "../FormImpedanceInput/FormImpedanceInput.styled";
import {
  StyledCurrentInput,
  StyledCurrentInputLabel,
  StyledCurrentTableMeas,
  StyledCurrentTableTitle,
} from "./FormCurrentInput.styled";

export default function CurrentInput({
  bypassCurrentDrawManufacturer,
  engagedCurrentDrawManufacturer,
  bypassCurrentDrawOwnMeasurement,
  engagedCurrentDrawOwnMeasurement,

  onBypassCurrentDrawManufacturerChange,
  onEngagedCurrentDrawManufacturerChange,
  onBypassCurrentDrawOwnMeasurementChange,
  onEngagedCurrentDrawOwnMeasurementChange,
}) {
  return (
    <StyledCurrentTable>
      <StyledCurrentTableTitle>current draw (in mA)</StyledCurrentTableTitle>
      <StyledCurrentInputLabel htmlFor="bypassCurrentDrawManufacturer">
        current draw bypassed by manual:
      </StyledCurrentInputLabel>
      <StyledCurrentTableMeas>manual:</StyledCurrentTableMeas>
      <StyledCurrentTableMeas>my measurement:</StyledCurrentTableMeas>
      <StyledCurrentInput
        name="bypassCurrentDrawManufacturer"
        type="number"
        id="bypassCurrentDrawManufacturer"
        value={bypassCurrentDrawManufacturer}
        min="0"
        onChange={onBypassCurrentDrawManufacturerChange}
      />
      <StyledCurrentInputLabel htmlFor="engagedCurrentDrawManufacturer">
        current draw engaged by manual:
      </StyledCurrentInputLabel>
      <StyledCurrentInput
        name="engagedCurrentDrawManufacturer"
        type="number"
        id="engagedCurrentDrawManufacturer"
        value={engagedCurrentDrawManufacturer}
        min="0"
        onChange={onEngagedCurrentDrawManufacturerChange}
      />
      <StyledCurrentInputLabel htmlFor="bypassCurrentDrawOwnMeasurement">
        current draw bypassed by own measurement:
      </StyledCurrentInputLabel>
      <StyledCurrentInput
        name="bypassCurrentDrawOwnMeasurement"
        type="number"
        id="bypassCurrentDrawOwnMeasurement"
        value={bypassCurrentDrawOwnMeasurement}
        min="0"
        onChange={onBypassCurrentDrawOwnMeasurementChange}
      />
      <StyledCurrentInputLabel htmlFor="engagedCurrentDrawOwnMeasurement">
        current draw engaged by own measurement:
      </StyledCurrentInputLabel>
      <StyledCurrentInput
        name="engagedCurrentDrawOwnMeasurement"
        type="number"
        id="engagedCurrentDrawOwnMeasurement"
        value={engagedCurrentDrawOwnMeasurement}
        min="0"
        onChange={onEngagedCurrentDrawOwnMeasurementChange}
      />
    </StyledCurrentTable>
  );
}
