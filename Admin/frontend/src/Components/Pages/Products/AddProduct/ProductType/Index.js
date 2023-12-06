import React, { useEffect, useState } from 'react';

const Index = ({ setValidationResults }) => {
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    if (selectedType === "Select an Option" || selectedType === "") {
      const newType = {
        error: "Please select a type",
        data: selectedType,
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, Type: newType };
      });
    } else {
      const newType = { error: "", data: selectedType };

      setValidationResults((prevResults) => {
        return { ...prevResults, Type: newType };
      });
    }
  }, [selectedType, setValidationResults]);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="mb-3 col-lg-6">
      <label className="form-label">Product belogs to</label>
      <div className="d-flex">
        <select
          className="form-select"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="" disabled>
            Select an Option
          </option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
    </div>
  );
};

export default Index;
