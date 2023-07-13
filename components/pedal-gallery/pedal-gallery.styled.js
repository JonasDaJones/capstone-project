import styled from "styled-components";
import Link from "next/link";
export const ShowCase = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  div {
    flex: 0 0 auto;
    margin-right: 10px;
    margin-bottom: 2rem;
    box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, 0.88);
  }
`;
export const GalleryWrapper = styled.section`
  background-color: darkgray;
  color: black;
`;

export const StyledLink = styled(Link)`
  color: whitesmoke;
  font-weight: bold;
  text-decoration: none;
  font-size: 24px;
  &:hover {
    color: whitesmoke;
    text-shadow: -5px 5px 5px #b52490;
  }
`;
