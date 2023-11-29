import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <>
      <div className="col-md-2 col-xxl-2 text-end d-none d-lg-block">
        <div className="list-inline">
          <div className="list-inline-item me-5">
            <Link
              to="/store/wishlist"
              className="text-muted position-relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                5<span className="visually-hidden">unread messages</span>
              </span>
            </Link>
          </div>
          <div className="list-inline-item me-5">
            <a
              href="#!"
              className="text-muted"
              data-bs-toggle="modal"
              data-bs-target="#userModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </a>
          </div>
          <div className="list-inline-item">
            <a
              className="text-muted position-relative "
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasRight"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-shopping-bag"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                1<span className="visually-hidden">unread messages</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
