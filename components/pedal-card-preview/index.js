import React from "react";
import Image from "next/image";
import { PedalPreview, TagContainer, Tag } from "./pedal-card-preview.styled";

const PedalCardPreview = ({ pedalData }) => {
  return (
    <PedalPreview>
      <div>
        <h3>{pedalData.NAME}</h3>
      </div>
      <div>
        <Image
          src={pedalData.imagePath}
          alt={pedalData.name}
          width={290}
          height={320}
        />
        <p>{pedalData.CATEGORY}</p>
        <p>{pedalData.MANUFACTURER}</p>
        <TagContainer>
          {pedalData.TAGS.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
      </div>
    </PedalPreview>
  );
};

export default PedalCardPreview;
