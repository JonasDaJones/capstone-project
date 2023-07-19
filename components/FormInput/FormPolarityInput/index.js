import { useState } from "react";
export default function PolarityInput({ onPolarityChange }) {
  const [selectedPolarity, setSelectedPolarity] = useState("");
  const handlePolarityChange = (event) => {
    const newPolarity = event.target.value;
    setSelectedPolarity(newPolarity);
    onPolarityChange(newPolarity);
  };

  return (
    <div>
      <h4>select polarity</h4>
      <input
        id="centernegative"
        type="radio"
        name="polarity"
        value="negative"
        checked={selectedPolarity === "negative"}
        onChange={handlePolarityChange}
      />
      <label htmlFor="centernegative">center negative</label>
      <input
        id="centerpositive"
        type="radio"
        name="polarity"
        value="positive"
        checked={selectedPolarity === "positive"}
        onChange={handlePolarityChange}
      />
      <label htmlFor="centerpositive">center positive</label>
    </div>
  );
}
