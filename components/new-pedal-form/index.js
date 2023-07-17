import { useState } from "react";
import TagInput from "../form-tag-input";
import { FxCategories } from "../../lib/fx-categories";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButtonContainer,
  StyledCategoryFieldset,
  StyledCategoryInput,
  StyledCategoryView,
  StyledDimension,
  StyledDimensionsWrapper,
  StyledFormContainer,
  StyledInput,
  StyledLabel,
  StyledStereoWrapper,
} from "./new-pedal-form.styled";
import Link from "next/link";
import UploadedImage from "../UploadedImage";
export default function NewPedalForm({
  pedals,
  onHandlePedalSubmit,
  onNameChange,
  imagePath,
  onImagePathChange,
}) {
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

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategory((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCategory((prevSelected) =>
        prevSelected.filter((category) => category !== value)
      );
    }
  };

  const handleReset = () => {
    setName("");
    setManufacturer("");
    setMadeIn("");
    setWidth("");
    setDepth("");
    setHeight("");
    setStereo(false);
    setTags([]);
    setSelectedCategory([]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newPedal = {
      id: uuidv4(),
      ...data,
      imagePath: imagePath,
    };

    const updatedPedals = [...pedals, newPedal];
    onHandlePedalSubmit(updatedPedals);
    handleReset();
  };
  const handleImagePathChange = (newImagePath) => {
    onImagePathChange(newImagePath);
  };
  return (
    <StyledFormContainer onSubmit={handleSubmit}>
      <StyledLabel htmlFor="name">name:</StyledLabel>
      <StyledInput
        name="name"
        type="text"
        id="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          onNameChange(event);
        }}
        required
      />

      <StyledLabel htmlFor="manufacturer">manufacturer:</StyledLabel>
      <StyledInput
        name="manufacturer"
        type="text"
        id="manufacturer"
        value={manufacturer}
        onChange={(event) => setManufacturer(event.target.value)}
        required
      />

      <StyledLabel htmlFor="madeIn">made in:</StyledLabel>
      <StyledInput
        name="madeIn"
        type="text"
        id="madeIn"
        value={madeIn}
        onChange={(event) => setMadeIn(event.target.value)}
      />
      <StyledStereoWrapper>
        <StyledLabel htmlFor="stereo">stereo?</StyledLabel>
        <StyledInput
          name="stereo"
          type="checkbox"
          id="stereo"
          checked={stereo}
          onChange={(event) => setStereo(event.target.checked)}
        />
      </StyledStereoWrapper>
      <StyledCategoryFieldset>
        <details>
          <summary>choose categories</summary>
          <StyledCategoryInput>
            {FxCategories.map((category) => (
              <label key={category}>
                <input
                  name="category"
                  type="checkbox"
                  value={category}
                  checked={selectedCategory.includes(category)}
                  onChange={handleCategoryChange}
                />
                {category}
              </label>
            ))}
          </StyledCategoryInput>
        </details>
        <StyledCategoryView>{selectedCategory.join(", ")}</StyledCategoryView>
      </StyledCategoryFieldset>
      <StyledDimensionsWrapper>
        <StyledDimension>
          <StyledLabel htmlFor="width">width (mm):</StyledLabel>
          <input
            name="width"
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
            name="depth"
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
            name="height"
            type="number"
            id="height"
            value={height}
            min="0"
            onChange={(event) => setHeight(Number(event.target.value))}
          />
        </StyledDimension>
      </StyledDimensionsWrapper>
      <StyledLabel htmlFor="tags">tags:</StyledLabel>
      <TagInput name="tags" id="tags" onSaveTag={handleTagSave} tags={tags} />

      <Link href="/image-upload">upload image</Link>

      <UploadedImage
        imagePath={imagePath}
        onImagePathChange={handleImagePathChange}
      />

      <StyledButtonContainer>
        <Link href="/">Home</Link>
        <button type="reset" onClick={handleReset}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </StyledButtonContainer>
    </StyledFormContainer>
  );
}
