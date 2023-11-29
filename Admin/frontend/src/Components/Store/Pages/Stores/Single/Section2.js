import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <ul className="nav flex-column nav-pills nav-pills-dark">
      {/* <!-- nav item --> */}
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#">
          <i className="feather-icon icon-shopping-bag me-2"></i>Shop
        </Link>
      </li>
      {/* <!-- nav item --> */}
      <li className="nav-item">
        <Link className="nav-link" href="#">
          <i className="feather-icon icon-gift me-2"></i>Deals
        </Link>
      </li>
      {/* <!-- nav item --> */}
      <li className="nav-item">
        <Link className="nav-link" href="#">
          <i className="feather-icon icon-map-pin me-2"></i>Buy It Again
        </Link>
      </li>
      {/* <!-- nav item --> */}
      <li className="nav-item">
        <Link className="nav-link" href="#">
          <i className="feather-icon icon-star me-2"></i>Reviews
        </Link>
      </li>
      {/* <!-- nav item --> */}
      <li className="nav-item">
        <Link className="nav-link" href="#">
          <i className="feather-icon icon-book me-2"></i>Recipes
        </Link>
      </li>
      {/* <!-- nav item --> */}
      <li className="nav-item">
        <Link className="nav-link" href="#">
          <i className="feather-icon icon-phone-call me-2"></i>Contact
        </Link>
      </li>
      {/* <!-- nav item --> */}
      <li className="nav-item">
        <Link className="nav-link" href="#">
          <i className="feather-icon icon-clipboard me-2"></i>Policy
        </Link>
      </li>
    </ul>
  );
};

export default Section2;
