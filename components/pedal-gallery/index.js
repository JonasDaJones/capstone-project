import PedalCardPreview from "../pedal-card-preview/index";
import { ShowCase, GalleryWrapper, StyledLink } from "./pedal-gallery.styled";

export default function PedalGallery({ pedals, setPedals }) {
  return (
    <GalleryWrapper>
      <h2>My Pedals</h2>
      <ShowCase>
        {pedals.map((pedal, id) => (
          <PedalCardPreview key={id} pedal={pedal} />
        ))}
      </ShowCase>

      <StyledLink href="/new-pedal">Add a Pedal</StyledLink>
    </GalleryWrapper>
  );
}
