export default function AddImage({ onImageUpload }) {
  const handleFileChange = (event) => {
    // const file = event.target.files[0];
    onImageUpload(event);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} name="file" />
    </div>
  );
}
