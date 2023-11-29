import React from "react";
import { Link } from "react-router-dom";

const OtherNavs = () => {
  return (
    <>
      <div className="">
        <ul className="navbar-nav align-items-center ">
          <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </a>
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
        </ul>
      </div>
    </>
  );
};

export default OtherNavs;
