import React, { useState } from "react";

const TagInput = ({ onSaveTag }) => {
  const [tagInput, setTagInput] = useState("");
  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };
  const handleAddTag = (event) => {
    event.preventDefault();
    if (tag.input.trim() !== "") {
      onSaveTag(tagInput.trim());
      setTagInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={tagInput}
        onChange={handleTagInputChange}
        placeholder="you can tag here"
      />
      <button onClick={handleAddTag}>add</button>
    </div>
  );
};

export default TagInput;
