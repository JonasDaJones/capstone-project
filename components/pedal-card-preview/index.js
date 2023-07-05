import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  PedalPreview,
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
      <PedalName>{pedalData.name}</PedalName>
      <PedalManufacturer>{pedalData.manufacturer}</PedalManufacturer>

      <CategoryWrapper>
        {pedalData.category.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </CategoryWrapper>
      <ImageWrapper>
        <Link href={`/detail/${pedalData.id}`}>
          <Image
            src={pedalData.imagePath}
            alt={pedalData.name}
            width={200}
            height={260}
          />
        </Link>
        <Hint>please click image for details</Hint>
      </ImageWrapper>

      <TagContainer>
        {pedalData.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagContainer>
    </PedalPreview>
  );
};

export default PedalCardPreview;
