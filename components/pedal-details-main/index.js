import React from "react";
import Image from "next/image";
import {
  StyledCategoryWrapper,
  StyledImageWrapper,
  StyledTag,
  StyledTagContainer,
} from "../pedal-card-preview/pedal-card-preview.styled";
import {
  StyledBypass,
  StyledComment,
  StyledCommentField,
  StyledCommentLegend,
  StyledContentMain,
  StyledMono,
  StyledPedalManufacturerDetail,
  StyledTipp,
  StyledTippField,
  StyledTippLegend,
} from "./pedal-main.styled";

export default function PedalMainPage({ currentPedal }) {
  return (
    <StyledContentMain>
      <StyledPedalManufacturerDetail>
        {currentPedal.manufacturer}, {currentPedal.made_in}
      </StyledPedalManufacturerDetail>
      <StyledCategoryWrapper>
        {currentPedal.category.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </StyledCategoryWrapper>
      <StyledMono>{currentPedal.mono_stereo}</StyledMono>
      <StyledBypass>{currentPedal.bypass} bypass</StyledBypass>
      <StyledCommentField>
        <StyledCommentLegend>my comment</StyledCommentLegend>
        <StyledComment>{currentPedal.my_comment}</StyledComment>
      </StyledCommentField>
      <StyledImageWrapper>
        <Image
          src={currentPedal.imagePath}
          alt={currentPedal.name}
          width={150}
          height={200}
        />
      </StyledImageWrapper>
      <StyledTippField>
        <StyledTippLegend>nice to know</StyledTippLegend>
        <StyledTipp>{currentPedal.nice_to_know}</StyledTipp>
      </StyledTippField>
      <StyledTagContainer>
        {currentPedal.tags.map((tag, index) => (
          <StyledTag key={index}>{tag}</StyledTag>
        ))}
      </StyledTagContainer>
    </StyledContentMain>
  );
}
