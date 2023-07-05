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

export default function PedalSpecs({ pedalData }) {
  return (
    <StyledContentSpecs>
      <StyledDimensions>
        <h4>dimensions (mm)</h4>
        <p>width: {pedalData.width_mm}</p>
        <p>depth: {pedalData.depth_mm}</p>
        <p>height: {pedalData.height_mm}</p>
      </StyledDimensions>

      <StyledVoltage>voltage: {pedalData.voltage}</StyledVoltage>
      <StyledBattery>battery: {pedalData.battery}</StyledBattery>
      <StyledPolarity>{pedalData.polarity}</StyledPolarity>

      <StyledCurrentDraw>
        <caption>current draw (mA)</caption>
        <tr>
          <th scope="col">measured by:</th>
          <th scope="col">bypassed</th>
          <th scope="col">engaged</th>
        </tr>
        <tr>
          <th scope="row">manufacturer</th>
          <td>{pedalData.bypass_current_draw_manufacturer}</td>
          <td>{pedalData.engaged_current_draw_manufacturer}</td>
        </tr>
        <tr>
          <th scope="row">me</th>
          <td>{pedalData.bypass_current_draw_own_measurement}</td>
          <td>{pedalData.engaged_current_draw_own_measurement}</td>
        </tr>
      </StyledCurrentDraw>
      <StyledImpedance>
        impedance in/out: {pedalData.input_impedance}/{" "}
        {pedalData.output_impedance}
      </StyledImpedance>
      <StyledFootswitchList>
        <caption>footswitches</caption>
        {pedalData.footswitches.map((footswitch) => (
          <li key={footswitch}>{footswitch}</li>
        ))}
      </StyledFootswitchList>
      <StyledKnobList>
        <caption>knobs</caption>
        {pedalData.knobs.map((knob) => (
          <li key={knob}>{knob}</li>
        ))}
      </StyledKnobList>
      <StyledSwitchList>
        <caption>switches</caption>
        {pedalData.switches.map((haehswitch) => (
          <li key={haehswitch}>{haehswitch}</li>
        ))}
      </StyledSwitchList>
      <StyledDipswitchList>
        <caption>dipswitches</caption>
        {pedalData.dipswitches.map((dipswitch) => (
          <li key={dipswitch}>{dipswitch}</li>
        ))}
      </StyledDipswitchList>
      <StyledJackLeftList>
        <caption>jacks left</caption>
        {pedalData.jacks_left.map((jack_left) => (
          <li key={jack_left}>{jack_left}</li>
        ))}
      </StyledJackLeftList>
      <StyledJackRightList>
        <caption>jacks right</caption>
        {pedalData.jacks_right.map((jack_right) => (
          <li key={jack_right}>{jack_right}</li>
        ))}
      </StyledJackRightList>
      <StyledJackTopList>
        <caption>jacks top</caption>
        {pedalData.jacks_top.map((jack_top) => (
          <li key={jack_top}>{jack_top}</li>
        ))}
      </StyledJackTopList>
      <StyledJackFrontList>
        <caption>jacks front</caption>
        {pedalData.jacks_front.map((jack_front) => (
          <li key={jack_front}>{jack_front}</li>
        ))}
      </StyledJackFrontList>
    </StyledContentSpecs>
  );
}
