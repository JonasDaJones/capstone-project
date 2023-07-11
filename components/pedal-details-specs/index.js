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
        <p>width: {currentPedal.width_mm}</p>
        <p>depth: {currentPedal.depth_mm}</p>
        <p>height: {currentPedal.height_mm}</p>
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
          <td>{currentPedal.bypass_current_draw_manufacturer}</td>
          <td>{currentPedal.engaged_current_draw_manufacturer}</td>
        </tr>
        <tr>
          <th scope="row">me</th>
          <td>{currentPedal.bypass_current_draw_own_measurement}</td>
          <td>{currentPedal.engaged_current_draw_own_measurement}</td>
        </tr>
      </StyledCurrentDraw>
      <StyledImpedance>
        impedance in/out: {currentPedal.input_impedance}/{" "}
        {currentPedal.output_impedance}
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
        {currentPedal.jacks_left.map((jack_left) => (
          <li key={jack_left}>{jack_left}</li>
        ))}
      </StyledJackLeftList>
      <StyledJackRightList>
        <caption>jacks right</caption>
        {currentPedal.jacks_right.map((jack_right) => (
          <li key={jack_right}>{jack_right}</li>
        ))}
      </StyledJackRightList>
      <StyledJackTopList>
        <caption>jacks top</caption>
        {currentPedal.jacks_top.map((jack_top) => (
          <li key={jack_top}>{jack_top}</li>
        ))}
      </StyledJackTopList>
      <StyledJackFrontList>
        <caption>jacks front</caption>
        {currentPedal.jacks_front.map((jack_front) => (
          <li key={jack_front}>{jack_front}</li>
        ))}
      </StyledJackFrontList>
    </StyledContentSpecs>
  );
}
