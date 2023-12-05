import React, { useState } from "react";

const Index = ({ setValidationResults }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    if (newTitle.trim() !== "") {
      // If title is not empty, remove the error
      setValidationResults((prevResults) => {
        return { ...prevResults, Title: "" };
      });
    } else {
      // If title is empty, set the error
      setValidationResults((prevResults) => {
        return { ...prevResults, Title: "Title field required" };
      });
    }
  };

  return (
    <div className="mb-3 col-lg-6">
      <label className="form-label">Title</label>
      <input
        type="text"
        className="form-control"
        placeholder="Product Name"
        value={title}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Index;
