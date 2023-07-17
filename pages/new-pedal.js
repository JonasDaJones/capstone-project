import { useState } from "react";
import NewPedalForm from "../components/new-pedal-form";

export default function AddPedal({ pedals, onHandlePedalSubmit }) {
  const [name, setName] = useState("");
  const [imagePath, setImagePath] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImagePathChange = (newImagePath) => {
    setImagePath(newImagePath);
  };

  return (
    <>
      <header>
        <h1>{name ? name : "New Pedal"} 🤩</h1>
      </header>
      <NewPedalForm
        pedals={pedals}
        onHandlePedalSubmit={onHandlePedalSubmit}
        onNameChange={handleNameChange}
        imagePath={imagePath}
        onImagePathChange={handleImagePathChange}
      />
    </>
  );
}
