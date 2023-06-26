import React from "react";
import PedalCardMain from "../pedal-card/index";
import { Pedals } from "../../lib/pedalfx-data";
import { ShowCase } from "./pedal-gallery.styled";

const PedalGallery = () => {
  return (
    <ShowCase>
      {Pedals.map((pedalData, id) => (
        <PedalCardMain key={id} pedalData={pedalData} />
      ))}
    </ShowCase>
  );
};

export default PedalGallery;
