import React from "react";
import PedalCardPreview from "../pedal-card-preview/index";
import { Pedals } from "../../lib/pedalfx-data";
import { ShowCase, GalleryWrapper } from "./pedal-gallery.styled";

const PedalGallery = () => {
  return (
    <GalleryWrapper>
      <h2>My Pedals</h2>
      <ShowCase>
        {Pedals.map((pedalData, id) => (
          <PedalCardPreview key={id} pedalData={pedalData} />
        ))}
      </ShowCase>
    </GalleryWrapper>
  );
};

export default PedalGallery;
