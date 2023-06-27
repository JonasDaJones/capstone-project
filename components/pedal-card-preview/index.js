import React from "react";
import Image from "next/image";

import {
  PedalPreview,
  ImageWrapper,
  TagContainer,
  Tag,
} from "./pedal-card-preview.styled";

const PedalCardPreview = ({ pedalData }) => {
  return (
    <PedalPreview>
      <div>
        <h3>{pedalData.NAME}</h3>
        <h4>{pedalData.MANUFACTURER}</h4>
      </div>
      <ImageWrapper>
        <Image
          src={pedalData.imagePath}
          alt={pedalData.name}
          width={200}
          height={240}
        />
      </ImageWrapper>
      <p>{pedalData.CATEGORY}</p>
      <TagContainer>
        {pedalData.TAGS.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
    </PedalPreview>
  );
};

export default PedalCardPreview;
