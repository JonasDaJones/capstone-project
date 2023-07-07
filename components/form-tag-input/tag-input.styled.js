import styled from "styled-components";
export const StyledTagView = styled.div`
  height: 3em;
  border: 2px solid #90b524;
  position: relative;
`;

/* const StyledTags = styled.div`
  border: 2px solid #540b0e;
  border-radius: 0.5em;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  ${({ bgColor, textColor }) => `
    background-color: ${bgColor};
    color: ${textColor};
  `}
`;

const getRandomCombination = (combinations) => {
  const randomIndex = Math.floor(Math.random() * combinations.length);
  return combinations[randomIndex];
};

const colorCombinations = [
  { bgColor: "#FF0000", textColor: "#FFFFFF" },
  { bgColor: "#00FF00", textColor: "#000000" },
  { bgColor: "#0000FF", textColor: "#FFFFFF" },
  { bgColor: "#FFFF00", textColor: "#000000" },
  { bgColor: "#00FFFF", textColor: "#000000" },
];

const MyComponent = () => {
  return (
    <StyledTags>
      {tags.map((tag) => {
        const { bgColor, textColor } = getRandomCombination(colorCombinations);
        return (
          <Tag key={tag} bgColor={bgColor} textColor={textColor}>
            {tag}
          </Tag>
        );
      })}
    </StyledTags>
  );
};
 */
