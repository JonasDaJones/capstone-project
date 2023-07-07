import styled from "styled-components";
import { PedalManufacturer } from "../pedal-card-preview/pedal-card-preview.styled";
export const StyledContentMain = styled.main`
  background-color: whitesmoke;
  padding: 0.5em;
  display: grid;
  gap: 1em;
  grid-template-areas:
    "manufacturer manufacturer category"
    "bypass mono category"
    "comment comment comment"
    "image image image"
    "tipp tipp tipp"
    "tags tags tags";
`;
export const StyledMono = styled.p`
  grid-area: mono;
`;
export const StyledBypass = styled.p`
  grid-area: bypass;
  margin-bottom: 1em;
`;
export const StyledCommentField = styled.div`
  grid-area: comment;
  width: fit-content;
  height: fit-content;
  background: transparent;
  position: relative;
`;
export const StyledCommentLegend = styled.span`
  color: whitesmoke;
  position: absolute;
  top: -1.7em;
  left: 1.5em;
  text-shadow: -1px 1px 2px #90b524, 1px -1px 2px #90b524, 1px -1px 0 #90b524,
    -1px 1px 0 #90b524;
  padding: 0.2em;
`;
export const StyledComment = styled.cite`
  background-color: #90b524;
  color: whitesmoke;
  border-radius: 5px;
  padding: 1em;
`;
export const StyledTippField = styled.div`
  grid-area: tipp;
  background: transparent;
  width: fit-content;
  height: fit-content;
  position: relative;
`;

export const StyledTippLegend = styled.span`
  color: whitesmoke;
  position: absolute;
  top: -0.7em;
  left: 1.5em;
  text-shadow: -1.5px 1px 3px #90b524, 1px -1px 2px #90b524, 1px -1px 0 #90b524,
    -1.5px 1px 0 #90b524;
  padding: 0.2em;
`;
export const StyledTipp = styled.p`
  background-color: #90b524;
  color: whitesmoke;
  border-radius: 15px;
  padding: 1em;
`;
export const StyledPedalManufacturerDetail = styled(PedalManufacturer)`
  color: black;
`;
