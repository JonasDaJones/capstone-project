import { useState } from "react";
import TagInput from "../form-tag-input";
import CategoryInput from "../form-category-input";
import { FxCategories } from "../../lib/fx-categories";
import { v4 as uuidv4 } from "uuid";

export default function NewPedalForm() {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [madeIn, setMadeIn] = useState("");
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  const [height, setHeight] = useState(0);
  const [stereo, setStereo] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleTagSave = (tag) => {
    setTags([...tags, tag]);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCancel = () => {
    setName("");
    setManufacturer("");
    setMadeIn("");
    setWidth(0);
    setDepth(0);
    setHeight(0);
    setStereo(0);
    setTags([]);
    setSelectedCategory("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPedal = {
      id: uuidv4(),
      name: name,
      manufacturer: manufacturer,
      madeIn: madeIn,
      width: width,
      depth: depth,
      height: height,
      stereo: stereo,
      tags: tags,
      category: selectedCategory,
    };

    localStorage.setItem("newPedal", JSON.stringify(newPedal));

    handleCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="manufacturer">manufacturer:</label>
      <input
        type="text"
        id="manufacturer"
        value={manufacturer}
        onChange={(event) => setManufacturer(event.target.value)}
        required
      />

      <label htmlFor="madeIn">made in:</label>
      <input
        type="text"
        id="madeIn"
        value={madeIn}
        onChange={(event) => setMadeIn(event.target.value)}
        required
      />
      <label htmlFor="stereo">stereo:</label>
      <input
        type="checkbox"
        id="stereo"
        checked={stereo}
        onChange={(event) => setStereo(event.target.checked)}
      />
      <label htmlFor="category">category:</label>
      <CategoryInput
        FxCategories={FxCategories}
        onSelectCategory={handleCategorySelect}
      />

      <label htmlFor="width">width:</label>
      <input
        type="number"
        id="width"
        value={width}
        onChange={(event) => setWidth(Number(event.target.value))}
        required
      />

      <label htmlFor="depth">depth:</label>
      <input
        type="number"
        id="depth"
        value={depth}
        onChange={(event) => setDepth(Number(event.target.value))}
        required
      />

      <label htmlFor="height">height:</label>
      <input
        type="number"
        id="height"
        value={height}
        onChange={(event) => setHeight(Number(event.target.value))}
        required
      />
      <label htmlFor="tags">tags:</label>
      <TagInput onSaveTag={handleTagSave} />

      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
