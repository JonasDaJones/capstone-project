import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Pedals } from "../../lib/pedalfx-data.js";
import {
  StyledDetailMain,
  StyledDetailHead,
  StyledDetailTitle,
  StyledTextBox,
} from "./detail.styled.js";
import {
  TagContainer,
  Tag,
} from "../../components/pedal-card-preview/pedal-card-preview.styled.js";
import BackButton from "@/components/back-button/index.js";
const PedalDetailMain = () => {
  const router = useRouter();
  const { id } = router.query;

  const pedalData = Pedals.find((pedal) => pedal.id === id);

  return (
    <>
      <StyledDetailHead>
        <BackButton>Back</BackButton>
        <StyledDetailTitle>{pedalData.NAME}</StyledDetailTitle>
        <div></div>
      </StyledDetailHead>
      <StyledDetailMain>
        {pedalData ? (
          <>
            <p>ID: {id}</p>
            <p>{pedalData.MANUFACTURER}</p>
            <p>made in {pedalData.MADE_IN}</p>
            <div>
              {pedalData.CATEGORY.map((category, index) => (
                <p key={index}>{category}</p>
              ))}
            </div>
            <p>{pedalData.MONO_STEREO}</p>
            <p>Bypass: {pedalData.BYPASS}</p>

            <StyledTextBox>
              nice to know: {pedalData.NICE_TO_KNOW}
            </StyledTextBox>
            <Image
              src={pedalData.imagePath}
              alt={pedalData.NAME}
              width={200}
              height={260}
            />
            <p>my comment: {pedalData.MY_COMMENT}</p>
            <TagContainer>
              {pedalData.TAGS.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagContainer>
          </>
        ) : (
          <p>No pedal found</p>
        )}
      </StyledDetailMain>
    </>
  );
};
export default PedalDetailMain;
