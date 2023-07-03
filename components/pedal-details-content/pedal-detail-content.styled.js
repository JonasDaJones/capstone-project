import styled from "styled-components";

export const StyledHead = styled.header`
  background-color: #706470;
  display: grid;
  margin: 0;
  padding: 0.5rem 0.5rem 0 0.5rem;
  grid-template-areas:
    "a b b c "
    "d d d d";
`;

export const StyledPedalTitle = styled.h1`
  grid-area: b;
  padding: 0;
  margin: 0.25em auto;
  color: whitesmoke;
`;
export const StyledHamburger = styled.span`
  grid-area: c;
  text-align: right;
`;

export const StyledTabBar = styled.div`
  grid-area: d;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

export const StyledTabButton = styled.button`
  opacity: ${({ active }) => (active ? "1" : "0.6")};
  width: 25%;
  height: fit-content;
  padding: 5px;
  background-color: whitesmoke;
  border-radius: 5px 5px 0 0;
`;

export const StyledContentWrapper = styled.section`
  height: 100vh;
  background-color: #706470;
  padding: 0 0.5rem;
`;
