import React from "react";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="addAddressModal"
      tabindex="-1"
      aria-labelledby="addAddressModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        {/* <!-- modal content --> */}
        <div className="modal-content">
          {/* <!-- modal body --> */}
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between mb-5">
              <div>
                {/* <!-- heading --> */}
                <h5 className="mb-1" id="addAddressModalLabel">
                  New Shipping Address
                </h5>
                <p className="small mb-0">
                  Add new shipping address for your order delivery.
                </p>
              </div>
              <div>
                {/* <!-- button --> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            {/* <!-- row --> */}
            <div className="row g-3">
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- input --> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  required=""
                />
              </div>
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- input --> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  required=""
                />
              </div>
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- input --> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address Line 1"
                />
              </div>
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- input --> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address Line 2"
                />
              </div>
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- input --> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- form select --> */}
                <select className="form-select">
                  <option selected=""> India</option>
                  <option value="1">UK</option>
                  <option value="2">USA</option>
                  <option value="3">UAE</option>
                </select>
              </div>
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- form select --> */}
                <select className="form-select">
                  <option selected="">Gujarat</option>
                  <option value="1">Northern Ireland</option>
                  <option value="2"> Alaska</option>
                  <option value="3">Abu Dhabi</option>
                </select>
              </div>
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- input --> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Zip Code"
                />
              </div>
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- input --> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Business Name"
                />
              </div>
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- form check --> */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Set as Default
                  </label>
                </div>
              </div>
              {/* <!-- col --> */}
              <div className="col-12 text-end">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button className="btn btn-primary" type="button">
                  Save Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
