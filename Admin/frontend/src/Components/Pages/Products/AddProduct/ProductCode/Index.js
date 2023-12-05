import React from "react";

const Index = () => {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Product Code</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Title"
        />
      </div>
      {/* <!-- input --> */}
      <div className="mb-3">
        <label className="form-label">Product SKU</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Title"
        />
      </div>
      {/* <!-- input --> */}
      <div className="mb-3">
        <label className="form-label" id="productSKU">
          Status
        </label>
        <br />
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            checked
          />
          <label className="form-check-label" for="inlineRadio1">
            Active
          </label>
        </div>
        {/* <!-- input --> */}
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" for="inlineRadio2">
            Disabled
          </label>
        </div>
        {/* <!-- input --> */}
      </div>
    </div>
  );
};

export default Index;
