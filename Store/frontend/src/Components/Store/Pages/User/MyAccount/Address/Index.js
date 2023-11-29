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
            {/* <!-- col --> */}
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
                    <Link
                      className="nav-link active"
                      to="/store/myAccount/address"
                    >
                      <i className="feather-icon icon-map-pin me-2"></i>Address
                    </Link>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
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
                <div className="d-flex justify-content-between mb-6">
                  {/* <!-- heading --> */}
                  <h2 className="mb-0">Address</h2>
                  {/* <!-- button --> */}
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addAddressModal"
                  >
                    Add a new address{" "}
                  </a>
                </div>
                <div className="row">
                  {/* <!-- col --> */}
                  <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                    {/* <!-- form --> */}
                    <div className="card">
                      <div className="card-body p-6">
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="homeRadio"
                            checked
                          />
                          <label
                            className="form-check-label text-dark fw-semi-bold"
                            for="homeRadio"
                          >
                            Home
                          </label>
                        </div>
                        {/* <!-- address --> */}
                        <p className="mb-6">
                          Jitu Chauhan
                          <br />
                          4450 North Avenue Oakland, <br />
                          Nebraska, United States,
                          <br />
                          402-776-1106
                        </p>
                        {/* <!-- btn --> */}
                        <a href="#" className="btn btn-info btn-sm">
                          Default address
                        </a>
                        <div className="mt-4">
                          <a href="#" className="text-inherit">
                            Edit{" "}
                          </a>
                          <a
                            href="#"
                            className="text-danger ms-3"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                    {/* <!-- input --> */}
                    <div className="card">
                      <div className="card-body p-6">
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="officeRadio"
                          />
                          <label
                            className="form-check-label text-dark fw-semi-bold"
                            for="officeRadio"
                          >
                            Office
                          </label>
                        </div>
                        {/* <!-- nav item --> */}
                        <p className="mb-6">
                          Nitu Chauhan
                          <br />
                          3853 Coal Road <br />
                          Tannersville, Pennsylvania, 18372, United States{" "}
                          <br />
                          402-776-1106
                        </p>
                        {/* <!-- link --> */}
                        <a href="#" className="link-primary">
                          Set as Default
                        </a>
                        <div className="mt-4">
                          <a href="#" className="text-inherit">
                            Edit{" "}
                          </a>
                          {/* <!-- btn --> */}
                          <a
                            href="#"
                            className="text-danger ms-3"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
