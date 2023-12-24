import React, { useState } from "react";

const Index = ({ setCroppedImages }) => {
  const [image, setImage] = useState(null);

  const handleImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      // Update the state with the new image source
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    handleImage(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const uploadImage = () => {
    if (image) {
      // Directly add the original image to the cropped images list
      setCroppedImages((prevCroppedImages) => [...prevCroppedImages, image]);

      // Reset the image state
      setImage(null);
    }
  };

  return (
    <>
      {/* heading */}
      <h4 className="mb-3 h5">Product Images</h4>

      {/* Drag and Drop Zone */}
      <div
        className="dropzone border-dashed rounded-2"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <label htmlFor="fileInput" className="d-block">
          <span>Choose File or drag & drop here</span>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={onFileChange}
            style={{ display: "none" }}
          />
        </label>
      </div>

      {image && (
        <div>
          <button className="btn btn-success my-2" onClick={uploadImage}>
            Upload Image
          </button>
        </div>
      )}
    </>
  );
};

export default Index;
