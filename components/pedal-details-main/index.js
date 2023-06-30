import React from "react";
import Image from "next/image";
import {
  CategoryWrapper,
  Tag,
  TagContainer,
} from "../pedal-card-preview/pedal-card-preview.styled";

export default function PedalMainPage({ pedalData }) {
  return (
    <>
      <p>{pedalData.manufacturer}</p>
      <p>made in: {pedalData.made_in}</p>

      <CategoryWrapper>
        {pedalData.category.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </CategoryWrapper>
      <p>{pedalData.mono_stereo}</p>
      <p>Bypass: {pedalData.bypass}</p>

      <div>nice to know: {pedalData.nice_to_know}</div>
      <Image
        src={pedalData.imagePath}
        alt={pedalData.name}
        width={200}
        height={260}
      />
      <p>my comment: {pedalData.my_comment}</p>

      <TagContainer>
        {pedalData.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
    </>
  );
}
