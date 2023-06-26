import React from "react";
import { MainCard } from "./pedal-card.styled";

const PedalCardMain = ({ pedalData }) => {
  return (
    <MainCard>
      <div>
        <h3>{pedalData.NAME}</h3>
      </div>
      <div>
        <p>{pedalData.IMAGE}</p>
        <p>{pedalData.CATEGORY}</p>
        <p>{pedalData.MANUFACTURER}</p>
        <p>Made in: {pedalData.MADE_IN}</p>
        <p>{pedalData.MY_COMMENT}</p>
      </div>
    </MainCard>
  );
};

export default PedalCardMain;
