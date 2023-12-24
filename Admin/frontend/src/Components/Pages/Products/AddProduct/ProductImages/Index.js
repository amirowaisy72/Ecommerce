import React, { useEffect, useState } from "react";
import UploadedImages from "./UploadedImages";
import ImageUploader from "./ImageUploader/Index";

const Index = ({ setValidationResults, resetForm }) => {
  const [croppedImages, setCroppedImages] = useState([]);

  //Reset data when product created
  useEffect(() => {
    if (resetForm) {
      setCroppedImages([]);
    }
  }, [resetForm]);

  //useEffect to updated uploaded images
  useEffect(() => {
    if (croppedImages.length === 0) {
      const newImages = {
        error: "Please upload some product images",
        data: croppedImages,
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, ProductImages: newImages };
      });
    } else {
      const newImages = { error: "", data: croppedImages };

      setValidationResults((prevResults) => {
        return { ...prevResults, ProductImages: newImages };
      });
    }
  }, [croppedImages, setValidationResults]);

  return (
    <div>
      <div className="mb-3 col-lg-12 mt-5">
        <ImageUploader setCroppedImages={setCroppedImages} />
      </div>
      <div className="mt-3">
        <UploadedImages
          croppedImages={croppedImages}
          setCroppedImages={setCroppedImages}
          setValidationResults={setValidationResults}
        />
      </div>
    </div>
  );
};

export default Index;
