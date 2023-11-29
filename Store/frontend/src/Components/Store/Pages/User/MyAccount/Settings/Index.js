import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Index";

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
                {/* <!-- nav item --> */}
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
                    <Link
                      className="nav-link active"
                      to="/store/myAccount/settings"
                    >
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
                <div className="mb-6">
                  {/* <!-- heading --> */}
                  <h2 className="mb-0">Account Setting</h2>
                </div>
                <div>
                  {/* <!-- heading --> */}
                  <h5 className="mb-4">Account details</h5>
                  <div className="row">
                    <div className="col-lg-5">
                      {/* <!-- form --> */}
                      <form>
                        {/* <!-- input --> */}
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="jitu chauhan"
                          />
                        </div>
                        {/* <!-- input --> */}
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="example@gmail.com"
                          />
                        </div>
                        {/* <!-- input --> */}
                        <div className="mb-5">
                          <label className="form-label">Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone number"
                          />
                        </div>
                        {/* <!-- button --> */}
                        <div className="mb-3">
                          <button className="btn btn-primary">
                            Save Details
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <hr className="my-10" />
                <div className="pe-lg-14">
                  {/* <!-- heading --> */}
                  <h5 className="mb-4">Password</h5>
                  <form className=" row row-cols-1 row-cols-lg-2">
                    {/* <!-- input --> */}
                    <div className="mb-3 col">
                      <label className="form-label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="**********"
                      />
                    </div>
                    {/* <!-- input --> */}
                    <div className="mb-3 col">
                      <label className="form-label">Current Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="**********"
                      />
                    </div>
                    {/* <!-- input --> */}
                    <div className="col-12">
                      <p className="mb-4">
                        Can’t remember your current password?
                        <a href="#"> Reset your password.</a>
                      </p>
                      <a href="#" className="btn btn-primary">
                        Save Password
                      </a>
                    </div>
                  </form>
                </div>
                <hr className="my-10" />
                <div>
                  {/* <!-- heading --> */}
                  <h5 className="mb-4">Delete Account</h5>
                  <p className="mb-2">Would you like to delete your account?</p>
                  <p className="mb-5">
                    This account contain 12 orders, Deleting your account will
                    remove all the order details associated with it.
                  </p>
                  {/* <!-- btn --> */}
                  <a href="#" className="btn btn-outline-danger">
                    I want to delete my account
                  </a>
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
