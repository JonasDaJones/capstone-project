import styled from "styled-components";

export const StyledListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid darkslategray;
`;
export const StyledListContainerTitle = styled.p`
  padding: 0.2em;
  margin: 0;
  font-size: 0.8em;
`;
export const StyledInputList = styled.ul`
  min-height: 1em;
  height: fit-content;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  padding: 0;
`;

export const StyledListButton = styled.button`
  background: transparent;
  margin-left: 0.5em;
`;

export const StyledListItem = styled.li`
  padding: 0.2em 0.5em;
  margin: 0.2em;
  border: 1px solid var(--lightfont);
`;

export const StyledListInput = styled.input`
  flex-grow: 1;
  padding: 0.5em;
  border: none;
`;

export const StyledListInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid darkslategray;
  margin-bottom: 0;
  z-index: 1;
`;
