import React from "react";

const TopLine = () => {
  return (
    <div className="d-lg-flex justify-content-between align-items-center">
      <div className="mb-3 mb-lg-0">
        <p className="mb-0">
          {" "}
          <span className="text-dark">24 </span> Products found{" "}
        </p>
      </div>

      {/* <!-- icon --> */}
      <div className="d-md-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          {/* <div>
            <a href="shop-list.html" className="text-muted me-3">
              <i className="bi bi-list-ul"></i>
            </a>
            <a href="shop-grid.html" className=" me-3 active">
              <i className="bi bi-grid"></i>
            </a>
            <a href="shop-grid-3-column.html" className="me-3 text-muted">
              <i className="bi bi-grid-3x3-gap"></i>
            </a>
          </div> */}
          <div className="ms-2 d-lg-none">
            <a
              className="btn btn-outline-gray-400 text-muted"
              data-bs-toggle="offcanvas"
              href="#offcanvasCategory"
              role="button"
              aria-controls="offcanvasCategory"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-filter me-2"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>{" "}
              Filters
            </a>
          </div>
        </div>

        <div className="d-flex mt-2 mt-lg-0">
          <div className="me-2 flex-grow-1">
            {/* <!-- select option --> */}
            <select className="form-select">
              <option selected>Show: 50</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          <div>
            {/* <!-- select option --> */}
            <select className="form-select">
              <option selected>Sort by: Featured</option>
              <option value="Low to High">Price: Low to High</option>
              <option value="High to Low"> Price: High to Low</option>
              <option value="Release Date"> Release Date</option>
              <option value="Avg. Rating"> Avg. Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLine;
