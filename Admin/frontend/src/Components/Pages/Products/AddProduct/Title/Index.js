import React, { useEffect, useState } from "react";

const Index = ({ setValidationResults, resetForm }) => {
  const [title, setTitle] = useState("");

  //Reset data when product created
  useEffect(() => {
    if (resetForm) {
      setTitle("");
    }
  }, [resetForm]);

  useEffect(() => {
    if (title === "") {
      // If title is empty, set the error
      const newTitle = { error: "Title field required", data: title };

      setValidationResults((prevResults) => {
        return { ...prevResults, Title: newTitle };
      });
    } else {
      // If title is not empty, remove the error
      const newTitle = { error: "", data: title };

      setValidationResults((prevResults) => {
        return { ...prevResults, Title: newTitle };
      });
    }
  }, [title, setValidationResults]);

  const handleChange = (e) => {
    const newTitle = capitalizeFirstLetter(e.target.value);
    setTitle(newTitle);
  };

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
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
