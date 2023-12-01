import React from "react";
import { Link } from "react-router-dom";

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
                  {/* <!-- input --> */}
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Weight</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Weight"
                      required
                    />
                  </div>
                  {/* <!-- input --> */}
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Units</label>
                    <select className="form-select">
                      <option selected>Select Units</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div>
                    <div className="mb-3 col-lg-12 mt-5">
                      {/* <!-- heading --> */}
                      <h4 className="mb-3 h5">Product Images</h4>

                      {/* <!-- input --> */}
                      <form
                        action="#"
                        className="d-block dropzone border-dashed rounded-2 "
                      >
                        <div className="fallback">
                          <input name="file" type="file" multiple />
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- input --> */}
                  <div className="mb-3 col-lg-12 mt-5">
                    <h4 className="mb-3 h5">Product Descriptions</h4>
                    <div className="py-8" id="editor"></div>
                  </div>
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
                <div className="form-check form-switch mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchStock"
                    checked
                  />
                  <label className="form-check-label" for="flexSwitchStock">
                    In Stock
                  </label>
                </div>
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
              <a href="#" className="btn btn-primary">
                Create Product
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
