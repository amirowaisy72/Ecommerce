import React from "react";
import { Link } from "react-router-dom";

const AllDepartments = () => {
  return (
    <>
      <div className="dropdown me-3 d-none d-lg-block">
        <button
          className="btn btn-primary px-6 "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="me-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </span>{" "}
          All Departments
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link className="dropdown-item" to="/store/categories">
              Dairy, Bread & Eggs
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/store/categories">
              Snacks & Munchies
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/store/categories">
              Fruits & Vegetables
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/store/categories">
              Cold Drinks & Juices
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/store/categories">
              Breakfast & Instant Food
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/store/categories">
              Bakery & Biscuits
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/store/categories">
              Chicken, Meat & Fish
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AllDepartments;
