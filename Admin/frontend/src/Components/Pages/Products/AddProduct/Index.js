import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title/Index";
import Category from "./Category/Index";
import ProductType from "./ProductType/Index";
import AffiliatedLink from "./Link/Index.js";
import Keywords from "./Keywords/Index";
import ProductImages from "./ProductImages/Index";
import ProductDescription from "./ProductDescription/Index";
import InStock from "./InStock/Index";
import ProductCode from "./ProductCode/Index";
import ProductPrice from "./ProductPrice/Index";
import MetaData from "./MetaData/Index";
import contextCreator from "../../../context/contextCreator";
import uploadToGoogleDrive from "../../../Functions/googleDriveUpload.js";
import uploadProduct from "../../../Functions/uploadProduct.js";

const Index = () => {
  const context = useContext(contextCreator);
  const { createProduct } = context;
  const [validationResults, setValidationResults] = useState({
    Title: { error: "Title field is required", data: "" },
    Category: { error: "Please select category", data: "" },
    Type: { error: "Please select a type", data: "" },
    AffiliatedLink: { error: "Please put link", data: "" },
    Keywords: { error: "Please add some keywords", data: "" },
    ProductImages: { error: "Please upload some product images", data: "" },
    ProductDescription: { error: "Please describe product", data: "" },
    InStock: { error: "", data: true },
    ProductCode: { error: "Product code section required", data: "" },
    ProductPrice: { error: "Product price section required", data: "" },
    MetaData: { error: "Metadata section required", data: "" },
  });

  const [resetForm, setResetForm] = useState(false);
  const [submitResponse, setSubmitResponse] = useState("");

  const handleSubmit = async () => {
    // Pass necessary parameters to the imported function
    await uploadProduct(
      validationResults,
      createProduct,
      uploadToGoogleDrive,
      setSubmitResponse,
      setValidationResults,
      setResetForm
    );
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
                  <Title
                    setValidationResults={setValidationResults}
                    resetForm={resetForm}
                  />
                  <Category
                    setValidationResults={setValidationResults}
                    resetForm={resetForm}
                  />
                  <ProductType
                    setValidationResults={setValidationResults}
                    resetForm={resetForm}
                  />
                  <AffiliatedLink
                    setValidationResults={setValidationResults}
                    resetForm={resetForm}
                  />
                  <Keywords
                    setValidationResults={setValidationResults}
                    resetForm={resetForm}
                  />
                  <ProductImages
                    setValidationResults={setValidationResults}
                    resetForm={resetForm}
                  />
                  <ProductDescription
                    setValidationResults={setValidationResults}
                    resetForm={resetForm}
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
                <InStock
                  setValidationResults={setValidationResults}
                  resetForm={resetForm}
                />
                <ProductCode
                  setValidationResults={setValidationResults}
                  resetForm={resetForm}
                />
              </div>
            </div>
            <ProductPrice
              setValidationResults={setValidationResults}
              resetForm={resetForm}
            />
            <MetaData
              setValidationResults={setValidationResults}
              resetForm={resetForm}
            />
            {/* <!-- button --> */}
            <div className="d-grid">
              <Link to="#" onClick={handleSubmit} className="btn btn-primary">
                Create Product
              </Link>
              {submitResponse && (
                <div>
                  <h3>Response</h3>
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
