import React from "react";
import Image from "next/image";

import {
  PedalPreview,
  PedalTitle,
  PedalName,
  ImageWrapper,
  CategoryWrapper,
  PedalManufacturer,
  TagContainer,
  Tag,
  Hint,
} from "./pedal-card-preview.styled";

const PedalCardPreview = ({ pedalData }) => {
  return (
    <PedalPreview>
      <PedalTitle>
        <PedalName>{pedalData.NAME}</PedalName>
        <PedalManufacturer>{pedalData.MANUFACTURER}</PedalManufacturer>
      </PedalTitle>

      <CategoryWrapper>
        {pedalData.CATEGORY.map((category, index) => (
          <div key={index}>{category}</div>
        ))}
      </CategoryWrapper>
      <ImageWrapper>
        <Image
          src={pedalData.imagePath}
          alt={pedalData.name}
          width={200}
          height={240}
        />
      </ImageWrapper>

      <TagContainer>
        {pedalData.TAGS.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
    </PedalPreview>
  );
};

export default PedalCardPreview;
