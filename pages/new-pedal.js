import React from "react";
import NewPedalForm from "../components/new-pedal-form";

export default function AddPedal(pedals, setPedals) {
  return (
    <>
      <header>
        <h1>New Pedal \o/</h1>
      </header>
      <NewPedalForm pedals={pedals} setPedals={setPedals} />
    </>
  );
}
