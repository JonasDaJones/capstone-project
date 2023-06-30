export default function PedalSpecs({ pedalData }) {
  return (
    <main>
      <p>voltage: {pedalData.voltage}</p>
      <p>battery: {pedalData.battery}</p>
      <p>{polarity}</p>
      <p>
        impedance in/out: {pedalData.input_impedance}/{" "}
        {pedalData.output_impedance}
      </p>

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
      <p>width: {pedalData.width_mm} mm</p>
      <p>depth: {pedalData.depth_mm} mm</p>
      <p>height: {pedalData.height_mm} mm</p>
      <p>footswitch: {pedalData.footswitch_1}</p>
      <p>footswitch: {pedalData.footswitch_2}</p>
      <p>footswitch: {pedalData.footswitch_3}</p>
      <p>footswitch: {pedalData.footswitch_4}</p>
      <p>knob: {pedalData.knob_1}</p>
      <p>knob: {pedalData.knob_2}</p>
      <p>knob: {pedalData.knob_3}</p>
      <p>knob: {pedalData.knob_4}</p>
      <p>knob: {pedalData.knob_5}</p>
      <p>knob: {pedalData.knob_6}</p>
      <p>knob: {pedalData.knob_7}</p>
      <p>knob: {pedalData.knob_8}</p>
      <p>switch: {pedalData.switch_1}</p>
      <p>switch: {pedalData.switch_2}</p>
      <p>switch: {pedalData.switch_3}</p>
      <p>switch: {pedalData.switch_4}</p>
      <p>switch: {pedalData.switch_5}</p>
      <p>switch: {pedalData.switch_6}</p>
      <p>switch: {pedalData.switch_7}</p>
      <p>switch: {pedalData.switch_8}</p>
      <p>internal_dipswitch: {pedalData.internal_dipswitch_1}</p>
      <p>internal_dipswitch: {pedalData.internal_dipswitch_2}</p>
      <p>power: {pedalData.power_jack}</p>
      <p>in: {pedalData.in}</p>
      <p>out: {pedalData.out}</p>
      <p>exp_in: {pedalData.exp_in}</p>
    </main>
  );
}
