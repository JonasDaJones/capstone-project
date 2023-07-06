import { useState } from "react";
import TagInput from "../form-tag-input";
import CategoryInput from "../form-category-input";
import { FxCategories } from "../../lib/fx-categories";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButtonContainer,
  StyledDimension,
  StyledDimensionInput,
  StyledDimensionsWrapper,
  StyledFormContainer,
  StyledInput,
  StyledLabel,
  StyledStereoWrapper,
} from "./new-pedal-form.styled";
import { StyledDimensions } from "../pedal-details-specs/pedal-details-specs.styled";

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

    console.log(newPedal);
    //localStorage.setItem("newPedal", JSON.stringify(newPedal));

    handleCancel();
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit}>
      <StyledLabel htmlFor="name">name:</StyledLabel>
      <StyledInput
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <StyledLabel htmlFor="manufacturer">manufacturer:</StyledLabel>
      <StyledInput
        type="text"
        id="manufacturer"
        value={manufacturer}
        onChange={(event) => setManufacturer(event.target.value)}
        required
      />

      <StyledLabel htmlFor="madeIn">made in:</StyledLabel>
      <StyledInput
        type="text"
        id="madeIn"
        value={madeIn}
        onChange={(event) => setMadeIn(event.target.value)}
        required
      />
      <StyledStereoWrapper>
        <StyledLabel htmlFor="stereo">stereo?</StyledLabel>
        <StyledInput
          type="checkbox"
          id="stereo"
          checked={stereo}
          onChange={(event) => setStereo(event.target.checked)}
        />
      </StyledStereoWrapper>
      <StyledLabel htmlFor="category">category:</StyledLabel>
      <CategoryInput
        FxCategories={FxCategories}
        onSelectCategory={handleCategorySelect}
      />
      <StyledDimensionsWrapper>
        <StyledDimension>
          <StyledLabel htmlFor="width">width (mm):</StyledLabel>
          <input
            type="number"
            id="width"
            value={width}
            onChange={(event) => setWidth(Number(event.target.value))}
            required
          />
        </StyledDimension>
        <StyledDimension>
          <StyledLabel htmlFor="depth">depth (mm):</StyledLabel>
          <input
            type="number"
            id="depth"
            value={depth}
            onChange={(event) => setDepth(Number(event.target.value))}
            required
          />
        </StyledDimension>
        <StyledDimension>
          <StyledLabel htmlFor="height">height (mm):</StyledLabel>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(event) => setHeight(Number(event.target.value))}
            required
          />
        </StyledDimension>
      </StyledDimensionsWrapper>

      <StyledLabel htmlFor="tags">tags:</StyledLabel>
      <TagInput onSaveTag={handleTagSave} />
      <StyledButtonContainer>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </StyledButtonContainer>
    </StyledFormContainer>
  );
}
