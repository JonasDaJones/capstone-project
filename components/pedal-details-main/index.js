import React from "react";
import Image from "next/image";
import {
  CategoryWrapper,
  ImageWrapper,
  Tag,
  TagContainer,
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
  console.log(currentPedal);
  return (
    <StyledContentMain>
      <StyledPedalManufacturerDetail>
        {currentPedal.manufacturer}, {currentPedal.made_in}
      </StyledPedalManufacturerDetail>
      <CategoryWrapper>
        {currentPedal.category.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </CategoryWrapper>
      <StyledMono>{currentPedal.mono_stereo}</StyledMono>
      <StyledBypass>{currentPedal.bypass} bypass</StyledBypass>
      <StyledCommentField>
        <StyledCommentLegend>my comment</StyledCommentLegend>
        <StyledComment>{currentPedal.my_comment}</StyledComment>
      </StyledCommentField>
      <ImageWrapper>
        <Image
          src={currentPedal.imagePath}
          alt={currentPedal.name}
          width={150}
          height={200}
        />
      </ImageWrapper>
      <StyledTippField>
        <StyledTippLegend>nice to know</StyledTippLegend>
        <StyledTipp>{currentPedal.nice_to_know}</StyledTipp>
      </StyledTippField>
      <TagContainer>
        {currentPedal.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
    </StyledContentMain>
  );
}
