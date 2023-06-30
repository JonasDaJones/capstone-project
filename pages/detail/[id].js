import React from "react";
import { useRouter } from "next/router";
import { pedals } from "../../lib/pedalfx-data.js";
import Image from "next/image";
import BackButton from "../../components/back-button/index.js";
import {
  Tag,
  TagContainer,
} from "../../components/pedal-card-preview/pedal-card-preview.styled.js";

export default function PedalDetailMain() {
  const router = useRouter();
  const { id } = router.query;

  const pedalData = pedals.find((pedal) => pedal.id === id);

  return (
    <>
      <header>
        <BackButton>Back</BackButton>

        <h1>Shelf</h1>
      </header>
      <main>
        {pedalData ? (
          <>
            <p>ID: {id}</p>
            <p>{pedalData.name}</p>
            <p>{pedalData.MANUFACTURER}</p>
            <p>made in: {pedalData.MADE_IN}</p>
            <div>
              {pedalData.CATEGORY.map((category, index) => (
                <p key={index}>{category}</p>
              ))}
            </div>
            <p>{pedalData.MONO_STEREO}</p>
            <p>Bypass: {pedalData.BYPASS}</p>

            <div>nice to know: {pedalData.NICE_TO_KNOW}</div>
            <Image
              src={pedalData.imagePath}
              alt={pedalData.name}
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
      </main>
    </>
  );
}
