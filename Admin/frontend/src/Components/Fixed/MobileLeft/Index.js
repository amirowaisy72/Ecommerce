import React, { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac"
      tabindex="-1"
      id="offcanvasExample"
    >
      <div className="navbar-vertical">
        <div className="px-4 py-5">
          <Link to="" className="navbar-brand">
            {/* <img src="assets/images/logo/freshcart-logo.svg" alt="" /> */}
            OSC Mobile
          </Link>
        </div>
        <div className="navbar-vertical-content flex-grow-1" data-simplebar="">
          <ul className="navbar-nav flex-column" id="sideNavbar">
            <li className="nav-item ">
              <Link
                className={`nav-link ${activeLink === "" ? "active" : ""}`}
                onClick={() => handleLinkClick("")}
                to=""
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-house"></i>
                  </span>
                  <span className="nav-link-text">Dashboard</span>
                </div>
              </Link>
            </li>
            <li className="nav-item mt-6 mb-3">
              <span className="nav-label">Store Managements</span>
            </li>
            <li className="nav-item ">
              <Link
                className={`nav-link ${
                  activeLink === "/products" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/products")}
                to="/products"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-cart"></i>
                  </span>
                  <span className="nav-link-text">Products</span>
                </div>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={`nav-link ${
                  activeLink === "/categories" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/categories")}
                to="/categories"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-list-task"></i>
                  </span>
                  <span className="nav-link-text">Categories</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link   collapsed "
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#navCategoriesOrders"
                aria-expanded="false"
                aria-controls="navCategoriesOrders"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-bag"></i>
                  </span>
                  <span className="nav-link-text">Orders</span>
                </div>
              </a>
              <div
                id="navCategoriesOrders"
                className="collapse "
                data-bs-parent="#sideNavbar"
              >
                <ul className="nav flex-column">
                  <li className="nav-item ">
                    <Link
                      className={`nav-link ${
                        activeLink === "/orders" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("/orders")}
                      to="/orders"
                    >
                      All Orders
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item ">
              <Link
                className={`nav-link ${
                  activeLink === "/vendors" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/vendors")}
                to="/vendors"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-shop"></i>
                  </span>
                  <span className="nav-link-text">Sellers / Vendors</span>
                </div>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={`nav-link ${
                  activeLink === "/customers" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/customers")}
                to="/customers"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-people"></i>
                  </span>
                  <span className="nav-link-text">Customers</span>
                </div>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={`nav-link ${
                  activeLink === "/reviews" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/reviews")}
                to="/reviews"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-star"></i>
                  </span>
                  <span className="nav-link-text">Reviews</span>
                </div>
              </Link>
            </li>
            {/* <!-- Nav item --> */}
            <li className="nav-item">
              <a
                className="nav-link  collapsed "
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#navMenuLevelFirst"
                aria-expanded="false"
                aria-controls="navMenuLevelFirst"
              >
                <span className="nav-link-icon">
                  <i className=" bi bi-arrow-90deg-down"></i>
                </span>
                <span className="nav-link-text">Menu Level</span>
              </a>
              <div
                id="navMenuLevelFirst"
                className="collapse "
                data-bs-parent="#sideNavbar"
              >
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#navMenuLevelSecond1"
                      aria-expanded="false"
                      aria-controls="navMenuLevelSecond1"
                    >
                      Two Level
                    </a>
                    <div
                      id="navMenuLevelSecond1"
                      className="collapse"
                      data-bs-parent="#navMenuLevel"
                    >
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link " href="#">
                            NavItem 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link " href="#">
                            NavItem 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  collapsed  "
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#navMenuLevelThreeOne1"
                      aria-expanded="false"
                      aria-controls="navMenuLevelThreeOne1"
                    >
                      Three Level
                    </a>
                    <div
                      id="navMenuLevelThreeOne1"
                      className="collapse "
                      data-bs-parent="#navMenuLevel"
                    >
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link  collapsed "
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#navMenuLevelThreeTwo"
                            aria-expanded="false"
                            aria-controls="navMenuLevelThreeTwo"
                          >
                            NavItem 1
                          </a>
                          <div
                            id="navMenuLevelThreeTwo"
                            className="collapse collapse "
                            data-bs-parent="#navMenuLevelThree"
                          >
                            <ul className="nav flex-column">
                              <li className="nav-item">
                                <a className="nav-link " href="#">
                                  NavChild Item 1
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link " href="#">
                            Nav Item 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item mt-6 mb-3">
              <span className="nav-label">Site Settings</span>{" "}
              <span className="badge bg-light-info text-dark-info">
                Coming Soon
              </span>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled" href="#!">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-newspaper"></i>
                  </span>
                  <span className="nav-link-text">Blog</span>
                </div>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled" href="#!">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-images"></i>
                  </span>
                  <span className="nav-link-text">Media</span>
                </div>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled" href="#!">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-gear"></i>
                  </span>
                  <span className="nav-link-text">Store Settings</span>
                </div>
              </a>
            </li>

            <li className="nav-item mt-6 mb-3">
              <span className="nav-label">Support</span>{" "}
              <span className="badge bg-light-info text-dark-info">
                Coming Soon
              </span>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled" href="#!">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-headphones"></i>
                  </span>
                  <span className="nav-link-text">Support Ticket</span>
                </div>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled" href="#">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-question-circle"></i>
                  </span>
                  <span className="nav-link-text">Help Center</span>
                </div>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled" href="#!">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-infinity"></i>
                  </span>
                  <span className="nav-link-text">How FreshCart Works</span>
                </div>
              </a>
            </li>

            <li className="nav-item mt-6 mb-3">
              <span className="nav-label">Our Apps</span>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled" href="#!">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-apple"></i>
                  </span>
                  <span className="nav-link-text">Apple Store</span>
                </div>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled" href="#!">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    {" "}
                    <i className="bi bi-google-play"></i>
                  </span>
                  <span className="nav-link-text">Google Play Store</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
