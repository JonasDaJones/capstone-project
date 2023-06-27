import React from "react";
import { Pedals } from "@/lib/pedalfx-data";
import { PedalPreview } from "../pedal-card-preview/pedal-card-preview.styled";
import Image from "next/image";

const PedalCardMain = ({ pedalData }) => {
  return (
    <PedalPreview>
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
    </PedalPreview>
  );
};

export default PedalCardMain;
