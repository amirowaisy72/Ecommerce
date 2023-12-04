import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import "./crop.css"; // Import a separate CSS file for styling
import CroppedImages from "./CroppedImages";

const Index = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImages, setCroppedImages] = useState([]);

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

        setImage(null)
      };
    } catch (error) {
      console.error("Error cropping image:", error);
    }
  }, [image, croppedAreaPixels]);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="mb-3 col-lg-12 mt-5">
        {/* <!-- heading --> */}
        <h4 className="mb-3 h5">Product Images</h4>

        {/* <!-- input --> */}
        <form action="#" className="d-block dropzone border-dashed rounded-2 ">
          <div className="fallback">
            <input type="file" name="croppedImages" accept="image/*" onChange={onFileChange} />
          </div>
        </form>

        {image && (
          <div className="cropper-container">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              cropSize={{ width: 300, height: 200 }} // Adjust the crop size
            />
            <div style={{width:"400px", height: "400px"}}></div>
          </div>
        )}
        {image && (
          <>
            <button className="btn btn-success" onClick={getCroppedImg}>Upload Image</button>
          </>
        )}
        <CroppedImages croppedImages={croppedImages} setCroppedImages={setCroppedImages} />
      </div>
    </div>
  );
};

export default Index;
