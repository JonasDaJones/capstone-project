import styled from "styled-components";
export const ShowCase = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  > * {
    flex: 0 0 auto;
    margin-right: 10px;
    box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, 0.88);
  }
`;
export const GalleryWrapper = styled.section`
  background-color: darkgray;
  color: black;
`;
