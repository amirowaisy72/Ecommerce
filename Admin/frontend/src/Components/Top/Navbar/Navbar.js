import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import AllDepartments from "./AllDepartments";
import OtherNavs from "./OtherNavs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4 "
        aria-label="Offcanvas navbar large"
      >
        <div className="container">
          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="navbar-default"
            aria-labelledby="navbar-defaultLabel"
          >
            <div className="offcanvas-header pb-1">
              <Link to="">
                {/* <img
                  src="assets/images/logo/freshcart-logo.svg"
                  alt="logo here"
                /> */}
                OSC Mobile
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <Section1 />
              <Section2 />
              <AllDepartments />
              <OtherNavs />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
