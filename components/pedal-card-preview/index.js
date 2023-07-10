import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  StyledPedalPreview,
  StyledPedalName,
  StyledCategoryWrapper,
  StyledImageWrapper,
  StyledHint,
  StyledPedalManufacturer,
  StyledTagContainer,
  StyledTag,
  StyledCategory,
} from "./pedal-card-preview.styled";

const PedalCardPreview = ({ pedalData }) => {
  return (
    <StyledPedalPreview>
      <StyledPedalName>{pedalData.name}</StyledPedalName>
      <StyledPedalManufacturer>
        {pedalData.manufacturer}
      </StyledPedalManufacturer>

      <StyledCategoryWrapper>
        {pedalData.category.map((category) => (
          <StyledCategory key={category}>
            <p>{category}</p>
          </StyledCategory>
        ))}
      </StyledCategoryWrapper>
      <StyledImageWrapper>
        <Link href={`/detail/${id}`}>
          <Image
            src={pedalData.imagePath}
            alt={pedalData.name}
            width={200}
            height={260}
          />
        </Link>
        <StyledHint>please click image for details</StyledHint>
      </StyledImageWrapper>

      <StyledTagContainer>
        {pedalData.tags.map((tag) => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </StyledTagContainer>
    </StyledPedalPreview>
  );
};

export default PedalCardPreview;
