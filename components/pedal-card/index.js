import React from "react";

const PedalCardMain = ({ pedalData }) => {
  return (
    <div>
      <div>
        <h2>{pedalData.NAME}</h2>
      </div>
      <div>
        <p>{pedalData.IMAGE}</p>
        <p>{pedalData.CATEGORY}</p>
        <p>{pedalData.MANUFACTURER}</p>
        <p>Made in: {pedalData.MADE_IN}</p>
        <p>{pedalData.MY_COMMENT}</p>
      </div>
    </div>
  );
};

export default PedalCardMain;
