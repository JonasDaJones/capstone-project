import React from "react";
import PedalGallery from "../components/pedal-gallery/index";
import styled from "styled-components";
import { usePedalsFromLocalStorage } from "../hooks/usePedalsFromLocalStorage";

export default function HomePage() {
  const { pedals, savePedals } = usePedalsFromLocalStorage();
  return (
    <div>
      <MainHead>My Sound Journal</MainHead>
      <PedalGallery pedals={pedals} />
    </div>
  );
}

const MainHead = styled.h1`
  text-align: center;
  margin: 0 auto;
`;
