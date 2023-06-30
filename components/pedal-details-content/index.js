import React from "react";
import PedalMainPage from "../pedal-details-main/index";
import PedalSpecs from "../pedal-details-specs";
import PedalSound from "../pedal-details-sound";

const PedalDetailMainContent = ({ id }) => {
  const pedalData = pedals.find((pedal) => pedal.id === id);

  return (
    <>
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
};

export default PedalDetailMainContent;
