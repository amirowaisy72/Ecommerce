import React, { useEffect, useState } from "react";

const Index = ({
  setValidationResults = { setValidationResults },
  resetForm,
}) => {
  const [productCode, setProductCode] = useState("");
  const [productSKU, setProductSKU] = useState("");
  const [status, setStatus] = useState("Active");

  //Reset data when product created
  useEffect(() => {
    if (resetForm) {
      setProductCode("");
      setProductSKU("");
      setStatus("Active");
    }
  }, [resetForm]);

  useEffect(() => {
    if (productCode === "" || productSKU === "") {
      // If title is empty, set the error
      const newSection = {
        error: "Product code section required",
        data: { productCode, productSKU, status },
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, ProductCode: newSection };
      });
    } else {
      // If title is not empty, remove the error
      const newSection = {
        error: "",
        data: { productCode, productSKU, status },
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, ProductCode: newSection };
      });
    }
  }, [productCode, productSKU, status, setValidationResults]);

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleProductSKUChange = (e) => {
    setProductSKU(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Product Code</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Code"
          value={productCode}
          onChange={handleProductCodeChange}
        />
      </div>
      {/* <!-- input --> */}
      <div className="mb-3">
        <label className="form-label">Product SKU</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product SKU"
          value={productSKU}
          onChange={handleProductSKUChange}
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
            name="status"
            id="activeStatus"
            value="Active"
            checked={status === "Active"}
            onChange={handleStatusChange}
          />
          <label className="form-check-label" htmlFor="activeStatus">
            Active
          </label>
        </div>
        {/* <!-- input --> */}
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="status"
            id="disabledStatus"
            value="Disabled"
            checked={status === "Disabled"}
            onChange={handleStatusChange}
          />
          <label className="form-check-label" htmlFor="disabledStatus">
            Disabled
          </label>
        </div>
        {/* <!-- input --> */}
      </div>
    </div>
  );
};

export default Index;
