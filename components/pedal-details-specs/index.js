export default function PedalSpecs({ pedalData }) {
  return (
    <main>
      <p>width: {pedalData.width_mm} mm</p>
      <p>depth: {pedalData.depth_mm} mm</p>
      <p>height: {pedalData.height_mm} mm</p>

      <p>voltage: {pedalData.voltage}</p>
      <p>battery: {pedalData.battery}</p>
      <p>{pedalData.polarity}</p>

      <p>
        current draw bypass - manufacturer specs:{" "}
        {pedalData.bypass_current_draw_manufacturer}
      </p>
      <p>
        current draw engaged - manufacturer specs:{" "}
        {pedalData.engaged_current_draw_manufacturer}
      </p>
      <p>
        current draw bypass - own_measurement:{" "}
        {pedalData.bypass_current_draw_own_measurement}
      </p>
      <p>
        current draw engaged - own_measurement:{" "}
        {pedalData.engaged_current_draw_own_measurement}
      </p>

      <p>
        impedance in/out: {pedalData.input_impedance}/{" "}
        {pedalData.output_impedance}
      </p>

      <ul>
        <h4>footswitches</h4>
        {pedalData.footswitches.map((footswitch) => (
          <li key={footswitch}>{footswitch}</li>
        ))}
      </ul>
      <ul>
        <h4>knobs</h4>
        {pedalData.knobs.map((knob) => (
          <li key={knob}>{knob}</li>
        ))}
      </ul>
      <ul>
        <h4>switches</h4>
        {pedalData.switches.map((haehswitch) => (
          <li key={haehswitch}>{haehswitch}</li>
        ))}
      </ul>
      <ul>
        <h4>dipswitches</h4>
        {pedalData.dipswitches.map((dipswitch) => (
          <li key={dipswitch}>{dipswitch}</li>
        ))}
      </ul>
      <ul>
        <h4>jacks left</h4>
        {pedalData.jacks_left.map((jack_left) => (
          <li key={jack_left}>{jack_left}</li>
        ))}
      </ul>
      <ul>
        <h4>jacks right</h4>
        {pedalData.jacks_right.map((jack_right) => (
          <li key={jack_right}>{jack_right}</li>
        ))}
      </ul>
      <ul>
        <h4>jacks top</h4>
        {pedalData.jacks_top.map((jack_top) => (
          <li key={jack_top}>{jack_top}</li>
        ))}
      </ul>
      <ul>
        <h4>jacks front</h4>
        {pedalData.jacks_front.map((jack_front) => (
          <li key={jack_front}>{jack_front}</li>
        ))}
      </ul>
    </main>
  );
}
