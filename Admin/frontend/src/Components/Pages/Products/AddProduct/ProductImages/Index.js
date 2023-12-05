import React, { useState } from "react";
import CroppedImages from "./CroppedImages";
import ImageUploader from "./ImageUploader/Index";

const Index = () => {
  const [croppedImages, setCroppedImages] = useState([]);

  return (
    <div>
      <div className="mb-3 col-lg-12 mt-5">
        <ImageUploader
          setCroppedImages={setCroppedImages}
        />
        <CroppedImages
          croppedImages={croppedImages}
          setCroppedImages={setCroppedImages}
        />
      </div>
    </div>
  );
};

export default Index;
