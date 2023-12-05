import React, { useEffect, useState } from "react";

const YourComponent = ({ setValidationResults }) => {
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    // If title is not empty, remove the error
    const newState = { error: "", data: isChecked };

    setValidationResults((prevResults) => {
      return { ...prevResults, InStock: newState };
    });
  }, [isChecked, setValidationResults]);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="form-check form-switch mb-4">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchStock"
        checked={isChecked}
        onChange={handleSwitchChange}
      />
      <label className="form-check-label" htmlFor="flexSwitchStock">
        In Stock
      </label>
    </div>
  );
};

export default YourComponent;
