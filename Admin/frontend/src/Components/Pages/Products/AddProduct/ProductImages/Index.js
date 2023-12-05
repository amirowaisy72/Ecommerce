import React, { useEffect, useState } from "react";
import CroppedImages from "./CroppedImages";
import ImageUploader from "./ImageUploader/Index";

const Index = ({ setValidationResults }) => {
  const [croppedImages, setCroppedImages] = useState([]);

  useEffect(() => {
    if (croppedImages.length === 0) {
      const newProductImages = {
        error: "Please upload some product images",
        data: croppedImages,
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, ProductImages: newProductImages };
      });
    } else {
      const newProductImages = { error: "", data: croppedImages };

      setValidationResults((prevResults) => {
        return { ...prevResults, ProductImages: newProductImages };
      });
    }
  }, [croppedImages, setValidationResults]);

  return (
    <div>
      <div className="mb-3 col-lg-12 mt-5">
        <ImageUploader setCroppedImages={setCroppedImages} />
        <CroppedImages
          croppedImages={croppedImages}
          setCroppedImages={setCroppedImages}
        />
      </div>
    </div>
  );
};

export default Index;
