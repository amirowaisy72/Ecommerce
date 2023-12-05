import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title/Index";
import Category from "./Category/Index";
import Keywords from "./Keywords/Index";
import ProductImages from "./ProductImages/Index";
import ProductDescription from "./ProductDescription/Index";
import InStock from "./InStock/Index";
import ProductCode from "./ProductCode/Index";
import ProductPrice from "./ProductPrice/Index";
import MetaData from "./MetaData/Index";

const Index = () => {
  const [validationResults, setValidationResults] = useState({
    Title: "Title field is required",
    Category: "Please select category",
    Keywords: "Please add some keywords",
    ProductImages: "Please upload some product images",
    ProductDescription: "Please describe product description",
    InStock: "",
    ProductCode: "Product code section required",
    ProductPrice: "Product price section required",
    MetaData: "Metadata section required",
  });

  const [submitResponse, setSubmitResponse] = useState("");

  const handleSubmit = () => {
    // Check for errors in validationResults
    const errors = Object.entries(validationResults).filter(
      ([key, error]) => error !== ""
    );

    if (errors.length > 0) {
      // Display errors if any
      const errorList = errors.map(([key, error]) => (
        <li key={key}>
          <strong>{key}:</strong> {error}
        </li>
      ));
      setSubmitResponse(<ul className="list-unstyled">{errorList}</ul>);
    } else {
      // No errors, display success response
      setSubmitResponse("Product created successfully!");
    }

    // Additional logic for form submission can be added here if needed
  };

  return (
    <main className="main-content-wrapper">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          <div className="col-lg-8 col-12">
            {/* <!-- card --> */}
            <div className="card mb-6 card-lg">
              {/* <!-- card body --> */}
              <div className="card-body p-6 ">
                <h4 className="mb-4 h5">Product Information</h4>
                <div className="row">
                  <Title setValidationResults={setValidationResults} />
                  <Category />
                  <Keywords />
                  <ProductImages />
                  <ProductDescription />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            {/* <!-- card --> */}
            <div className="card mb-6 card-lg">
              {/* <!-- card body --> */}
              <div className="card-body p-6">
                <InStock />
                <ProductCode />
              </div>
            </div>
            <ProductPrice />
            <MetaData />
            {/* <!-- button --> */}
            <div className="d-grid">
              <Link to="#" onClick={handleSubmit} className="btn btn-primary">
                Create Product
              </Link>
              {submitResponse && (
                <div
                  className={
                    submitResponse === "Product created successfully!"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {submitResponse}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
