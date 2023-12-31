import React from "react";

const SearchField = () => {
  return (
    <>
      <div className="col-xxl-5 col-lg-5 d-none d-lg-block">
        <form action="#">
          <div className="input-group ">
            <input
              className="form-control rounded"
              type="search"
              placeholder="Search for products"
            />
            <span className="input-group-append">
              <button
                className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchField;
