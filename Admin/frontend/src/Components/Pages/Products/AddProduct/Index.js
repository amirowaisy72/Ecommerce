import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title/Index";
import Category from "./Category/Index";
import ProductType from './ProductType/Index'
import Keywords from "./Keywords/Index";
import ProductImages from "./ProductImages/Index";
import ProductDescription from "./ProductDescription/Index";
import InStock from "./InStock/Index";
import ProductCode from "./ProductCode/Index";
import ProductPrice from "./ProductPrice/Index";
import MetaData from "./MetaData/Index";

const Index = () => {
  const [validationResults, setValidationResults] = useState({
    Title: { error: "Title field is required", data: "" },
    Category: { error: "Please select category", data: "" },
    Type: { error: "Please select a type", data: "" },
    Keywords: { error: "Please add some keywords", data: "" },
    ProductImages: { error: "Please upload some product images", data: "" },
    ProductDescription: { error: "Please describe product", data: "" },
    InStock: { error: "", data: "" },
    ProductCode: { error: "Product code section required", data: "" },
    ProductPrice: { error: "Product price section required", data: "" },
    MetaData: { error: "Metadata section required", data: "" },
  });

  const [submitResponse, setSubmitResponse] = useState("");

  const handleSubmit = () => {
    // Check for errors in validationResults
    const errors = Object.entries(validationResults).filter(
      ([key, value]) => value.error !== ""
    );

    if (errors.length > 0) {
      // Display errors if any
      const errorList = errors.map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong>{" "}
          {typeof value === "object" ? value.error : value}
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
                  <Category setValidationResults={setValidationResults} />
                  <ProductType setValidationResults={setValidationResults} />
                  <Keywords setValidationResults={setValidationResults} />
                  <ProductImages setValidationResults={setValidationResults} />
                  <ProductDescription
                    setValidationResults={setValidationResults}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            {/* <!-- card --> */}
            <div className="card mb-6 card-lg">
              {/* <!-- card body --> */}
              <div className="card-body p-6">
                <InStock setValidationResults={setValidationResults} />
                <ProductCode setValidationResults={setValidationResults} />
              </div>
            </div>
            <ProductPrice setValidationResults={setValidationResults} />
            <MetaData setValidationResults={setValidationResults} />
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
                  <h3>Errors</h3>
                  {submitResponse}
                  {/* Loop through validationResults and display data */}
                  <h3>Data Received</h3>
                  {Object.entries(validationResults).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong>{" "}
                      {typeof value.data === "object"
                        ? JSON.stringify(value.data)
                        : value.data}
                    </div>
                  ))}
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
