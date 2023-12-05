import React, { useState } from "react";

const Index = () => {
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  const handleRegularPriceChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = new Intl.NumberFormat("en-PK").format(inputValue); // Format as Rupees
    setRegularPrice(formattedValue);
  };

  const handleSalePriceChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = new Intl.NumberFormat("en-PK").format(inputValue); // Format as Rupees
    setSalePrice(formattedValue);
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
