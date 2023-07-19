import React, { useState, useRef, useEffect } from "react";
import {
  StyledFlexContainer,
  StyledRangeContainer,
  StyledVoltContainer,
} from "./FormVoltageInput.styled";

export default function VoltageInput({ onVoltageChange }) {
  const [voltage, setVoltage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [otherValue, setOtherValue] = useState("");
  const [rangeValue, setRangeValue] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const containerRef = useRef(null);

  const handleVoltageChange = (event) => {
    const newVoltage = event.target.value;
    setVoltage(newVoltage);
    onVoltageChange(newVoltage);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setOtherValue("");
    setRangeValue("");
    setIsInputVisible(true);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsInputVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let selectedLabel = "";
  if (selectedOption === "other" && otherValue !== "") {
    selectedLabel = `${otherValue} V`;
  } else if (selectedOption === "range" && rangeValue.min && rangeValue.max) {
    selectedLabel = `${rangeValue.min} - ${rangeValue.max} V`;
  }

  return (
    <StyledVoltContainer ref={containerRef}>
      <label for="selectvoltage">select the Voltage</label>
      <StyledFlexContainer>
        <select
          id="selectvoltage"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="9">9 V</option>
          <option value="12">12 V</option>
          <option value="18">18 V</option>
          <option value="24">24 V</option>
          <option value="other">other:</option>
          <option value="range">range:</option>
        </select>
        {selectedLabel && <p>{selectedLabel}</p>}
        {selectedOption === "other" && isInputVisible && (
          <input
            name="othervolt"
            type="number"
            min="0"
            onChange={handleOtherVoltChange}
          />
        )}
        {selectedOption === "range" && isInputVisible && (
          <StyledRangeContainer>
            <input
              name="minvolt"
              type="number"
              min="0"
              id="minvolt"
              onChange={handleMinVoltChange}
            />
            <input
              name="maxvolt"
              type="number"
              id="maxvolt"
              onChange={handleMaxVoltChange}
            />
          </StyledRangeContainer>
        )}
      </StyledFlexContainer>
    </StyledVoltContainer>
  );
}
