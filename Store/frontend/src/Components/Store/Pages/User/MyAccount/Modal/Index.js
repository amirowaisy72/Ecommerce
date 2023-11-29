import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasAccount"
      aria-labelledby="offcanvasAccountLabel"
    >
      {/* <!-- offcanvas header --> */}
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasAccountLabel">
          OSC Mobile
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      {/* <!-- offcanvas body --> */}
      <div className="offcanvas-body">
        <ul className="nav flex-column nav-pills nav-pills-dark">
          {/* <!-- nav item --> */}
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/store/myAccount/orders"
            >
              <i className="feather-icon icon-shopping-bag me-2"></i>Your Orders
            </Link>
          </li>
          {/* <!-- nav item --> */}
          <li className="nav-item">
            <Link className="nav-link " to="/store/myAccount/settings">
              <i className="feather-icon icon-settings me-2"></i>Settings
            </Link>
          </li>
          {/* <!-- nav item --> */}
          <li className="nav-item">
            <Link className="nav-link" to="/store/myAccount/address">
              <i className="feather-icon icon-map-pin me-2"></i>Address
            </Link>
          </li>
          {/* <!-- nav item --> */}
          <li className="nav-item">
            <Link className="nav-link" to="/store/myAccount/paymentMethod">
              <i className="feather-icon icon-credit-card me-2"></i>Payment
              Method
            </Link>
          </li>
          {/* <!-- nav item --> */}
          <li className="nav-item">
            <Link className="nav-link" to="/store/myAccount/notifications">
              <i className="feather-icon icon-bell me-2"></i>Notification
            </Link>
          </li>
        </ul>
        <hr className="my-6" />
        <div>
          {/* <!-- nav  --> */}
          <ul className="nav flex-column nav-pills nav-pills-dark">
            {/* <!-- nav item --> */}
            <li className="nav-item">
              <Link className="nav-link " to="">
                <i className="feather-icon icon-log-out me-2"></i>Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
