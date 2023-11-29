import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        {/* <!-- row --> */}
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
            {/* <!-- img --> */}
            <img
              src="../assets/images/svg-graphics/signin-g.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          {/* <!-- col --> */}
          <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
            <div className="mb-lg-9 mb-5">
              <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
              <p>Welcome back to FreshCart! Enter your email to get started.</p>
            </div>

            <form>
              <div className="row g-3">
                {/* <!-- row --> */}

                <div className="col-12">
                  {/* <!-- input --> */}
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="col-12">
                  {/* <!-- input --> */}
                  <div className="password-field position-relative">
                    <input
                      type="password"
                      id="fakePassword"
                      placeholder="Enter Password"
                      className="form-control"
                      required
                    />
                    <span>
                      <i id="passwordToggler" className="bi bi-eye-slash"></i>
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  {/* <!-- form check --> */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    {/* <!-- label -->  */}
                    <label className="form-check-label" for="flexCheckDefault">
                      Remember me
                    </label>
                  </div>
                  <div>
                    {" "}
                    Forgot password? <a href="forgot-password.html">Reset It</a>
                  </div>
                </div>
                {/* <!-- btn --> */}
                <div className="col-12 d-grid">
                  {" "}
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
                {/* <!-- link --> */}
                <div>
                  Don’t have an account? <Link to="/store/account/signup"> Sign Up</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
