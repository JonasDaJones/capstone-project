import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

export default function UploadedImage({ imagePath, onImagePathChange }) {
  const { data, error } = useSWR("/api/images");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const latestImage = data.resources[0];
  const handleImagePathChange = (newImagePath) => {
    onImagePathChange(newImagePath);
  };

  return (
    <StyledFigure>
      <Image
        src={latestImage.url}
        width={150}
        height={150}
        object-fit="cover"
        style={{ borderRadius: "0.5rem", borderColor: "black" }}
        alt={`Image-Id: ${latestImage.public_id}`}
      />
      <StyledInput
        type="text"
        value={imagePath || ""}
        readOnly
        onChange={(event) => handleImagePathChange(event.target.value)}
      />
    </StyledFigure>
  );
}

const StyledFigure = styled.figure`
  width: 150;
  height: 200;
  padding: 0;
`;
const StyledInput = styled.input``;
