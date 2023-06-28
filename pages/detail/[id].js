import React from "react";
import { useRouter } from "next/router";
import { Pedals } from "../../lib/pedalfx-data.js";

export default function PedalDetailMain() {
  const router = useRouter();
  const { id } = router.query;

  const pedalData = Pedals.find((pedal) => pedal.id === id);

  return (
    <div>
      {" "}
      {pedalData ? (
        <>
          <h1>{pedalData.NAME}</h1>
          <p>ID: {id}</p>
          <p>{pedalData.MANUFACTURER}</p>
        </>
      ) : (
        <p>No pedal found</p>
      )}
    </div>
  );
}
