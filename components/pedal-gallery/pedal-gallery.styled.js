import styled from "styled-components";

export const ShowCase = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  background-color: darkgray;

  > * {
    flex 0 0 auto;
    scroll-snap-align: center;
    margin-right: 10px;
  }
`;
