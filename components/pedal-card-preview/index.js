import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleImageClick = () => {
    router.push(`/detail/${pedalData.id}`);
  };

  return (
    <PedalPreview>
      <PedalTitle>
        <PedalName>{pedalData.NAME}</PedalName>
        <PedalManufacturer>{pedalData.MANUFACTURER}</PedalManufacturer>
      </PedalTitle>

      <CategoryWrapper>
        {pedalData.CATEGORY.map((category, index) => (
          <p key={index}>{category}</p>
        ))}
      </CategoryWrapper>
      <ImageWrapper>
        <Image
          src={pedalData.imagePath}
          alt={pedalData.name}
          width={200}
          height={260}
          onClick={handleImageClick}
        />
        <Hint>please click image for details</Hint>
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
