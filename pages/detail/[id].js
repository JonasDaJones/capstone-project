import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import { Pedals } from "../../lib/pedalfx-data.js";

import {
  TagContainer,
  Tag,
} from "../../components/pedal-card-preview/pedal-card-preview.styled.js";
import BackButton from "../../components/back-button/back-button.styled.js";

const PedalDetailMain = () => {
  const router = useRouter();
  const { id } = router.query;

  const pedalData = Pedals.find((pedal) => pedal.id === id);

  return (
    <>
      <StyledDetailHead>
        <BackButton>Back</BackButton>
        <StyledDetailTitle>{pedalData.NAME}</StyledDetailTitle>
        <div>...</div>
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

export const StyledDetailMain = styled.main`
  background-color: antiquewhite;
  color: black;
`;

export const StyledDetailHead = styled.header`
  background-color: darkgray;
  width: 100%;
  margin: 0;
  padding: 10px, 10px, 10px, 20px;
  display: flex;
  justify-content: space-between;
  //box-shadow: 0px 10px 6px 0px #2596be;
`;

export const StyledDetailTitle = styled.h1`
  color: whitesmoke;
  margin: 0;
  padding: 0;
`;

export const StyledTextBox = styled.div`
  background-color: #bea925;
  max-width: 350px;
  color: black;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`;
