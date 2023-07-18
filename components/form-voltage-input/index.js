import React, { useState } from "react";

export default function VoltageInput() {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherValue, setOtherValue] = useState("");
  const [rangeValue, setRangeValue] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOtherVoltChange = (event) => {
    setOtherValue(event.target.value);
  };

  const handleMinVoltChange = (event) => {
    setRangeValue((prevRangeValue) => ({
      ...prevRangeValue,
      min: event.target.value,
    }));
  };

  const handleMaxVoltChange = (event) => {
    setRangeValue((prevRangeValue) => ({
      ...prevRangeValue,
      max: event.target.value,
    }));
  };

  let selectedLabel = "";
  if (selectedOption === "other" && otherValue !== "") {
    selectedLabel = `other: ${otherValue} Volt`;
  } else if (selectedOption === "range" && rangeValue.min && rangeValue.max) {
    selectedLabel = `range: ${rangeValue.min} - ${rangeValue.max} Volt`;
  }

  return (
    <fieldset>
      <legend>select the Voltage</legend>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="9">9</option>
        <option value="12">12</option>
        <option value="18">18</option>
        <option value="24">24</option>
        <option value="other">other:</option>
        <option value="range">range:</option>
      </select>
      {selectedLabel && <p>{selectedLabel}</p>}
      {selectedOption === "other" && (
        <input
          name="othervolt"
          type="number"
          onChange={handleOtherVoltChange}
        />
      )}
      {selectedOption === "range" && (
        <fieldset>
          <input
            name="minvolt"
            type="number"
            id="minvolt"
            onChange={handleMinVoltChange}
          />
          <input
            name="maxvolt"
            type="number"
            id="maxvolt"
            onChange={handleMaxVoltChange}
          />
        </fieldset>
      )}
    </fieldset>
  );
}
