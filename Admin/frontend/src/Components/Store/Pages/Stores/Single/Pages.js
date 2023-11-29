import React from "react";

const Pages = () => {
  return (
    <div className="row mt-8">
      <div className="col">
        {/* <!-- nav --> */}
        <nav>
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link mx-1 " href="#" aria-label="Previous">
                <i className="feather-icon icon-chevron-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link mx-1 active" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link mx-1 text-body" href="#">
                2
              </a>
            </li>

            <li className="page-item">
              <a className="page-link mx-1 text-body" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link mx-1 text-body" href="#">
                12
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link mx-1 text-body"
                href="#"
                aria-label="Next"
              >
                <i className="feather-icon icon-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pages;
