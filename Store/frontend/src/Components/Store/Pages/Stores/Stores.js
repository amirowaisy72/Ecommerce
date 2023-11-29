import React from "react";
import { Link } from "react-router-dom";

const Stores = () => {
  return (
    <section className="mt-6 mb-lg-14 mb-8">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              {/* <!-- title --> */}
              <h6>
                We have <span className="text-primary">36</span> vendors now
              </h6>
            </div>
          </div>
        </div>
        {/* <!-- row --> */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-4">
          {/* <!-- col --> */}

          <div className="col">
            {/* <!-- card --> */}
            <div className="card flex-row p-8 card-product ">
              <div>
                {/* <!-- img --> */}
                <img
                  src="../assets/images/stores-logo/stores-logo-1.svg"
                  alt=""
                  className="rounded-circle icon-shape icon-xl"
                />
              </div>
              {/* <!-- content --> */}
              <div className="ms-6">
                <h5 className="mb-1">
                  <Link to="/dashboard/storeDetail" className="text-inherit">
                    E-Grocery Super Market
                  </Link>
                </h5>
                <div className="small text-muted">
                  <span>Organic</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Groceries</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Butcher Shop</span>
                </div>
                <div className="py-3">
                  <ul className="list-unstyled mb-0 small">
                    <li>Delivery</li>
                    <li>Pickup available</li>
                  </ul>
                </div>
                <div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">7.5 mi away</div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">
                    In-store prices{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card flex-row p-8 card-product ">
              <div>
                {/* <!-- img --> */}
                <img
                  src="../assets/images/stores-logo/stores-logo-2.svg"
                  alt=""
                  className="rounded-circle icon-shape icon-xl"
                />
              </div>
              {/* <!-- content --> */}
              <div className="ms-6">
                <h5 className="mb-1">
                  <Link to="/dashboard/storeDetail" className="text-inherit">
                    DealShare Mart
                  </Link>
                </h5>
                <div className="small text-muted">
                  <span>Alcohol</span>{" "}
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Groceries</span>
                </div>
                <div className="py-3">
                  <ul className="list-unstyled mb-0 small">
                    <li>Delivery</li>
                    <li>Pickup available</li>
                  </ul>
                </div>
                <div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">7.2 mi away</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card flex-row p-8 card-product ">
              <div>
                {/* <!-- img --> */}
                <img
                  src="../assets/images/stores-logo/stores-logo-3.svg"
                  alt=""
                  className="rounded-circle icon-shape icon-xl"
                />
              </div>
              {/* <!-- content --> */}
              <div className="ms-6">
                <h5 className="mb-1">
                  <Link to="/dashboard/storeDetail" className="text-inherit">
                    DMart
                  </Link>
                </h5>
                <div className="small text-muted">
                  <span>Groceries</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Bakery</span> <span>Deli</span>
                </div>
                <div className="py-3">
                  <ul className="list-unstyled mb-0 small">
                    <li>
                      <span className="text-primary">Delivery by 10:30pm</span>
                    </li>
                    <li>Pickup available</li>
                  </ul>
                </div>
                <div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">9.3 mi away</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card flex-row p-8 card-product ">
              <div>
                {/* <!-- img --> */}
                <img
                  src="../assets/images/stores-logo/stores-logo-4.svg"
                  alt=""
                  className="rounded-circle icon-shape icon-xl"
                />
              </div>
              {/* <!-- content --> */}
              <div className="ms-6">
                <h5 className="mb-1">
                  <Link to="/dashboard/storeDetail" className="text-inherit">
                    Blinkit Store
                  </Link>
                </h5>
                <div className="small text-muted">
                  <span>Meal Kits</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Prepared Meals</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Organic</span>
                </div>
                <div className="py-3">
                  <ul className="list-unstyled mb-0 small">
                    <li>Delivery</li>
                    <li>Pickup available</li>
                  </ul>
                </div>
                <div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">40.5 mi away</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card flex-row p-8 card-product ">
              <div>
                {/* <!-- img --> */}
                <img
                  src="../assets/images/stores-logo/stores-logo-5.svg"
                  alt=""
                  className="rounded-circle icon-shape icon-xl"
                />
              </div>
              {/* <!-- content --> */}
              <div className="ms-6">
                <h5 className="mb-1">
                  <Link to="/dashboard/storeDetail" className="text-inherit">
                    StoreFront Super Market
                  </Link>
                </h5>
                <div className="small text-muted">
                  <span>Groceries</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Bakery</span>
                </div>
                <div className="py-3">
                  <ul className="list-unstyled mb-0 small">
                    <li>
                      <span className="text-primary">Delivery by 11:30pm</span>
                    </li>
                    <li>Pickup available</li>
                  </ul>
                </div>
                <div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">28.1 mi away</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card flex-row p-8 card-product ">
              <div>
                {/* <!-- img --> */}
                <img
                  src="../assets/images/stores-logo/stores-logo-6.svg"
                  alt=""
                  className="rounded-circle icon-shape icon-xl"
                />
              </div>
              {/* <!-- content --> */}
              <div className="ms-6">
                <h5 className="mb-1">
                  <Link to="/dashboard/storeDetail" className="text-inherit">
                    BigBasket
                  </Link>
                </h5>
                <div className="small text-muted">
                  <span>Groceries</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Deli</span>
                </div>
                <div className="py-3">
                  <ul className="list-unstyled mb-0 small">
                    <li>
                      <span className="text-primary">Delivery by 10:30pm</span>
                    </li>
                    <li>Pickup available</li>
                  </ul>
                </div>
                <div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">7.5 mi away</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card flex-row p-8 card-product ">
              <div>
                {/* <!-- img --> */}
                <img
                  src="../assets/images/stores-logo/stores-logo-7.svg"
                  alt=""
                  className="rounded-circle icon-shape icon-xl"
                />
              </div>
              {/* <!-- content --> */}
              <div className="ms-6">
                <h5 className="mb-1">
                  <Link to="/dashboard/storeDetail" className="text-inherit">
                    Swiggy Instamart
                  </Link>
                </h5>
                <div className="small text-muted">
                  <span>Meal Kits</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Prepared Meals</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>{" "}
                  <span>Organic</span>
                </div>
                <div className="py-3">
                  <ul className="list-unstyled mb-0 small">
                    <li>Delivery</li>
                    <li>Pickup available</li>
                  </ul>
                </div>
                <div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">40.5 mi away</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card flex-row p-8 card-product ">
              <div>
                {/* <!-- img --> */}
                <img
                  src="../assets/images/stores-logo/stores-logo-8.svg"
                  alt=""
                  className="rounded-circle icon-shape icon-xl"
                />
              </div>
              {/* <!-- content --> */}
              <div className="ms-6">
                <h5 className="mb-1">
                  <Link to="/dashboard/storeDetail" className="text-inherit">
                    Online Grocery Mart
                  </Link>
                </h5>
                <div className="small text-muted">
                  <span>Groceries</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Bakery</span>
                </div>
                <div className="py-3">
                  <ul className="list-unstyled mb-0 small">
                    <li>
                      <span className="text-primary">Delivery by 11:30pm</span>
                    </li>
                    <li>Pickup available</li>
                  </ul>
                </div>
                <div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">28.1 mi away</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card flex-row p-8 card-product ">
              <div>
                {/* <!-- img --> */}
                <img
                  src="../assets/images/stores-logo/stores-logo-9.svg"
                  alt=""
                  className="rounded-circle icon-shape icon-xl"
                />
              </div>
              {/* <!-- content --> */}
              <div className="ms-6">
                <h5 className="mb-1">
                  <Link to="/dashboard/storeDetail" className="text-inherit">
                    Spencers
                  </Link>
                </h5>
                <div className="small text-muted">
                  <span>Groceries</span>
                  <span className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                  <span>Deli</span>
                </div>
                <div className="py-3">
                  <ul className="list-unstyled mb-0 small">
                    <li>
                      <span className="text-primary">Delivery by 10:30pm</span>
                    </li>
                    <li>Pickup available</li>
                  </ul>
                </div>
                <div>
                  {/* <!-- badge --> */}
                  <div className="badge text-bg-light border">7.5 mi away</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;
