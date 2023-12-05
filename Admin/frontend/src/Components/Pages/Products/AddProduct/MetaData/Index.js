import React, { useEffect, useState } from "react";

const Index = ({ setValidationResults }) => {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  useEffect(() => {
    if (metaTitle === "" || metaDescription === "") {
      const newSection = {
        error: "Metadata section required",
        data: { metaTitle, metaDescription },
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, MetaData: newSection };
      });
    } else {
      const newSection = {
        error: "",
        data: { metaTitle, metaDescription },
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, MetaData: newSection };
      });
    }
  }, [metaTitle, metaDescription, setValidationResults]);

  const handleMetaTitleChange = (e) => {
    setMetaTitle(e.target.value);
  };

  const handleMetaDescriptionChange = (e) => {
    setMetaDescription(e.target.value);
  };

  return (
    <div className="card mb-6 card-lg">
      {/* <!-- card body --> */}
      <div className="card-body p-6">
        <h4 className="mb-4 h5">Meta Data</h4>
        {/* <!-- input --> */}
        <div className="mb-3">
          <label className="form-label">Meta Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={metaTitle}
            onChange={handleMetaTitleChange}
          />
        </div>

        {/* <!-- input --> */}
        <div className="mb-3">
          <label className="form-label">Meta Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Meta Description"
            value={metaDescription}
            onChange={handleMetaDescriptionChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Index;
