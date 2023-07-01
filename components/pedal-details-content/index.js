import React from "react";
import { pedals } from "../../lib/pedalfx-data";
import NavButton from "../nav-button/index";
import PedalMainPage from "../pedal-details-main/index";
import PedalSpecs from "../pedal-details-specs";
import PedalSound from "../pedal-details-sound";

export default function PedalDetailContent({ id }) {
  const pedalData = pedals.find((pedal) => pedal.id === id);

  return (
    <>
      <header>
        <NavButton label="back" />
        <h1>{pedalData?.name}</h1>
      </header>
      {pedalData ? (
        <>
          <PedalMainPage pedalData={pedalData} />
          <PedalSpecs pedalData={pedalData} />
          <PedalSound pedalData={pedalData} />
        </>
      ) : (
        <h3>No pedal found</h3>
      )}
    </>
  );
}
