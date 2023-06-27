import React from "react";
import PedalCardPreview from "../pedal-card-preview/index";
import { Pedals } from "../../lib/pedalfx-data";
import { ShowCase } from "./pedal-gallery.styled";

const PedalGallery = () => {
  return (
    <div>
      <h2>My Pedals</h2>
      <ShowCase>
        {Pedals.map((pedalData, id) => (
          <PedalCardPreview key={id} pedalData={pedalData} />
        ))}
      </ShowCase>
    </div>
  );
};

export default PedalGallery;
