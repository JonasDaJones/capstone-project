import React from "react";
import { Pedals } from "@/lib/pedalfx-data";
import Image from "next/image";

const PedalCardMain = ({ pedalData }) => {
  return (
    <Preview>
      <div>
        <h2>{pedalData.NAME}</h2>
      </div>
      <div>
        <Image
          src={pedalData.imagePath}
          alt={pedalData.name}
          width={290}
          height={320}
        />
        <p>{pedalData.CATEGORY}</p>
        <p>{pedalData.MANUFACTURER}</p>
        <p>Made in: {pedalData.MADE_IN}</p>

        <p>{pedalData.MY_COMMENT}</p>
      </div>
    </Preview>
  );
};

export default PedalCardMain;
