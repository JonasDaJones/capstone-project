import {
  StyledTextInput,
  StyledTextInputWrapper,
  StyledTextLabel,
} from "./FormTextInput.styled";

const TextInput = ({ label, name, value, onChange, required }) => {
  return (
    <StyledTextInputWrapper>
      <StyledTextLabel htmlFor={name}>{label}:</StyledTextLabel>
      <StyledTextInput
        name={name}
        type="text"
        id={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </StyledTextInputWrapper>
  );
};
export default TextInput;
