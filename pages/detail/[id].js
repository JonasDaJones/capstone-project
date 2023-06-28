import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Pedals } from "../../lib/pedalfx-data.js";
import { HiddenId } from "../../components/reusable-styles.styled.js";
import {
  TagContainer,
  Tag,
} from "../../components/pedal-card-preview/pedal-card-preview.styled.js";
const PedalDetailMain = () => {
  const router = useRouter();
  const { id } = router.query;

  const pedalData = Pedals.find((pedal) => pedal.id === id);

  return (
    <div>
      {pedalData ? (
        <>
          <h1>{pedalData.NAME}</h1>
          <HiddenId>ID: {id}</HiddenId>
          <p>{pedalData.MANUFACTURER}</p>
          <p>{pedalData.MADE_IN}</p>
          <div>
            {pedalData.CATEGORY.map((category, index) => (
              <p key={index}>{category}</p>
            ))}
          </div>
          <p>{pedalData.MONO_STEREO}</p>
          <p>{pedalData.BYPASS}</p>

          <p>{pedalData.NICE_TO_KNOW}</p>
          <Image
            src={pedalData.imagePath}
            alt={pedalData.name}
            width={200}
            height={260}
          />
          <p>{pedalData.MY_COMMENT}</p>
          <TagContainer>
            {pedalData.TAGS.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagContainer>
        </>
      ) : (
        <p>No pedal found</p>
      )}
    </div>
  );
};
export default PedalDetailMain;
