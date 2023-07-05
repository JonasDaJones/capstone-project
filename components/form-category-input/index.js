const CategoryInput = ({ FxCategories, onSelectCategory }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onSelectCategory(SelectedCategory);
  };
  return (
    <div>
      <select onChange={handleCategoryChange}>
        <option value="">Select one (or more) Category</option>
        {FxCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryInput;
