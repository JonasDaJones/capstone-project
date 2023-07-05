import {
  StyledFormContainer,
  StyledInput,
  StyledLabel,
} from "./new-pedal-form.styled";

export default function NewPedalForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newPedal = {
      uuid: uuid(),
      name: data.name,
      manufacturer: data.manufacturer,
      category: data.category,
      made_in: data.made_in,
      stereo: false,
      width: data.width,
      depth: data.depth,
      height: data.height,
      //tags: "",
    };
    onSubmit(newPedal);

    return (
      <StyledFormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput
          id="name"
          name="name"
          type="text"
          defaultValue={defaultData?.name}
          required
        />

        <StyledLabel htmlFor="manufacturer">manufacturer</StyledLabel>
        <StyledInput
          id="manufacturer"
          name="manufacturer"
          type="text"
          defaultValue={defaultData?.manufacturer}
          required
        />

        <StyledLabel htmlFor="made_in">made in</StyledLabel>
        <StyledInput
          id="made_in"
          name="made_in"
          type="text"
          defaultValue={defaultData?.made_in}
        />
        <StyledLabel htmlFor="width">width</StyledLabel>
        <StyledInput
          id="width"
          name="width"
          type="number"
          defaultValue={defaultData?.width}
        />
        <StyledLabel htmlFor="depth">depth</StyledLabel>
        <StyledInput
          id="depth"
          name="depth"
          type="number"
          defaultValue={defaultData?.depth}
        />
        <StyledLabel htmlFor="height">height</StyledLabel>
        <StyledInput
          id="height"
          name="height"
          type="number"
          defaultValue={defaultData?.height}
        />
        <StyledButtonContainer>
          <li>
            <button type="submit">save and exit</button>
          </li>
          <li>
            <button type="reset"></button>
          </li>
        </StyledButtonContainer>
      </StyledFormContainer>
    );
  }
}
