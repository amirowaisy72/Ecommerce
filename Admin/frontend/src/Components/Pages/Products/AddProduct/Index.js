import React from "react";
import { Link } from "react-router-dom";
import ProductImages from "./ProductImages/Index";
import ProductDescription from "./ProductDescription/Index";
import InStock from "./InStock/Index";
import Keywords from './Keywords/Index'

const Index = () => {
  return (
    <main className="main-content-wrapper">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              {/* <!-- page header --> */}
              <div>
                <h2>Add New Product</h2>
                {/* <!-- breacrumb --> */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="#" className="text-inherit">
                        Dashboard
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#" className="text-inherit">
                        Products
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add New Product
                    </li>
                  </ol>
                </nav>
              </div>
              {/* <!-- button --> */}
              <div>
                <Link to="/products" className="btn btn-light">
                  Back to Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- row --> */}
        <div className="row">
          <div className="col-lg-8 col-12">
            {/* <!-- card --> */}
            <div className="card mb-6 card-lg">
              {/* <!-- card body --> */}
              <div className="card-body p-6 ">
                <h4 className="mb-4 h5">Product Information</h4>
                <div className="row">
                  {/* <!-- input --> */}
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Product Name"
                      required
                    />
                  </div>
                  {/* <!-- input --> */}
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Product Category</label>
                    <select className="form-select">
                      <option selected>Product Category</option>
                      <option value="Dairy, Bread & Eggs">
                        Dairy, Bread & Eggs
                      </option>
                      <option value="Snacks & Munchies">
                        Snacks & Munchies
                      </option>
                      <option value="Fruits & Vegetables">
                        Fruits & Vegetables
                      </option>
                    </select>
                  </div>
                  <Keywords />
                  <ProductImages />
                  {/* <!-- input --> */}
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
                {/* <!-- input --> */}
                <InStock />
                {/* <!-- input --> */}
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
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card mb-6 card-lg">
              {/* <!-- card body --> */}
              <div className="card-body p-6">
                <h4 className="mb-4 h5">Product Price</h4>
                {/* <!-- input --> */}
                <div className="mb-3">
                  <label className="form-label">Regular Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="$0.00"
                  />
                </div>
                {/* <!-- input --> */}
                <div className="mb-3">
                  <label className="form-label">Sale Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="$0.00"
                  />
                </div>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card mb-6 card-lg">
              {/* <!-- card body --> */}
              <div className="card-body p-6">
                <h4 className="mb-4 h5">Meta Data</h4>
                {/* <!-- input --> */}
                <div className="mb-3">
                  <label className="form-label">Meta Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>

                {/* <!-- input --> */}
                <div className="mb-3">
                  <label className="form-label">Meta Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Meta Description"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* <!-- button --> */}
            <div className="d-grid">
              <Link href="#" className="btn btn-primary">
                Create Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
