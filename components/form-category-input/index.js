import { useState } from "react";
import { StyledCategoryView } from "./category-input.styled";
export default function CategoryInput({ FxCategories }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((category) => category !== value)
      );
    }
  };

  return (
    <div>
      <details>
        <summary>choose categories</summary>
        {FxCategories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        ))}
      </details>
      <StyledCategoryView>{selectedCategories.join(", ")}</StyledCategoryView>
    </div>
  );
}
