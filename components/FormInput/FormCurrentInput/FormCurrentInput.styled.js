import styled from "styled-components";

export const StyledCurrentTable = styled.div`
  display: grid;
  grid-template-areas:
    "title title title"
    ". onoff onoff"
    "measured input input"
    "measured input input";
`;
export const StyledCurrentTableTitle = styled.h3`
  font-size: 1.3em;
  grid-area: title;
`;

export const StyledCurrentTableMeas = styled.p`
  grid-area: measured;
`;
export const StyledCurrentTableOnOff = styled.p`
  grid-area: onoff;
`;

export const StyledCurrentInput = styled.input`
  width: 6em;
  grid-area: input;
`;

export const StyledCurrentInputLabel = styled.label`
  display: none;
`;
