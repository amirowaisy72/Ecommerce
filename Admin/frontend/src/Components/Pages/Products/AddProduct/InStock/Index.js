import React, { useState } from "react";

const YourComponent = () => {
  const [isChecked, setIsChecked] = useState(true);

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
