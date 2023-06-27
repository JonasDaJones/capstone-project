import React from "react";
import PedalCardPreview from "../pedal-card-preview/index";
import { Pedals } from "../../lib/pedalfx-data";
import { ShowCase } from "./pedal-gallery.styled";

const PedalGallery = () => {
  return (
    <ShowCase>
      {Pedals.map((pedalData, id) => (
        <PedalCardPreview key={id} pedalData={pedalData} />
      ))}
    </ShowCase>
  );
};

export default PedalGallery;
