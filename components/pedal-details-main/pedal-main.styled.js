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
`;
export const StyledComment = styled.cite`
  grid-area: comment;
  background-color: #90b524;
  color: whitesmoke;
  border-radius: 15px;
  padding: 1em;
`;
export const StyledTipp = styled.p`
  grid-area: tipp;
  background-color: #90b524;
  color: whitesmoke;
  border-radius: 15px;
  padding: 1em;
`;
export const StyledPedalManufacturerDetail = styled(PedalManufacturer)`
  color: black;
`;
