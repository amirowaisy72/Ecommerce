import React from "react";

const Top = () => {
  return (
    <section class="mt-8 ">
      {/* <!-- container --> */}
      <div class="container">
        {/* <!-- row --> */}
        <div class="row ">
          <div class="col-12 ">
            {/* <!-- heading --> */}
            <div class="bg-light d-flex justify-content-between ps-md-10 ps-6 rounded">
              <div class="d-flex align-items-center">
                <h1 class="mb-0 fw-bold">Stores</h1>
              </div>
              <div class="py-6">
                {/* <!-- img -->
              <!-- img --> */}
                <img
                  src="../assets/images/svg-graphics/store-graphics.svg"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
