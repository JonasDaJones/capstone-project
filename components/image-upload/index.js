import {
  StyledUploadContainer,
  StyledFileInput,
  StyledChooseImageButton,
} from "./image-upload.styled";
export default async function AddImage() {
  let imageUrl = "";
  if (currentImage !== "" && currentImage !== undefined) {
    const response = await fetch("/api/images", {
      method: "post",
      body: pedalsFormData,
    });

    const imageDetails = await response.json();
    imageUrl = imageDetails.url;
    // Add the image URL to the form data
    pedalsFormData.image_url = imageUrl;
  }

  <p>image</p>;
  {
    currentImage !== "" || (pedals.image_url && pedals.image_url !== "") ? (
      <StyledUploadContainer>
        <StyledChooseImageButton>
          <StyledFileInput
            type="file"
            id="image_upload"
            name="file"
            ref={fileInputRef}
            onChange={(event) => {
              setCurrentImage(event.target.value);
            }}
          ></StyledFileInput>
          <div>
            <p>change image for upload</p>
          </div>
        </StyledChooseImageButton>
        <button onClick={handleFileDelete} variant="small">
          <p>delete image</p>
        </button>
      </StyledUploadContainer>
    ) : (
      <StyledUploadContainer>
        <StyledChooseImageButton>
          <StyledFileInput
            type="file"
            id="image_upload"
            name="file"
            ref={fileInputRef}
            onChange={(event) => {
              setCurrentImage(event.target.value);
            }}
          ></StyledFileInput>
          <div>
            <p>choose image for upload</p>
          </div>
        </StyledChooseImageButton>
      </StyledUploadContainer>
    );
  }
}
