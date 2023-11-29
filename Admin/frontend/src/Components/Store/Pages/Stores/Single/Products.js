import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <div className="position-absolute top-0 start-0">
                <span className="badge bg-danger">Sale</span>
              </div>
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-1.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Snack & Munchies</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                Haldiram's Sev Bhujia
              </Link>
            </h2>
            <div>
              {/* <!-- rating --> */}
              <small className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">4.5(149)</span>
            </div>
            {/* <!-- price --> */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$18</span>
                <span className="text-decoration-line-through text-muted">
                  $24
                </span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-2.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Bakery & Biscuits</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                NutriChoice Digestive
              </Link>
            </h2>
            <div className="text-warning">
              <small>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">4.5 (25)</span>
            </div>
            {/* <!-- price --> */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$24</span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-3.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Bakery & Biscuits</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                Cadbury 5 Star Chocolate
              </Link>
            </h2>
            <div className="text-warning">
              <small>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">5 (469)</span>
            </div>
            {/* <!-- price --> */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$32</span>
                <span className="text-decoration-line-through text-muted">
                  $35
                </span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-4.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Snack & Munchies</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                Onion Flavour Potato
              </Link>
            </h2>
            <div className="text-warning">
              <small>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">3.5 (456)</span>
            </div>
            {/* <!-- price --> */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$3</span>
                <span className="text-decoration-line-through text-muted">
                  $5
                </span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-5.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Instant Food</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                Salted Instant Popcorn
              </Link>
            </h2>
            <div className="text-warning">
              <small>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">4.5 (39)</span>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <span className="text-dark">$13</span>
                <span className="text-decoration-line-through text-muted">
                  $18
                </span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <div className="position-absolute top-0 start-0">
                <span className="badge bg-danger">Sale</span>
              </div>
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-6.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Dairy, Bread & Eggs</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                Blueberry Greek Yogurt
              </Link>
            </h2>
            <div>
              {/* <!-- rating --> */}
              <small className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">4.5 (189)</span>
            </div>
            {/* <!-- price --> */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$18</span>
                <span className="text-decoration-line-through text-muted">
                  $24
                </span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-7.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Dairy, Bread & Eggs</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                Britannia Cheese Slices
              </Link>
            </h2>
            <div className="text-warning">
              <small>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">5 (345)</span>
            </div>
            {/* <!-- price --> */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$24</span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-8.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Instant Food</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                Kellogg's Original Cereals
              </Link>
            </h2>
            <div className="text-warning">
              <small>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">4 (90)</span>
            </div>
            {/* <!-- price --> */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$32</span>
                <span className="text-decoration-line-through text-muted">
                  $35
                </span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-9.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Snack & Munchies</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                Slurrp Millet Chocolate
              </Link>
            </h2>
            <div className="text-warning">
              <small>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">4.5 (67)</span>
            </div>
            {/* <!-- price --> */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$3</span>
                <span className="text-decoration-line-through text-muted">
                  $5
                </span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        {/* <!-- card --> */}
        <div className="card card-product">
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <!-- badge --> */}
              <Link href="#!">
                {/* <!-- img --> */}
                <img
                  src="../assets/images/products/product-img-10.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </Link>
              {/* <!-- btn action --> */}
              <div className="card-product-action">
                <Link
                  href="#!"
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
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Wishlist"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Link>
              </div>
            </div>
            <div className="text-small mb-1">
              <Link href="#!" className="text-decoration-none text-muted">
                <small>Dairy, Bread & Eggs</small>
              </Link>
            </div>
            <h2 className="fs-6">
              <Link href="#!" className="text-inherit text-decoration-none">
                Amul Butter - 500 g
              </Link>
            </h2>
            <div className="text-warning">
              <small>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </small>
              {/* <!-- text --> */}
              <span className="text-muted small">3.5 (89)</span>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <span className="text-dark">$13</span>
                <span className="text-decoration-line-through text-muted">
                  $18
                </span>
              </div>
              <div>
                {/* <!-- btn --> */}
                <Link href="#!" className="btn btn-primary btn-sm">
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
                  </svg>
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
