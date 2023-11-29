import React from "react";

const Location = () => {
  return (
    <>
      <div className="col-md-2 col-xxl-3 d-none d-lg-block">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn  btn-outline-gray-400 text-muted"
          data-bs-toggle="modal"
          data-bs-target="#locationModal"
        >
          <i className="feather-icon icon-map-pin me-2"></i>Location
        </button>
      </div>
    </>
  );
};

export default Location;
