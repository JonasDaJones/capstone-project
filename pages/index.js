import React from "react";
import PedalGallery from "../components/pedal-gallery/index";
import styled from "styled-components";

export default function HomePage({ pedals, onHandlePedalSubmit }) {
  return (
    <div>
      <MainHead>My Sound Journal</MainHead>
      <PedalGallery pedals={pedals} setPedals={onHandlePedalSubmit} />
    </div>
  );
}

const MainHead = styled.h1`
  text-align: center;
  margin: 0 auto;
`;
