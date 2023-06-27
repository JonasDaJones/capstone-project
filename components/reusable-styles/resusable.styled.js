import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  color: #333333;
`;

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  );
};
