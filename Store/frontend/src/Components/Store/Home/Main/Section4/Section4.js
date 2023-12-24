import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import contextCreator from "../../../../context/contextCreator";

const Section4 = () => {
  const context = useContext(contextCreator);
  const { getProducts } = context;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts();
        if (response.success) {
          setProducts(response.data);
        } else {
          setError("Error fetching products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-6">
            <h3 className="mb-0">Popular Products</h3>
          </div>
        </div>
        <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
          {products.map((product) => (
            <div className="col" key={product._id}>
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative ">
                    <div className=" position-absolute top-0 start-0">
                    </div>
                    <Link to="">
                      {" "}
                      <img
                        src="assets/images/products/product-img-1.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                      />
                    </Link>

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
                        to=""
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
                  <div className="text-small mb-1">
                    <Link to="" className="text-decoration-none text-muted">
                      <small>{product.Category.parent} - {product.Category.child}</small>
                    </Link>
                  </div>
                  <h2 className="fs-6">
                    <Link
                      to="/store/singleProduct"
                      className="text-inherit text-decoration-none"
                    >
                      {product.Title}
                    </Link>
                  </h2>
                  <div>
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
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span className="text-dark">Rs{product.ProductPrice.salePrice}</span>{" "}
                      <span className="text-decoration-line-through text-muted">
                        Rs{product.ProductPrice.regularPrice}
                      </span>
                    </div>
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
          ))}
          {/* <div className="col">
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative ">
                  <div className=" position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                  </div>
                  <Link to="">
                    {" "}
                    <img
                      src="assets/images/products/product-img-1.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>

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
                      to=""
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
                <div className="text-small mb-1">
                  <Link to="" className="text-decoration-none text-muted">
                    <small>Snack & Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link
                    to="/store/singleProduct"
                    className="text-inherit text-decoration-none"
                  >
                    Haldiram's Sev Bhujia
                  </Link>
                </h2>
                <div>
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
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$18</span>{" "}
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
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
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <div className=" position-absolute top-0 start-0">
                    <span className="badge bg-success">14%</span>
                  </div>
                  <Link to="/store/singleProduct">
                    <img
                      src="assets/images/products/product-img-2.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
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
                      to="/store/wishlist"
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
                <div className="text-small mb-1">
                  <Link to="" className="text-decoration-none text-muted">
                    <small>Bakery & Biscuits</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link
                    to="/store/singleProduct"
                    className="text-inherit text-decoration-none"
                  >
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
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$24</span>
                  </div>
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
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {" "}
                  <Link to="/store/singleProduct">
                    <img
                      src="assets/images/products/product-img-3.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
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
                      to="/store/wishlist"
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
                <div className="text-small mb-1">
                  <Link to="" className="text-decoration-none text-muted">
                    <small>Bakery & Biscuits</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link
                    to="/store/singleProduct"
                    className="text-inherit text-decoration-none"
                  >
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
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>{" "}
                    <span className="text-decoration-line-through text-muted">
                      $35
                    </span>
                  </div>
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Section4;
