import React from "react";

const Index = () => {
  return (
    <section className="my-lg-14 my-8">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
            {/* <!-- img --> */}
            <img
              src="../assets/images/svg-graphics/signup-g.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          {/* <!-- col --> */}
          <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
            <div className="mb-lg-9 mb-5">
              <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
              <p>Welcome to FreshCart! Enter your email to get started.</p>
            </div>
            {/* <!-- form --> */}
            <form>
              <div className="row g-3">
                {/* <!-- col --> */}
                <div className="col">
                  {/* <!-- input --> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    required
                  />
                </div>
                <div className="col">
                  {/* <!-- input --> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    required
                  />
                </div>
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
                {/* <!-- btn --> */}
                <div className="col-12 d-grid">
                  {" "}
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>

                {/* <!-- text --> */}
                <p>
                  <small>
                    By continuing, you agree to our{" "}
                    <a href="#!"> Terms of Service</a> &{" "}
                    <a href="#!">Privacy Policy</a>
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
