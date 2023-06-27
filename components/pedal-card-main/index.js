import React from "react";
import { Pedals } from "@/lib/pedalfx-data";
import { PedalPreview } from "../pedal-card-preview/pedal-card-preview.styled";
import Image from "next/image";
import { Header } from "../reusable-styles/resusable.styled";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";

const PedalCardMain = ({ pedalData }) => {
  return (
    <>
      <Header>{pedalData.NAME}</Header>
      <PedalPreview>
        <div>
          <Image
            src={pedalData.imagePath}
            alt={pedalData.name}
            width={200}
            height={240}
          />
          <p>{pedalData.CATEGORY}</p>
          <p>{pedalData.MANUFACTURER}</p>
          <p>Made in: {pedalData.MADE_IN}</p>

          <p>{pedalData.MY_COMMENT}</p>
        </div>
      </PedalPreview>
    </>
  );
};

export default PedalCardMain;
