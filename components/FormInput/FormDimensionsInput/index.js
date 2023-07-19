import {
  StyledDimension,
  StyledDimensionsLabel,
  StyledDimensionsWrapper,
} from "./FormDimensionsInput.styled";

export default function DimensionsInput({
  width,
  depth,
  height,
  onWidthChange,
  onDepthChange,
  onHeightChange,
}) {
  return (
    <StyledDimensionsWrapper>
      <StyledDimension>
        <StyledDimensionsLabel htmlFor="width">
          width (mm):
        </StyledDimensionsLabel>
        <input
          name="width"
          type="number"
          id="width"
          value={width}
          min="0"
          onChange={onWidthChange}
        />
      </StyledDimension>
      <StyledDimension>
        <StyledDimensionsLabel htmlFor="depth">
          depth (mm):
        </StyledDimensionsLabel>
        <input
          name="depth"
          type="number"
          id="depth"
          value={depth}
          min="0"
          onChange={onDepthChange}
        />
      </StyledDimension>
      <StyledDimension>
        <StyledDimensionsLabel htmlFor="height">
          height (mm):
        </StyledDimensionsLabel>
        <input
          name="height"
          type="number"
          id="height"
          value={height}
          min="0"
          onChange={onHeightChange}
        />
      </StyledDimension>
    </StyledDimensionsWrapper>
  );
}
