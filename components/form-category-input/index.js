import { useState } from "react";
export default function CategoryInput({ FxCategories, onSelectCategories }) {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (event) => {
      const {value, checked } = event.target;
      if (checked) {
        setSelectedCategories((prevSelected) => [...prevSelected, value])
      } else {
        setSelectedCategories((prevSelected) => prevSelected.filter((category) => category !== value));
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
      <div>Selected Categories: {selectedCategories.join(', ')}</div>
      </div>
    );
  };
  
};


