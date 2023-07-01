import styled from "styled-components";
import Link from "next/link";

export const StyledNavButton = styled(Link)`
  text-decoration: none;
  width: fit-content;
  font-weight: bold;
  color: black;
  background-color: whitesmoke;
  border: 2px solid black;
  border-radius: 10px;
  padding: 2px;
  margin: 2px;
  top: 5px;
  left: 5px;
  grid-area: a;
`;
