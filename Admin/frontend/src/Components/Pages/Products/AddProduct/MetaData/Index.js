import React, { useEffect, useState } from "react";

const Index = ({ setValidationResults, resetForm }) => {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  //Reset data when product created
  useEffect(() => {
    if (resetForm) {
      setMetaTitle("");
      setMetaDescription("");
    }
  }, [resetForm]);

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
    const newTitle = capitalizeFirstLetter(e.target.value);
    setMetaTitle(newTitle);
  };

  const handleMetaDescriptionChange = (e) => {
    const newDescription = capitalizeFirstLetter(e.target.value);
    setMetaDescription(newDescription);
  };

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
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
