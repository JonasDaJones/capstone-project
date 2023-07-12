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

const PedalCardPreview = ({ pedal }) => {
  const categories =
    pedal.category && Array.isArray(pedal.category) ? pedal.category : [];
  const tagArray = Array.isArray(pedal.tags) ? pedal.tags : [pedal.tags];

  return (
    <StyledPedalPreview>
      <StyledPedalName>{pedal.name}</StyledPedalName>
      <StyledPedalManufacturer>{pedal.manufacturer}</StyledPedalManufacturer>

      <StyledCategoryWrapper>
        {categories.map((category) => (
          <StyledCategory key={category}>{category}</StyledCategory>
        ))}
      </StyledCategoryWrapper>
      <StyledImageWrapper>
        <Link href={`/detail/${pedal.id}`}>
          <Image
            src={pedal.imagePath}
            alt={pedal.name}
            width={200}
            height={260}
          />
        </Link>
        <StyledHint>please click image for details</StyledHint>
      </StyledImageWrapper>

      <StyledTagContainer>
        {tagArray.map((tag) => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </StyledTagContainer>
    </StyledPedalPreview>
  );
};

export default PedalCardPreview;
