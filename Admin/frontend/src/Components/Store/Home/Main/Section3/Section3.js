import React from "react";

const Section3 = () => {
  return (
    <section style={{marginTop: "-200px"}}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-lg-0">
            <div>
              <div
                className="py-10 px-8 rounded"
                style={{
                  background: `url(assets/images/banner/grocery-banner.png) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div>
                  <h3 className="fw-bold mb-1">Fruits & Vegetables</h3>
                  <p className="mb-4">
                    Get Upto <span className="fw-bold">30%</span> Off
                  </p>
                  <a href="#!" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <div>
              <div
                className="py-10 px-8 rounded"
                style={{
                  background: `url(assets/images/banner/grocery-banner.png) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div>
                  <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                  <p className="mb-4">
                    Get Upto <span className="fw-bold">25%</span> Off
                  </p>
                  <a href="#!" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
