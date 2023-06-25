import React from "react";
import styled from "styled-components";
import Pedals from "./pedalfx-data";
import Header from "./styled-head";

export default function PedalGallery() {
  return (
    <Gallery>
      <Header />
      <DisplayCase>
        <Pedals />
      </DisplayCase>
    </Gallery>
  );
}

const Gallery = styled.div`
  background-color: lightgray;
`;

const DisplayCase = styled.ul`
  border: 1px solid hotpink;
  border-radius: 5px;
  background-color: #303030;
  color: antiquewhite;
`;
