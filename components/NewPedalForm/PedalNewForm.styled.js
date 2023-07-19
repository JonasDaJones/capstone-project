import styled from "styled-components";

export const StyledFormContainer = styled.form`
  height: 80vh;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0.5em;
`;
export const StyledFormSection = styled.section`
  display: flex;
  flex-direction: column;
`;
export const StyledFormPage = styled.h2`
  margin: 0;
  text-align: right;
`;
export const StyledFormNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
  gap: 1em;
`;

export const StyledSelect = styled.select`
  padding: 0.5em;
  border: solid 1px #2490b5;
`;

export const StyledFormFigure = styled.figure`
  position: relative;
  width: 60px;
  height: 90px;
`;
export const StyledCancelButton = styled.button`
  background-color: #b52490;
  color: whitesmoke;
  width: fit-content;
  margin: 1em auto;
  padding: 0.5em;
`;
export const StyledStereoWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5em;
`;

export const StyledButtonContainer = styled.ul`
  margin: 1em auto;
  width: 80%;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
`;
export const StyledCategoryContainer = styled.div`
  border: 2px solid #2490b5;
  border-radius: 5px;
`;
export const StyledCategoryInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5em;
  margin-top: 0.5 em;
`;
export const StyledCategoryLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const StyledCategoryCheckbox = styled.input`
  margin-right: 0.5em;
`;

export const StyledCategoryView = styled.div`
  border-top: 1em;
  width: 100%;
  height: 3em;
`;
export const StyledSummary = styled.summary`
  margin-bottom: 1em;
`;

export const StyledSubmitButton = styled.button`
  background-color: green;
  color: whitesmoke;
  padding: 0.5em;
`;
