import React, { useState, useEffect } from "react";
import "./crop.css"; // Import a separate CSS file for styling

const UploadedImages = ({
  croppedImages,
  setCroppedImages,
  setValidationResults,
}) => {
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

  return (
    <div>
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
    </div>
  );
};

export default UploadedImages;
