import React from "react";
import PedalGallery from "../components/pedal-gallery/index";
import styled from "styled-components";
import { pedals as mockPedals } from "../lib/pedalfx-data";
import useLocalStorageState from "use-local-storage-state";

export default function HomePage() {
  const [pedals, setPedals] = useLocalStorageState("pedals", {
    defaultValue: mockPedals,
  });
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
