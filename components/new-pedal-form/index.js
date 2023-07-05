import {
  InnerFormContainer,
  Input,
  Label,
  Select,
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
      <InnerFormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          defaultValue={defaultData?.name}
          required
        />

        <Label htmlFor="manufacturer">manufacturer</Label>
        <Input
          id="manufacturer"
          name="manufacturer"
          type="text"
          defaultValue={defaultData?.manufacturer}
          required
        />

        <Label htmlFor="made_in">made in</Label>
        <Input
          id="made_in"
          name="made_in"
          type="text"
          defaultValue={defaultData?.made_in}
        />
        <Label htmlFor="width">width</Label>
        <Input
          id="width"
          name="width"
          type="number"
          defaultValue={defaultData?.width}
        />
        <Label htmlFor="depth">depth</Label>
        <Input
          id="depth"
          name="depth"
          type="number"
          defaultValue={defaultData?.depth}
        />
        <Label htmlFor="height">height</Label>
        <Input
          id="height"
          name="height"
          type="number"
          defaultValue={defaultData?.height}
        />

        <button type="submit">save and exit</button>
      </InnerFormContainer>
    );
  }
}
