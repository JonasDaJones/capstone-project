import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { FxCategories } from "../../lib/fx-categories";
import { v4 as uuidv4 } from "uuid";
import TextInput from "../FormInput/FormTextInput";
import StereoInput from "../FormInput/FormStereoInput";
import DimensionsInput from "../FormInput/FormDimensionsInput";
import BypassInput from "../FormInput/FormBypassInput";
import VoltageInput from "../FormInput/FormVoltageInput";
import BatteryInput from "../FormInput/FormBatteryInput";
import PolarityInput from "../FormInput/FormPolarityInput";
import ImpedanceInput from "../FormInput/FormImpedanceInput";
import CurrentInput from "../FormInput/FormCurrentInput";
import InputList from "../FormInput/FormInputList";
import {
  StyledCancelButton,
  StyledCategoryCheckbox,
  StyledCategoryContainer,
  StyledCategoryInput,
  StyledCategoryLabel,
  StyledCategoryView,
  StyledFormContainer,
  StyledFormNavigation,
  StyledFormPage,
  StyledFormSection,
  StyledInputWrapper,
  StyledSubmitButton,
  StyledSummary,
} from "./PedalNewForm.styled";

export default function NewPedalForm({
  pedals,
  formData,
  onHandlePedalSubmit,
  onNameChange,
  onFormChange,
  onReset,
}) {
  const [pedalName, setPedalName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [madeIn, setMadeIn] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  const [height, setHeight] = useState(0);
  const [tags, setTags] = useState("");

  const [pageIndex, setPageIndex] = useState(0);
  const { data, error } = useSWR("/api/images");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const latestImage = data.resources[0];
  const handleInputChange = (event) => {
    const { pedalName, value } = event.target;
    onFormChange(pedalName, value);
  };
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
  const handleStereoChange = (event) => {
    const { stereo, value } = event.target;
    onFormChange(stereo, value);
  };
  const handleBypassChange = (event) => {
    const {
      target: { name, value },
    } = event;
    onFormChange(bypass, value);
  };
  const handleVoltageChange = (event) => {
    const { voltage, value } = event.target;
    onFormChange(voltage, value);
  };
  const handleBatteryChange = (event) => {
    const { battery, value } = event.target;
    onFormChange(battery, value);
  };
  const handlePolarityChange = (event) => {
    const { polarity, value } = event.target;
    onFormChange(polarity, value);
  };
  const handleInputImpedanceChange = (event) => {
    const { inputImpedance, value } = event.target;
    onFormChange(inputImpedance, value);
  };
  const handleOutputImpedanceChange = (event) => {
    const { outputImpedance, value } = event.target;
    onFormChange(outputImpedance, value);
  };
  const handleBypassCurrentDrawManufacturerChange = (event) => {
    const { bypassCurrentDrawManufacturer, value } = event.target;
    onFormChange(bypassCurrentDrawManufacturer, value);
  };
  const handleEngagedCurrentDrawManufacturerChange = (event) => {
    const { engagedCurrentDrawManufacturer, value } = event.target;
    onFormChange(engagedCurrentDrawManufacturer, value);
  };
  const handleBypassCurrentDrawOwnMeasurementChange = (event) => {
    const { bypassCurrentDrawOwnMeasurement, value } = event.target;
    onFormChange(bypassCurrentDrawOwnMeasurement, value);
  };
  const handleEngagedCurrentDrawOwnMeasurementChange = (event) => {
    const { engagedCurrentDrawOwnMeasurement, value } = event.target;
    onFormChange(engagedCurrentDrawOwnMeasurement, value);
  };
  const handleReset = onReset;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPedal = {
      id: uuidv4(),
      ...formData,
      imagePath: latestImage.url,
    };

    const updatedPedals = [...pedals, newPedal];
    onHandlePedalSubmit(updatedPedals);
    handleReset();
  };

  // as the form is very long, it is split into pages

  const nextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const previousPage = () => {
    setPageIndex(pageIndex - 1);
  };
  const renderFormContent = () => {
    switch (pageIndex) {
      case 0:
        return (
          <StyledFormSection>
            <StyledFormPage>1 / 4</StyledFormPage>
            <TextInput
              label="name"
              name="name"
              value={pedalName}
              onChange={(event) => {
                setPedalName(event.target.value);
                onNameChange(event);
                onFormChange("name", event.target.value);
              }}
              required
            />
            <TextInput
              label="manufacturer"
              name="manufacturer"
              value={manufacturer}
              onChange={(event) => {
                setManufacturer(event.target.value);
                onFormChange("manufacturer", event.target.value);
              }}
              required
            />
            <TextInput
              label="made in"
              name="madeIn"
              value={madeIn}
              onChange={(event) => {
                setMadeIn(event.target.value);
                onFormChange("madeIn", event.target.value);
              }}
            />
            <StereoInput
              onStereoChange={(newStereo) => {
                handleStereoChange(newStereo);
                onFormChange("stereo", newStereo);
              }}
            />

            {/* category input is not in component due to state issues */}
            <StyledInputWrapper>
              <StyledCategoryContainer>
                <details>
                  <StyledSummary>choose categories</StyledSummary>
                  <StyledCategoryInput>
                    {FxCategories.map((category) => (
                      <StyledCategoryLabel key={category}>
                        <StyledCategoryCheckbox
                          id={category}
                          name="category"
                          type="checkbox"
                          value={category}
                          checked={selectedCategory.includes(category)}
                          onChange={handleCategoryChange}
                        />
                        {category}
                      </StyledCategoryLabel>
                    ))}
                  </StyledCategoryInput>
                </details>

                <StyledCategoryView>
                  {selectedCategory.join(", ")}
                </StyledCategoryView>
              </StyledCategoryContainer>
            </StyledInputWrapper>

            <DimensionsInput
              width={width}
              depth={depth}
              height={height}
              onWidthChange={(event) => {
                setWidth(Number(event.target.value));
                onFormChange("width", event.target.value);
              }}
              onDepthChange={(event) => {
                setDepth(Number(event.target.value));
                onFormChange("depth", event.target.value);
              }}
              onHeightChange={(event) => {
                setHeight(Number(event.target.value));
                onFormChange("height", event.target.value);
              }}
            />
            <InputList
              name="tags"
              id="tags"
              inputs={tags}
              onSaveInput={handleTagSave}
              placeholder={tags}
              onFormChange={onFormChange}
            />

            <Link href="/image-upload">upload image</Link>
            <Image
              src={latestImage.url}
              width={100}
              height={100}
              object-fit="cover"
              style={{ borderRadius: "0.5rem", borderColor: "black" }}
              alt={`Image-Id: ${latestImage.public_id}`}
            />
            <StyledFormNavigation>
              <button type="button" onClick={nextPage}>
                next
              </button>
            </StyledFormNavigation>
          </StyledFormSection>
        );
      case 1:
        return (
          <StyledFormSection>
            <StyledFormPage>2 / 4</StyledFormPage>
            <BypassInput
              onBypassChange={handleBypassChange}
              onFormChange={onFormChange}
            />
            <VoltageInput
              onVoltageChange={handleVoltageChange}
              onFormChange={onFormChange}
            />
            <BatteryInput
              onBatteryChange={handleBatteryChange}
              onFormChange={onFormChange}
            />
            <PolarityInput
              onPolarityChange={handlePolarityChange}
              onFormChange={onFormChange}
            />
            <ImpedanceInput
              onInputImpedanceChange={handleInputImpedanceChange}
              onOutputImpedanceChange={handleOutputImpedanceChange}
              onFormChange={onFormChange}
            />
            <CurrentInput
              bypassCurrentDrawManufacturer={bypassCurrentDrawManufacturer}
              engagedCurrentDrawManufacturer={engagedCurrentDrawManufacturer}
              bypassCurrentDrawOwnMeasurement={bypassCurrentDrawOwnMeasurement}
              engagedCurrentDrawOwnMeasurement={
                engagedCurrentDrawOwnMeasurement
              }
              onBypassCurrentDrawManufacturerChange={
                handleBypassCurrentDrawManufacturerChange
              }
              onEngagedCurrentDrawManufacturerChange={
                handleEngagedCurrentDrawManufacturerChange
              }
              onBypassCurrentDrawOwnMeasurementChange={
                handleBypassCurrentDrawOwnMeasurementChange
              }
              onEngagedCurrentDrawOwnMeasurementChange={
                handleEngagedCurrentDrawOwnMeasurementChange
              }
              onFormChange={onFormChange}
            />

            <StyledFormNavigation>
              <button type="button" onClick={previousPage}>
                back
              </button>
              <button type="button" onClick={nextPage}>
                next
              </button>
              <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
            </StyledFormNavigation>
          </StyledFormSection>
        );

      default:
        return null;
    }
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit}>
      {renderFormContent()}

      <StyledCancelButton type="reset" onClick={handleReset}>
        Cancel
      </StyledCancelButton>
    </StyledFormContainer>
  );
}
