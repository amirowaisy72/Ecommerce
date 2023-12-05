import React, { useEffect, useState } from "react";

const Index = ({ setValidationResults }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([
    "Dairy, Bread & Eggs",
    "Snacks & Munchies",
    "Fruits & Vegetables",
  ]);

  useEffect(() => {
    if (
      selectedCategory === "Select a Category" ||
      selectedCategory === "Add New Category" ||
      selectedCategory === ""
    ) {
      const newCategory = {
        error: "Please select category",
        data: selectedCategory,
      };

      setValidationResults((prevResults) => {
        return { ...prevResults, Category: newCategory };
      });
    } else {
      const newCategory = { error: "", data: selectedCategory };

      setValidationResults((prevResults) => {
        return { ...prevResults, Category: newCategory };
      });
    }
  }, [selectedCategory, setValidationResults]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddNewCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories((prevCategories) => [...prevCategories, newCategory]);
      setSelectedCategory(newCategory); // Set selectedCategory to the newly added category
    } else {
      setSelectedCategory(""); // Reset the selected category to go back to "Product Category"
    }
    setNewCategory(""); // Reset the new category input field
  };

  return (
    <>
      {/* Product Category section */}
      {selectedCategory !== "Add New Category" && (
        <div className="mb-3 col-lg-6">
          <label className="form-label">Product Category</label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select a Category
            </option>
            <option
              value="Add New Category"
              style={{ fontWeight: "bold", color: "blue" }}
            >
              Add New Category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Add New Category section */}
      {selectedCategory === "Add New Category" && (
        <div className="mb-3 col-lg-6">
          <label className="form-label">Add New Category</label>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              value={newCategory}
              onChange={handleNewCategoryChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleAddNewCategory}
            >
              ➔
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
