import React from "react";
import Categories from "./Categories";
import Stores from "./Stores";
import Price from "./Price";
import Ratings from "./Ratings";
import Image from "./Image";

const Index = () => {
  return (
    <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
      <div
        className="offcanvas offcanvas-start offcanvas-collapse w-md-50 "
        tabindex="-1"
        id="offcanvasCategory"
        aria-labelledby="offcanvasCategoryLabel"
      >
        <div className="offcanvas-header d-lg-none">
          <h5 className="offcanvas-title" id="offcanvasCategoryLabel">
            Filter
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body ps-lg-2 pt-lg-0">
          <Categories />

          <Stores />
          <Price />
          {/* <!-- rating --> */}
          <Ratings />
          <Image />
        </div>
      </div>
    </aside>
  );
};

export default Index;
