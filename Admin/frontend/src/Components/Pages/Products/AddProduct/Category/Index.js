import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = ({ setValidationResults, resetForm }) => {
  const [selectedCategoryData, setSelectedCategoryData] = useState({
    parent: "",
    child: "",
  });

  //Reset data when product created
  useEffect(() => {
    if (resetForm) {
      setSelectedCategoryData({
        parent: "",
        child: "",
      });
    }
  }, [resetForm]);

  const [categories, setCategories] = useState([
    {
      parent: "",
      children: ["Select a Category"],
    },
    {
      parent: "Footwear",
      children: ["Joggers", "Loafers", "Boot", "Sandals", "Chappal"],
    },
    {
      parent: "Accessories",
      children: ["Watches", "Airbirds", "Video Games"],
    },
    // Add more parent-child categories as needed
  ]);

  useEffect(() => {
    if (
      selectedCategoryData.parent === "" ||
      selectedCategoryData.child === ""
    ) {
      const newCategoryValidation = {
        error: "Please select category",
        data: selectedCategoryData,
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, Category: newCategoryValidation };
      });
    } else {
      const newCategoryValidation = { error: "", data: selectedCategoryData };

      setValidationResults((prevResults) => {
        return { ...prevResults, Category: newCategoryValidation };
      });
    }
  }, [selectedCategoryData, setValidationResults]);

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    const [parent, child] = selectedValue.split("|");

    setSelectedCategoryData({
      parent: parent || "",
      child: child || "",
    });
  };

  return (
    <>
      {/* Product Category section */}
      <div className="mb-3 col-lg-6">
        <label className="form-label">Product Category</label>
        <div className="d-flex">
          <select
            className="form-select"
            value={`${selectedCategoryData.parent}|${selectedCategoryData.child}`}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <optgroup label={category.parent} key={category.parent}>
                {category.children.map((child) => (
                  <option key={child} value={`${category.parent}|${child}`}>
                    {child}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <Link to="/categories/addCategory" className="btn btn-primary ms-2">
            +
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
