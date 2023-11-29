import React from "react";
import { Link } from "react-router-dom";

const OtherNavs = () => {
  return (
    <>
      <div className="">
        <ul className="navbar-nav align-items-center ">
          <li className="nav-item dropdown w-100 w-lg-auto">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="">
                  Home 1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Home 2
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Home 3
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Home 4
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Home 5{" "}
                  <span className="badge bg-light-info text-dark-info ms-1">
                    New
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown w-100 w-lg-auto">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="">
                  Shop Grid - Filter
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Shop Grid - 3 column
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Shop List - Filter
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Shop - Filter
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Shop Wide
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Shop Single
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Shop Single v2
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Shop Wishlist
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Shop Cart
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Shop Checkout
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown w-100 w-lg-auto">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Stores
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/dashboard/storesList">
                  Store List
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </Link>
            <div className=" dropdown-menu pb-0">
              <div className="row p-2 p-lg-4">
                <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                  <h6 className="text-primary ps-3">Dairy, Bread & Eggs</h6>
                  <Link className="dropdown-item" to="/store/categories">
                    Butter
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Milk Drinks
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Curd & Yogurt
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Eggs
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Buns & Bakery
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Cheese
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Condensed Milk
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Dairy Products
                  </Link>
                </div>
                <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                  <h6 className="text-primary ps-3">
                    Breakfast & Instant Food
                  </h6>
                  <Link className="dropdown-item" to="/store/categories">
                    Breakfast Cereal
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    {" "}
                    Noodles, Pasta & Soup
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Frozen Veg Snacks
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    {" "}
                    Frozen Non-Veg Snacks
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    {" "}
                    Vermicelli
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    {" "}
                    Instant Mixes
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    {" "}
                    Batter
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    {" "}
                    Fruit and Juices
                  </Link>
                </div>
                <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                  <h6 className="text-primary ps-3">Cold Drinks & Juices</h6>
                  <Link className="dropdown-item" to="/store/categories">
                    Soft Drinks
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Fruit Juices
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Coldpress
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Water & Ice Cubes
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Soda & Mixers
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Health Drinks
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Herbal Drinks
                  </Link>
                  <Link className="dropdown-item" to="/store/categories">
                    Milk Drinks
                  </Link>
                </div>
                <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                  <div className="card border-0">
                    <img
                      src="assets/images/banner/menu-banner.jpg"
                      alt="eCommerce HTML Template"
                      className="img-fluid"
                    />
                    <div className="position-absolute ps-6 mt-8">
                      <h5 className=" mb-0 ">
                        Dont miss this <br />
                        offer today.
                      </h5>
                      <Link href="#" className="btn btn-primary btn-sm mt-3">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown w-100 w-lg-auto">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="pages/blog.html">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="pages/blog-single.html">
                  Blog Single
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="pages/blog-category.html">
                  Blog Category
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="pages/about.html">
                  About us
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="pages/404error.html">
                  404 Error
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="pages/contact.html">
                  Contact
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown w-100 w-lg-auto">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/store/account/signin">
                  Sign in
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/store/account/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/store/account/forgotPassword"
                >
                  Forgot Password
                </Link>
              </li>
              <li className="dropdown-submenu dropend">
                <Link
                  className="dropdown-item dropdown-list-group-item dropdown-toggle"
                  href="#"
                >
                  My Account
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/store/myAccount/orders"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/store/myAccount/settings"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/store/myAccount/address"
                    >
                      Address
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/store/myAccount/paymentMethod"
                    >
                      Payment Method
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/store/myAccount/notifications"
                    >
                      Notification
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item w-100 w-lg-auto">
            <Link className="nav-link" href="dashboard/index.html">
              Dashboard
            </Link>
          </li>
          <li className="nav-item dropdown w-100 w-lg-auto dropdown-flyout">
            <Link
              className="nav-link"
              href="#"
              id="navbarDropdownDocs"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Docs
            </Link>
            <div
              className="dropdown-menu dropdown-menu-lg"
              aria-labelledby="navbarDropdownDocs"
            >
              <Link
                className="dropdown-item align-items-start"
                href="docs/index.html"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-file-text text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                  </svg>
                </div>
                <div className="ms-3 lh-1">
                  <h6 className="mb-1">Documentations</h6>
                  <p className="mb-0 small">Browse the all documentation</p>
                </div>
              </Link>
              <Link
                className="dropdown-item align-items-start"
                href="docs/changelog.html"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-layers text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                  </svg>
                </div>
                <div className="ms-3 lh-1">
                  <h6 className="mb-1">
                    Changelog <span className="text-primary ms-1">v1.2.0</span>
                  </h6>
                  <p className="mb-0 small">See what's new</p>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OtherNavs;
