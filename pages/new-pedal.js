import { useState } from "react";
import NewPedalForm from "../components/new-pedal-form";

export default function AddPedal({ pedals, onHandlePedalSubmit }) {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [imagePath, setImagePath] = useState("");

  return (
    <>
      <header>
        <h1>{name ? name : "New Pedal"} 🤩</h1>
      </header>
      <NewPedalForm
        pedals={pedals}
        imagePath={imagePath}
        setImagePath={setImagePath}
        onHandlePedalSubmit={onHandlePedalSubmit}
        onNameChange={handleNameChange}
      />
    </>
  );
}
