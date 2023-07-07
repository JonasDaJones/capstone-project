import React from "react";
import PedalCardPreview from "../pedal-card-preview/index";
import { pedals } from "../../lib/pedalfx-data";
import { ShowCase, GalleryWrapper } from "./pedal-gallery.styled";
import Link from "next/link";
const PedalGallery = () => {
  return (
    <GalleryWrapper>
      <h2>My Pedals</h2>
      <ShowCase>
        {pedals.map((pedalData, id) => (
          <PedalCardPreview key={id} pedalData={pedalData} />
        ))}
      </ShowCase>
      <Link href="/new-pedal">Add a Pedal</Link>
    </GalleryWrapper>
  );
};
export default PedalGallery;
