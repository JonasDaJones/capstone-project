import React from "react";
import PedalGallery from "../components/pedal-gallery/index";
import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <MainHead>My Sound Journal</MainHead>
      <PedalGallery />
      <Link href="/new-pedal">Add a Pedal</Link>
    </div>
  );
}

const MainHead = styled.h1`
  text-align: center;
  margin: 0 auto;
`;
