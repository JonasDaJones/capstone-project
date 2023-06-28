import styled from "styled-components";

export const ShowCase = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  > * {
    flex: 0 0 auto;
    scroll-snap-align: center;
    margin-right: 10px;
  }
`;

export const GalleryWrapper = styled.section`
  background-color: darkgray;
  padding: 1em;
  color: f0f0f0f;
  & h2 {
    margin: 0;
  }
`;
