import React from "react";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  return (
    <section className="my-lg-14 my-14">
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          <div className="col-12">
            {/* <!-- heading --> */}
            <h3>Related Items</h3>
          </div>
        </div>
        {/* <!-- row --> */}
        <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
          {/* <!-- col --> */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* <!-- badge --> */}

                <div className="text-center position-relative ">
                  <div className=" position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                  </div>
                  <Link to="">
                    {/* <!-- img --> */}
                    <img
                      src="../assets/images/products/product-img-1.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* <!-- action btn --> */}
                  <div className="card-product-action">
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      ></i>
                    </Link>
                    <Link
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart"></i>
                    </Link>
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right"></i>
                    </Link>
                  </div>
                </div>
                {/* <!-- heading --> */}
                <div className="text-small mb-1">
                  <Link to="" className="text-decoration-none text-muted">
                    <small>Snack & Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link to="" className="text-inherit text-decoration-none">
                    Haldiram's Sev Bhujia
                  </Link>
                </h2>
                <div>
                  {/* <!-- rating -->  */}
                  <small className="text-warning">
                    {" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </small>{" "}
                  <span className="text-muted small">4.5(149)</span>
                </div>
                {/* <!-- price --> */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$18</span>{" "}
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
                  {/* <!-- btn --> */}
                  <div>
                    <Link to="" className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>{" "}
                      Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- col --> */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* <!-- badge --> */}
                <div className="text-center position-relative">
                  {" "}
                  <Link to="">
                    <img
                      src="../assets/images/products/product-img-2.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* <!-- action btn --> */}
                  <div className="card-product-action">
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      ></i>
                    </Link>
                    <Link
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart"></i>
                    </Link>
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right"></i>
                    </Link>
                  </div>
                </div>
                {/* <!-- heading --> */}
                <div className="text-small mb-1">
                  <Link to="" className="text-decoration-none text-muted">
                    <small>Bakery & Biscuits</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link to="" className="text-inherit text-decoration-none">
                    NutriChoice Digestive{" "}
                  </Link>
                </h2>
                <div className="text-warning">
                  <small>
                    {" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </small>{" "}
                  <span className="text-muted small">4.5 (25)</span>
                </div>
                {/* <!--/ price --> */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$24</span>
                  </div>
                  {/* <!-- btn --> */}
                  <div>
                    <Link to="" className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>{" "}
                      Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- col --> */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* <!-- badge --> */}
                <div className="text-center position-relative">
                  {" "}
                  <Link to="">
                    <img
                      src="../assets/images/products/product-img-3.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* <!-- action btn --> */}
                  <div className="card-product-action">
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      ></i>
                    </Link>
                    <Link
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart"></i>
                    </Link>
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right"></i>
                    </Link>
                  </div>
                </div>
                {/* <!-- heading --> */}
                <div className="text-small mb-1">
                  <Link to="" className="text-decoration-none text-muted">
                    <small>Bakery & Biscuits</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link to="" className="text-inherit text-decoration-none">
                    Cadbury 5 Star Chocolate
                  </Link>
                </h2>
                <div className="text-warning">
                  <small>
                    {" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </small>{" "}
                  <span className="text-muted small">5 (469)</span>
                </div>
                {/* <!-- price --> */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>{" "}
                    <span className="text-decoration-line-through text-muted">
                      $35
                    </span>
                  </div>
                  {/* <!-- btn --> */}
                  <div>
                    <Link to="" className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>{" "}
                      Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- col --> */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* <!-- badge --> */}
                <div className="text-center position-relative">
                  {" "}
                  <Link to="">
                    <img
                      src="../assets/images/products/product-img-4.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* <!-- action btn --> */}
                  <div className="card-product-action">
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      ></i>
                    </Link>
                    <Link
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart"></i>
                    </Link>
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right"></i>
                    </Link>
                  </div>
                </div>
                {/* <!-- heading --> */}
                <div className="text-small mb-1">
                  <Link to="" className="text-decoration-none text-muted">
                    <small>Snack & Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link to="" className="text-inherit text-decoration-none">
                    Onion Flavour Potato
                  </Link>
                </h2>
                <div className="text-warning">
                  <small>
                    {" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <i className="bi bi-star"></i>
                  </small>{" "}
                  <span className="text-muted small">3.5 (456)</span>
                </div>
                {/* <!-- price --> */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$3</span>{" "}
                    <span className="text-decoration-line-through text-muted">
                      $5
                    </span>
                  </div>
                  {/* <!-- btn --> */}
                  <div>
                    <Link to="" className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>{" "}
                      Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- col --> */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* <!-- badge --> */}
                <div className="text-center position-relative">
                  {" "}
                  <Link to="">
                    <img
                      src="../assets/images/products/product-img-9.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* <!-- action btn --> */}
                  <div className="card-product-action">
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      ></i>
                    </Link>
                    <Link
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart"></i>
                    </Link>
                    <Link
                      to=""
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right"></i>
                    </Link>
                  </div>
                </div>
                {/* <!-- heading --> */}
                <div className="text-small mb-1">
                  <Link to="" className="text-decoration-none text-muted">
                    <small>Snack & Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link to="" className="text-inherit text-decoration-none">
                    Slurrp Millet Chocolate{" "}
                  </Link>
                </h2>
                <div className="text-warning">
                  <small>
                    {" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </small>{" "}
                  <span className="text-muted small">4.5 (67)</span>
                </div>
                {/* <!-- price --> */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$6</span>{" "}
                    <span className="text-decoration-line-through text-muted">
                      $10
                    </span>
                  </div>
                  {/* <!-- btn --> */}
                  <div>
                    <Link to="" className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>{" "}
                      Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
