import styled from "styled-components";

export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0.5em;
`;

export const StyledLabel = styled.label`
  color: #2490b5;
  margin-right: 0.5em;
`;

export const StyledInput = styled.input`
  padding: 0.5em;
  border: solid 1px #2490b5;
  margin-bottom: 0.7em;
`;

export const StyledSelect = styled.select`
  padding: 0.5em;
  border: solid 1px #2490b5;
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
export const StyledStereoWrapper = styled.div`
  display: flex;
`;

export const StyledDimensionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledDimension = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
`;

export const StyledCategoryView = styled.div`
  width: 100%;
  height: 3em;
  border: 2px solid #2490b5;
`;
