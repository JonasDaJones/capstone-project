import React from "react";
import { useRouter } from "next/router";
import { pedals } from "../../lib/pedalfx-data.js";
import Image from "next/image";
import NavButton from "../../components/nav-button/index.js";
import {
  Tag,
  TagContainer,
  CategoryWrapper,
} from "../../components/pedal-card-preview/pedal-card-preview.styled.js";

export default function PedalDetailMain() {
  const router = useRouter();
  const { id } = router.query;

  const pedalData = pedals.find((pedal) => pedal.id === id);

  return (
    <>
      <header>
        <NavButton label="back" />

        <h1>Shelf</h1>
      </header>
      <main>
        {pedalData ? (
          <>
            <p>ID: {id}</p>
            <p>{pedalData.name}</p>
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
        ) : (
          <h3>No pedal found</h3>
        )}
      </main>
    </>
  );
}
