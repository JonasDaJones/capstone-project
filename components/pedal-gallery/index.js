import PedalCardPreview from "../pedal-card-preview/index";
import { ShowCase, GalleryWrapper, StyledLink } from "./pedal-gallery.styled";
const PedalGallery = ({ pedals }) => {
  return (
    <GalleryWrapper>
      <h2>My Pedals</h2>
      <ShowCase>
        {pedals.map((pedal) => (
          <PedalCardPreview key={pedal.id} pedalData={pedal} />
        ))}
      </ShowCase>

      <StyledLink href="/new-pedal">Add a Pedal</StyledLink>
    </GalleryWrapper>
  );
};

export default PedalGallery;
