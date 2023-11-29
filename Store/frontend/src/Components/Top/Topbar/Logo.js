import React from "react";
import SearchField from "./SearchField";
import Section1 from "./Section1";
import Location from "./Location";
import Section2 from "./Section2";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row w-100 align-items-center gx-lg-2 gx-0">
            <div className="col-xxl-2 col-lg-3">
              <Link className="navbar-brand d-none d-lg-block" to="">
                {/* <img
                  src="assets/images/logo/freshcart-logo.svg"
                  alt="Logo Here"
                /> */}
                OSC Desktop
              </Link>
              <Section1 />
            </div>
            <SearchField />
            <Location />
            <Section2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
