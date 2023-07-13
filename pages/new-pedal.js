import React from "react";
import NewPedalForm from "../components/new-pedal-form";

export default function AddPedal({ pedals, handlePedalSubmit }) {
  return (
    <>
      <header>
        <h1>New Pedal 🤩</h1>
      </header>
      <NewPedalForm pedals={pedals} onHandlePedalSubmit={handlePedalSubmit} />
    </>
  );
}
