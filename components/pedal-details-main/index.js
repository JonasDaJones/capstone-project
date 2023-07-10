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

export default function PedalMainPage({ pedalData }) {
  return (
    <StyledContentMain>
      <StyledPedalManufacturerDetail>
        {pedalData.manufacturer}, {pedalData.made_in}
      </StyledPedalManufacturerDetail>
      <CategoryWrapper>
        {pedalData.category.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </CategoryWrapper>
      <StyledMono>{pedalData.mono_stereo}</StyledMono>
      <StyledBypass>{pedalData.bypass} bypass</StyledBypass>
      <StyledCommentField>
        <StyledCommentLegend>my comment</StyledCommentLegend>
        <StyledComment>{pedalData.my_comment}</StyledComment>
      </StyledCommentField>
      <ImageWrapper>
        <Image
          src={pedalData.imagePath}
          alt={pedalData.name}
          width={150}
          height={200}
        />
      </ImageWrapper>
      <StyledTippField>
        <StyledTippLegend>nice to know</StyledTippLegend>
        <StyledTipp>{pedalData.nice_to_know}</StyledTipp>
      </StyledTippField>
      <TagContainer>
        {pedalData.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
    </StyledContentMain>
  );
}
