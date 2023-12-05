import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";

const Index = ({ setCroppedImages }) => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const getCroppedImg = useCallback(async () => {
    try {
      const img = new Image();
      img.src = image;
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
          img,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        // Get the cropped image as a data URL
        const croppedImage = canvas.toDataURL("image/jpeg");

        // Update the state to include the new cropped image
        setCroppedImages((prevCroppedImages) => [
          ...prevCroppedImages,
          croppedImage,
        ]);

        setImage(null);
      };
    } catch (error) {
      console.error("Error cropping image:", error);
    }
  }, [image, croppedAreaPixels]);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    handleImage(file);
  };

  const handleImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
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
        {image && (
          <div className="cropper-container">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              cropSize={{ width: 300, height: 200 }}
            />
            <div style={{ width: "400px", height: "400px" }}></div>
          </div>
        )}
        {image && (
          <div>
            <button className="btn btn-success my-2" onClick={getCroppedImg}>
              Upload Image
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
