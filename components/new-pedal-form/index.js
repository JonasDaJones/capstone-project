import { useState } from "react";
import TagInput from "../form-tag-input";
import CategoryInput from "../form-category-input";
import { FxCategories } from "../../lib/fx-categories";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButtonContainer,
  StyledDimension,
  StyledDimensionsWrapper,
  StyledFormContainer,
  StyledInput,
  StyledLabel,
  StyledStereoWrapper,
} from "./new-pedal-form.styled";

export default function NewPedalForm() {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [madeIn, setMadeIn] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [height, setHeight] = useState("");
  const [stereo, setStereo] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleTagSave = (tag) => {
    setTags([...tags, tag]);
  };

  const handleCategorySelect = (selectedCategories) => {
    setSelectedCategory(selectedCategories);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    event.target.reset();
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
    <StyledFormContainer onSubmit={handleSubmit} onReset={handleCancel}>
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
        id="category"
        FxCategories={FxCategories}
        onSelectCategory={handleCategorySelect}
        onCancel={handleCancel}
        required
      />
      <StyledDimensionsWrapper>
        <StyledDimension>
          <StyledLabel htmlFor="width">width (mm):</StyledLabel>
          <input
            type="number"
            id="width"
            value={width}
            min="0"
            onChange={(event) => setWidth(Number(event.target.value))}
          />
        </StyledDimension>
        <StyledDimension>
          <StyledLabel htmlFor="depth">depth (mm):</StyledLabel>
          <input
            type="number"
            id="depth"
            value={depth}
            min="0"
            onChange={(event) => setDepth(Number(event.target.value))}
          />
        </StyledDimension>
        <StyledDimension>
          <StyledLabel htmlFor="height">height (mm):</StyledLabel>
          <input
            type="number"
            id="height"
            value={height}
            min="0"
            onChange={(event) => setHeight(Number(event.target.value))}
          />
        </StyledDimension>
      </StyledDimensionsWrapper>
      <StyledLabel htmlFor="tags">tags:</StyledLabel>
      <TagInput id="tags" onSaveTag={handleTagSave} onCancel={handleCancel} />
      <StyledButtonContainer>
        <button type="reset">Cancel</button>
        <button type="submit">Submit</button>
      </StyledButtonContainer>
    </StyledFormContainer>
  );
}
