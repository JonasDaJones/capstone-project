import styled from "styled-components";

export const StyledPedalPreview = styled.div`
  background-color: #706470;
  width: 80%;
  max-width: 350px;
  padding: 0.5em;
  margin: 0.75em;
  display: grid;
  grid-template-areas:
    "name . category"
    "manufacturer . category"
    "image image image"
    "tags tags tags";
  place-items: start;
  border-radius: 3px;
`;

export const StyledPedalName = styled.h3`
  grid-area: name;
  margin: 3px;
  padding: 1px;
  color: whitesmoke;
`;

export const StyledPedalManufacturer = styled.p`
  grid-area: manufacturer;
  font-weight: bold;
  color: whitesmoke;
`;

export const StyledImageWrapper = styled.figure`
  grid-area: image;
  justify-self: center;
  position: relative;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px -5px 15px 6px rgba(255, 255, 255, 0.98);
  }
`;

export const StyledHint = styled.figcaption`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledCategoryWrapper = styled.ul`
  list-style: none;
  grid-area: category;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 1em;
  background-color: transparent;
  z-index: 2;
`;

export const StyledCategory = styled.li`
  justify-content: flex-end;
  height: fit-content;
  width: fit-content;
  padding: 1px 0.5em;
  margin: 0.3em 0 0 0.5em;
  border-radius: 25px;
  background-color: #b52490;
  color: whitesmoke;
`;

export const StyledTagContainer = styled.ul`
  list-style: none;
  grid-area: tags;
  align-self: flex-end;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-content: flex-start;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 1em;
  height: fit-content;
`;

export const StyledTag = styled.li`
  width: fit-content;
  padding: 2px 2px;
  margin: 0.2em;
  border-radius: 5px;
  background-color: #bfcadb;
`;
