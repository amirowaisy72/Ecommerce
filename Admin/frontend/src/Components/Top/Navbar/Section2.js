import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <>
      <div className="d-block d-lg-none mb-4">
        <a
          className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <span className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
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
        </a>
        <div className="collapse mt-2" id="collapseExample">
          <div className="card card-body">
            <ul className="mb-0 list-unstyled">
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
        </div>
      </div>
    </>
  );
};

export default Section2;
