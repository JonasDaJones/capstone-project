import {
  StyledImpedance,
  StyledDimensions,
  StyledCurrentDraw,
  StyledVoltage,
  StyledBattery,
  StyledPolarity,
  StyledContentSpecs,
  StyledFootswitchList,
  StyledKnobList,
  StyledSwitchList,
  StyledDipswitchList,
  StyledJackLeftList,
  StyledJackRightList,
  StyledJackTopList,
  StyledJackFrontList,
} from "./pedal-details-specs.styled";

export default function PedalSpecs({ currentPedal }) {
  return (
    <StyledContentSpecs>
      <StyledDimensions>
        <h4>dimensions (mm)</h4>
        <p>width: {currentPedal.width}</p>
        <p>depth: {currentPedal.depth}</p>
        <p>height: {currentPedal.height}</p>
      </StyledDimensions>

      <StyledVoltage>voltage: {currentPedal.voltage}</StyledVoltage>
      <StyledBattery>battery: {currentPedal.battery}</StyledBattery>
      <StyledPolarity>{currentPedal.polarity}</StyledPolarity>

      <StyledCurrentDraw>
        <th scope="row"></th>
        <th scope="row">current draw</th>
        <th scope="row">(mA)</th>
        <tr>
          <th scope="col">measured by:</th>
          <th scope="col">bypassed</th>
          <th scope="col">engaged</th>
        </tr>
        <tr>
          <th scope="row">manufacturer</th>
          <td>{currentPedal.bypassCurrentDrawManufacturer}</td>
          <td>{currentPedal.engagedCurrentDrawManufacturer}</td>
        </tr>
        <tr>
          <th scope="row">me</th>
          <td>{currentPedal.bypassCurrentDrawOwnMeasurement}</td>
          <td>{currentPedal.engagedCurrentDrawOwnMeasurement}</td>
        </tr>
      </StyledCurrentDraw>
      <StyledImpedance>
        impedance in/out: {currentPedal.inputImpedance}/{" "}
        {currentPedal.outputImpedance}
      </StyledImpedance>
      <StyledFootswitchList>
        <caption>footswitches</caption>
        {currentPedal.footswitches.map((footswitch) => (
          <li key={footswitch}>{footswitch}</li>
        ))}
      </StyledFootswitchList>
      <StyledKnobList>
        <caption>knobs</caption>
        {currentPedal.knobs.map((knob) => (
          <li key={knob}>{knob}</li>
        ))}
      </StyledKnobList>
      <StyledSwitchList>
        <caption>switches</caption>
        {currentPedal.switches.map((haehswitch) => (
          <li key={haehswitch}>{haehswitch}</li>
        ))}
      </StyledSwitchList>
      <StyledDipswitchList>
        <caption>dipswitches</caption>
        {currentPedal.dipswitches.map((dipswitch) => (
          <li key={dipswitch}>{dipswitch}</li>
        ))}
      </StyledDipswitchList>
      <StyledJackLeftList>
        <caption>jacks left</caption>
        {currentPedal.jacksLeft.map((jackLeft) => (
          <li key={jackLeft}>{jackLeft}</li>
        ))}
      </StyledJackLeftList>
      <StyledJackRightList>
        <caption>jacks right</caption>
        {currentPedal.jacksRight.map((jackRight) => (
          <li key={jackRight}>{jackRight}</li>
        ))}
      </StyledJackRightList>
      <StyledJackTopList>
        <caption>jacks top</caption>
        {currentPedal.jacksTop.map((jackTop) => (
          <li key={jackTop}>{jackTop}</li>
        ))}
      </StyledJackTopList>
      <StyledJackFrontList>
        <caption>jacks front</caption>
        {currentPedal.jacksFront.map((jackFront) => (
          <li key={jackFront}>{jackFront}</li>
        ))}
      </StyledJackFrontList>
    </StyledContentSpecs>
  );
}
