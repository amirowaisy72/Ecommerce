import React, { useEffect, useState } from "react";

const Index = ({ setValidationResults, resetForm }) => {
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  //Reset data when product created
  useEffect(() => {
    if (resetForm) {
      setRegularPrice("");
      setSalePrice("");
    }
  }, [resetForm]);

  useEffect(() => {
    if (regularPrice === "" || salePrice === "") {
      const newSection = {
        error: "Product price section required",
        data: { regularPrice, salePrice },
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, ProductPrice: newSection };
      });
    } else {
      const newSection = {
        error: "",
        data: { regularPrice, salePrice },
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, ProductPrice: newSection };
      });
    }
  }, [regularPrice, salePrice, setValidationResults]);

  const handleRegularPriceChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setRegularPrice(inputValue);
  };

  const handleSalePriceChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setSalePrice(inputValue);
  };

  return (
    <div className="card mb-6 card-lg">
      <div className="card-body p-6">
        <h4 className="mb-4 h5">Product Price</h4>

        {/* Regular Price */}
        <div className="mb-3">
          <label className="form-label">Regular Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Rs 0.00"
            value={regularPrice}
            onChange={handleRegularPriceChange}
          />
        </div>

        {/* Sale Price */}
        <div className="mb-3">
          <label className="form-label">Sale Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Rs 0.00"
            value={salePrice}
            onChange={handleSalePriceChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
