import React, { useState } from "react";
import { StyledTagView } from "./tag-input.styled";

const TagInput = ({ onSaveTag, onCancel }) => {
  const [tagInput, setTagInput] = useState("");
  const [addedTags, setAddedTags] = useState([]);
  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };
  const handleAddTag = (event) => {
    event.preventDefault();
    if (tagInput.trim() !== "") {
      onSaveTag(tagInput.trim());
      setAddedTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput("");
    }
  };
  /*   const handleChildCancel = (event) => {
    event.preventDefault();
    onCancel();
  };
 */
  return (
    <div>
      <input
        type="text"
        value={tagInput}
        onChange={handleTagInputChange}
        placeholder="you can tag here"
      />
      <button onClick={handleAddTag}>add</button>
      <StyledTagView
        onCancel={onCancel}
        addedTags={addedTags}
        setAddedTags={setAddedTags}
      >
        Tags: {addedTags.join(", ")}
      </StyledTagView>
    </div>
  );
};
export default TagInput;
