import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  StyledInputList,
  StyledListInput,
  StyledListButton,
  StyledListItem,
  StyledListInputWrapper,
  StyledListContainer,
  StyledListContainerTitle,
} from "./FormInputList.styled";

export default function InputList({ onSaveInput, inputs, placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const [addedInputs, setAddedInputs] = useState(inputs);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddInput = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const newInput = {
        id: uuidv4(),
        value: inputValue.trim(),
      };
      {
        onSaveInput(newInput.value);
        setAddedInputs((prevInputs) => [...prevInputs, newInput]);
        setInputValue("");
      }
    }

    const handleListClick = () => {
      setIsInputVisible(true);
      inputRef.current.focus();
    };

    const handleInputBlur = () => {
      setIsInputVisible(false);
    };

    const handleDeleteInput = (id) => {
      const updatedInputs = addedInputs.filter((id, idx) => idx !== id);
      setAddedInputs(updatedInputs);
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

    return (
      <StyledListContainer ref={containerRef}>
        <StyledListContainerTitle>{placeholder}</StyledListContainerTitle>
        {isInputVisible && (
          <StyledListInputWrapper>
            <StyledListInput
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={placeholder}
              onBlur={handleInputBlur}
            />
            <StyledListButton onClick={handleAddInput}>✅</StyledListButton>
          </StyledListInputWrapper>
        )}
        <StyledInputList ref={inputRef} onClick={handleListClick} tabIndex="0">
          {addedInputs.map((input, index) => (
            <StyledListItem key={input}>
              {input}
              <span onClick={() => handleDeleteInput(index)}>✖️</span>
            </StyledListItem>
          ))}
        </StyledInputList>
      </StyledListContainer>
    );
  };
}
