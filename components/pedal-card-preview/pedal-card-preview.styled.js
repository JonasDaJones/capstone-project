import styled from "styled-components";

export const PedalPreview = styled.div`
  background-color: #706470;
  width: 80%;
  height: fit-content;
  max-width: 350px;

  padding: 0.5em;
  margin: 0.75em;
  display: grid;
  //grid-template-columns: 1fr 1fr 1fr 1fr;
  //grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "a b c"
    "d e f"
    "g g g"
    "h h h";
  place-items: start;
  border-radius: 3px;
`;

export const PedalName = styled.h3`
  grid-area: a;
  margin: 3px;
  padding: 1px;
`;

export const PedalManufacturer = styled.p`
  grid-area: d;
  margin: 0;
  margin-bottom: 1em;
  font-weight: bold;
`;

export const PedalTitle = styled.div`
  //grid-column: 1 / span 2;
`;

export const ImageWrapper = styled.figure`
  grid-area: g;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px -5px 15px 6px rgba(255, 255, 255, 0.98);
  }

  //grid-column: 1 / span 4;
  //grid-row: 2 / span 2;
  //justify-self: center;
`;

export const Hint = styled.figcaption`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
`;

export const CategoryWrapper = styled.div`
  grid-area: c;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  padding: 0;
  margin-right: 10px;
  background-color: transparent;
  //grid-column: 4 / span 1;
  //grid-row: 1 / 2;

  > * {
    justify-content: flex-end;
    height: fit-content;
    width: fit-content;
    padding: 1px 0.5em;
    margin: 0;
    background-color: orange;
  }
`;

export const TagContainer = styled.div`
  grid-area: h;
  //grid-column: 1 / -1;
  align-self: flex-end;
  margin-right: 10px;
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
  width: fit-content;
  padding: 2px 2px;
  margin: 2px;
  border-radius: 5px;
  background-color: #bfcadb;
`;
