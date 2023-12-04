import React, { useState, useEffect } from "react";

const CroppedImages = ({ croppedImages, setCroppedImages }) => {
  // State to keep track of the currently selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  // State to store the images locally
  const [localCroppedImages, setLocalCroppedImages] = useState([]);

  // UseEffect to reset the selectedImageIndex when croppedImages change
  useEffect(() => {
    setSelectedImageIndex(null);
    setLocalCroppedImages(croppedImages);
  }, [croppedImages]);

  // Function to chunk the array into rows
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  // Function to delete an image by index
  const deleteImage = (rowIndex, index) => {
    const updatedCroppedImages = [...croppedImages];
    updatedCroppedImages.splice(rowIndex * 3 + index, 1);
    setCroppedImages(updatedCroppedImages);
  };

  // Chunk the cropped images into rows
  const rows = chunkArray(localCroppedImages, 3);

  const [response, setResponse] = useState("");
  
  const upload = async () => {
    setResponse("Uploading");
  
    // Convert base64 strings to Blob objects
    const files = localCroppedImages.map((base64String, index) => {
      const byteCharacters = atob(base64String.split(",")[1]);
      const byteArrays = [];
  
      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
  
      const blob = new Blob(byteArrays, { type: "image/jpeg" });
      return new File([blob], `image_${index}.jpg`, { type: "image/jpeg" });
    });
  
    // Load each image before proceeding
    const images = await Promise.all(
      localCroppedImages.map(
        (base64String) =>
          new Promise((resolve) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.src = base64String;
          })
      )
    );
  
    // Draw images on canvas
    const base64Images = images.map((image) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
  
      canvas.width = image.width;
      canvas.height = image.height;
  
      ctx.drawImage(image, 0, 0, image.width, image.height);
  
      return canvas.toDataURL("image/jpeg");
    });
  
    // Create a FormData object and append files to it
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`croppedImages`, file, `image_${index}.jpg`);
    });
  
    try {
      const response = await fetch(
        `http://localhost:5000/products/uploadToGDrive`,
        {
          method: "POST",
          // headers: {
          //   'Content-Type': 'multipart/form-data',
          // },
          body: formData,
        }
      );
  
      const json = await response.json();
      setResponse(json.success);
    } catch (error) {
      console.error("Error uploading images:", error);
      setResponse("Error uploading images");
    }
  };
  
  

  return (
    <div>
      <h4>Uploaded Images</h4>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", marginBottom: "10px" }}>
          {row.map((croppedImage, index) => (
            <div
              key={index}
              style={{
                border:
                  rowIndex === selectedImageIndex
                    ? "2px solid red"
                    : "2px solid transparent",
                marginRight: index < row.length - 1 ? "10px" : "0",
                flex: 1,
                position: "relative",
              }}
              onClick={() => setSelectedImageIndex(rowIndex)}
            >
              <img
                src={croppedImage}
                alt={`Cropped Image ${rowIndex * 3 + index}`}
                style={{ width: "100%" }}
              />
              {selectedImageIndex === rowIndex && (
                <button
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteImage(rowIndex, index)}
                >
                  🗑️
                </button>
              )}
            </div>
          ))}
        </div>
      ))}
      {/* <button onClick={upload} className="btn btn-success">
        Upload To Google Drive
      </button> */}
    </div>
  );
};

export default CroppedImages;
