import styled from "styled-components";

export const StyledContentSpecs = styled.main`
  height: fit-content;
  background-color: whitesmoke;
  padding: 0.5em;
  display: grid;
  column-gap: 0.3em;
  row-gap: 0.7em;
  grid-template-areas:
    "dimensions dimensions dimensions dimensions"
    "voltage polarity polarity battery "
    "current current current current"
    "impedance impedance impedance impedance"
    "footswitch knob switch dipswitch"
    "leftjack rightjack topjack frontjack";
`;

export const StyledDimensions = styled.div`
  grid-area: dimensions;
  display: flex;

  > * {
    margin-right: 1em;
  }
`;
export const StyledVoltage = styled.p`
  grid-area: voltage;
`;
export const StyledBattery = styled.p`
  grid-area: battery;
`;
export const StyledPolarity = styled.p`
  grid-area: polarity;
`;

export const StyledCurrentDraw = styled.table`
  grid-area: current;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #2f4f4f;
  text-align: left;
  margin-bottom: 1em;
`;
export const StyledImpedance = styled.p`
  grid-area: impedance;
  border: 1px solid #2f4f4f;
`;
export const StyledFootswitchList = styled.ul`
  grid-area: footswitch;
  list-style: none;
  font-size: smaller;
  height: fit-content;
  border-radius: 10px;
  background-color: #2490b5;
  color: whitesmoke;
`;
export const StyledKnobList = styled.ul`
  grid-area: knob;
  list-style: none;
  font-size: smaller;
  height: fit-content;
  border-radius: 10px;
  background-color: #2490b5;
  color: whitesmoke;
`;
export const StyledSwitchList = styled.ul`
  grid-area: switch;
  list-style: none;
  font-size: smaller;
  height: fit-content;
  border-radius: 10px;
  background-color: #2490b5;
  color: whitesmoke;
`;
export const StyledDipswitchList = styled.ul`
  grid-area: dipswitch;
  list-style: none;
  font-size: smaller;
  height: fit-content;
  border-radius: 10px;
  background-color: #2490b5;
  color: whitesmoke;
`;
export const StyledJackLeftList = styled.ul`
  grid-area: leftjack;
  list-style: none;
  font-size: smaller;
  height: fit-content;
  border-radius: 10px;
  background-color: #90b524;
  color: whitesmoke;
`;
export const StyledJackRightList = styled.ul`
  grid-area: rightjack;
  list-style: none;
  font-size: smaller;
  height: fit-content;
  border-radius: 10px;
  background-color: #90b524;
  color: whitesmoke;
`;
export const StyledJackTopList = styled.ul`
  grid-area: topjack;
  list-style: none;
  font-size: smaller;
  height: fit-content;
  border-radius: 10px;
  background-color: #90b524;
  color: whitesmoke;
`;
export const StyledJackFrontList = styled.ul`
  grid-area: frontjack;
  list-style: none;
  font-size: smaller;
  height: fit-content;
  border-radius: 10px;
  background-color: #90b524;
  color: whitesmoke;
`;
