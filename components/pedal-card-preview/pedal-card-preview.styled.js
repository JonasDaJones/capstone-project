//import { pageExtensions } from "@/next.config";
import styled from "styled-components";

export const PedalPreview = styled.div`
  background-color: antiquewhite;
  width: 80%;
  max-width: 350px;

  padding: 0.5em;
  margin: 0.75em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  place-items: start;
  border-radius: 3px;
`;

export const PedalName = styled.h3`
  margin: 3px;
  padding: 0;
`;

export const PedalManufacturer = styled.p`
  margin: 0;
  margin-bottom: 1em;
  font-weight: bold;
`;

export const PedalTitle = styled.div`
  grid-column: 1 / span 2;
`;

export const ImageWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1 / span 4;
  grid-row: 2 / span 2;
  justify-self: center;
`;

export const Hint = styled.figcaption`
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const CategoryWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
  grid-column: 4 / span 1;
  grid-row: 1 / 2;

  > * {
    justify-content: flex-end;
    height: fit-content;
    width: fit-content;
    padding: 1px 5px;
    margin-right: 0.5em;
    margin-top: 0.2em;
    background-color: orange;
  }
`;

export const TagContainer = styled.div`
  grid-column: 1 / -1;
  align-self: flex-end;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-content: flex-start;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 5px;
  height: fit-content;
`;

export const Tag = styled.span`
  height: fit-content;
  width: fit-content;
  padding: 2px 0.5em;
  margin: 2px;
  border-radius: 5px;
  background-color: #bfcadb;
`;
