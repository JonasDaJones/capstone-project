import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import NewPedalForm from "../components/NewPedalForm";

export default function AddPedal({ pedals, onHandlePedalSubmit }) {
  const [pedalName, setPedalName] = useState("");
  const [formData, setFormData] = useLocalStorageState({
    pedalName: "",
    manufacturer: "",
    madeIn: "",
    width: "",
    depth: "",
    height: "",
    stereo: false,
    tags: [],
    selectedCategory: [],
    bypass: "",
    voltage: "",
    battery: "",
    polarity: "",
    inputImpedance: "",
    outputImpedance: "",
    bypassCurrentDrawManufacturer: 0,
    engagedCurrentDrawManufacturer: 0,
    bypassCurrentDrawOwnMeasurement: 0,
    engagedCurrentDrawOwnMeasurement: 0,
  });

  const handlePedalNameChange = (event) => {
    setPedalName(event.target.value);
  };

  const onHandleFormChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleReset = () => {
    setPedalName("");
    setFormData({
      pedallName: "",
      manufacturer: "",
      madeIn: "",
      width: "",
      depth: "",
      height: "",
      stereo: false,
      tags: [],
      selectedCategory: [],
      bypass: "",
      voltage: "",
      battery: "",
      polarity: "",
      inputImpedance: "",
      outputImpedance: "",
      bypassCurrentDrawManufacturer: 0,
      engagedCurrentDrawManufacturer: 0,
      bypassCurrentDrawOwnMeasurement: 0,
      engagedCurrentDrawOwnMeasurement: 0,
    });
  };

  return (
    <>
      <header>
        <h1>{pedalName ? pedalName : "New Pedal"} 🤩</h1>
      </header>
      <NewPedalForm
        pedals={pedals}
        formData={formData}
        onHandlePedalSubmit={onHandlePedalSubmit}
        onNameChange={handlePedalNameChange}
        onFormChange={onHandleFormChange}
        onReset={handleReset}
      />
    </>
  );
}
