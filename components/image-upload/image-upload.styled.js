import styled from "styled-components";
export const StyledFileInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: 0;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
`;

export const StyledUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4.4rem;
  width: 100%;
  height: 2.5rem;
`;

export const StyledChooseImageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 2.5rem;
  width: 2.5rem;
  :active {
    background-color: #cec7ff;
    box-shadow: 0 5px #cec7ff;
    transform: translateY(4px);
  }
`;
