import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Index = () => {
  return (
    <>
      <section>
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- col --> */}
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center d-md-none py-4">
                {/* <!-- heading --> */}
                <h3 className="fs-5 mb-0">Account Setting</h3>
                {/* <!-- button --> */}
                <button
                  className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3 "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasAccount"
                  aria-controls="offcanvasAccount"
                >
                  <i className="bi bi-text-indent-left fs-3"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block">
              <div className="pt-10 pe-lg-10">
                {/* <!-- nav --> */}
                <ul className="nav flex-column nav-pills nav-pills-dark">
                  {/* <!-- nav item --> */}
                  <li className="nav-item">
                    {/* <!-- nav link --> */}
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to="/store/myAccount/orders"
                    >
                      <i className="feather-icon icon-shopping-bag me-2"></i>
                      Your Orders
                    </Link>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item">
                    <Link className="nav-link " to="/store/myAccount/settings">
                      <i className="feather-icon icon-settings me-2"></i>
                      Settings
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
                    <Link
                      className="nav-link active"
                      to="/store/myAccount/paymentMethod"
                    >
                      <i className="feather-icon icon-credit-card me-2"></i>
                      Payment Method
                    </Link>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/store/myAccount/notifications"
                    >
                      <i className="feather-icon icon-bell me-2"></i>
                      Notification
                    </Link>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item">
                    <hr />
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item">
                    <Link className="nav-link " to="">
                      <i className="feather-icon icon-log-out me-2"></i>Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                {/* <!-- heading --> */}
                <div className="d-flex justify-content-between mb-6 align-items-center">
                  <h2 className="mb-0">Payment Methods</h2>
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#paymentModal"
                  >
                    Add Payment{" "}
                  </a>
                </div>
                <ul className="list-group list-group-flush">
                  {/* <!-- List group item --> */}
                  <li className="list-group-item py-5 px-0">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        {/* <!-- img --> */}
                        <img
                          src="../assets/images/svg-graphics/visa.svg"
                          alt=""
                        />
                        {/* <!-- text --> */}
                        <div className="ms-4">
                          <h5 className="mb-0 h6 h6">**** 1234</h5>
                          <p className="mb-0 small">Expires in 10/2023</p>
                        </div>
                      </div>
                      <div>
                        {/* <!-- button --> */}
                        <a
                          href="#"
                          className="btn btn-outline-gray-400 disabled btn-sm"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* <!-- List group item --> */}
                  <li className="list-group-item px-0 py-5">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        {/* <!-- img --> */}
                        <img
                          src="../assets/images/svg-graphics/mastercard.svg"
                          alt=""
                          className="me-3"
                        />
                        <div>
                          <h5 className="mb-0 h6">Mastercard ending in 1234</h5>
                          <p className="mb-0 small">Expires in 03/2026</p>
                        </div>
                      </div>
                      <div>
                        {/* <!-- button--> */}
                        <a
                          href="#"
                          className="btn btn-outline-gray-400 text-muted btn-sm"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* <!-- List group item --> */}
                  <li className="list-group-item px-0 py-5">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        {/* <!-- img --> */}
                        <img
                          src="../assets/images/svg-graphics/discover.svg"
                          alt=""
                          className="me-3"
                        />
                        <div>
                          {/* <!-- text --> */}
                          <h5 className="mb-0 h6">Discover ending in 1234</h5>
                          <p className="mb-0 small">
                            Expires in 07/2020{" "}
                            <span className="badge bg-warning text-dark">
                              {" "}
                              This card is expired.
                            </span>
                          </p>
                        </div>
                      </div>
                      <div>
                        {/* <!-- btn --> */}
                        <a
                          href="#"
                          className="btn btn-outline-gray-400 text-muted btn-sm"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* <!-- List group item --> */}
                  <li className="list-group-item px-0 py-5">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        {/* <!-- img --> */}
                        <img
                          src="../assets/images/svg-graphics/americanexpress.svg"
                          alt=""
                          className="me-3"
                        />
                        {/* <!-- text --> */}
                        <div>
                          <h5 className="mb-0 h6">
                            American Express ending in 1234
                          </h5>
                          <p className="mb-0 small">Expires in 12/2021</p>
                        </div>
                      </div>
                      <div>
                        {/* <!-- btn --> */}
                        <a
                          href="#"
                          className="btn btn-outline-gray-400 text-muted btn-sm"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* <!-- List group item --> */}
                  <li className="list-group-item px-0 py-5 border-bottom">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        {/* <!-- img --> */}
                        <img
                          src="../assets/images/svg-graphics/paypal.svg"
                          alt=""
                          className="me-3"
                        />
                        <div>
                          {/* <!-- text --> */}
                          <h5 className="mb-0 h6">
                            Paypal Express ending in 1234
                          </h5>
                          <p className="mb-0 small">Expires in 10/2021</p>
                        </div>
                      </div>
                      <div>
                        {/* <!-- btn --> */}
                        <a
                          href="#"
                          className="btn btn-outline-gray-400 text-muted btn-sm"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal />
    </>
  );
};

export default Index;
