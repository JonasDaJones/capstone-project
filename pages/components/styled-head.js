import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2 rem;
  color: chocolate;
`;

const StyledHead = styled.div`
  border: 2px solid greenyellow;
  background-color: yellow;
  text-align: center;
  padding: 2px;
  margin: 0 0 2px 0;
`;

export default function Header() {
  return (
    <StyledHead>
      <Title>Shelf</Title>
    </StyledHead>
  );
}
