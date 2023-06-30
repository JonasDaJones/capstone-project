import React from "react";

import PedalMainPage from "../pedal-details-main/index";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const PedalDetailMainContent = ({ id }) => {
  const pedalData = pedals.find((pedal) => pedal.id === id);

  return (
    <>
      {pedalData ? (
        <>
          <PedalMainPage pedalData={pedalData} />
          <Tab2 pedalData={pedalData} />
          <Tab3 pedalData={pedalData} />
        </>
      ) : (
        <h3>No pedal found</h3>
      )}
    </>
  );
};

export default PedalDetailMainContent;
