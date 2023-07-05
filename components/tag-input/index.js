import React, { useState } from "react";

export const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleTagDelete = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div>
      <div>
        {tags.map((tag) => (
          <span key={tag} onClick={() => handleTagDelete(tag)}>
            #{tag} &times;
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="your can tag here"
      />
    </div>
  );
};
