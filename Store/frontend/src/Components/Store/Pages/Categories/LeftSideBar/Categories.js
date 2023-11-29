import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="mb-8">
      {/* <!-- title --> */}
      <h5 className="mb-3">Categories</h5>
      {/* <!-- nav --> */}
      <ul className="nav nav-category" id="categoryCollapseMenu">
        <li className="nav-item border-bottom w-100 ">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#categoryFlushOne"
            aria-expanded="false"
            aria-controls="categoryFlushOne"
          >
            Dairy, Bread & Eggs{" "}
            <i className="feather-icon icon-chevron-right"></i>
          </a>
          {/* <!-- accordion collapse --> */}
          <div
            id="categoryFlushOne"
            className="accordion-collapse collapse"
            data-bs-parent="#categoryCollapseMenu"
          >
            <div>
              {/* <!-- nav --> */}

              <ul className="nav flex-column ms-3">
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Milk
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Milk Drinks
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Curd & Yogurt
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Eggs
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Bread
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Buns & Bakery
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Butter & More
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Cheese
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Paneer & Tofu
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Cream & Whitener
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Condensed Milk
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Vegan Drinks
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* <!-- nav item --> */}
        <li className="nav-item border-bottom w-100 ">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Snacks & Munchies{" "}
            <i className="feather-icon icon-chevron-right"></i>
          </a>

          {/* <!-- collapse --> */}
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#categoryCollapseMenu"
          >
            <div>
              <ul className="nav flex-column ms-3">
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Chips & Crisps
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    NachosLink
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Popcorn
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Bhujia & Mixtures
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Namkeen Snacks
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Healthy Snacks
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Cakes & Rolls
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Energy Bars
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Papad & Fryums
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Rusks & Wafers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item border-bottom w-100 ">
          {" "}
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Fruits & Vegetables{" "}
            <i className="feather-icon icon-chevron-right"></i>
          </a>
          {/* <!-- collapse --> */}
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#categoryCollapseMenu"
          >
            <div>
              <ul className="nav flex-column ms-3">
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="">
                    Fresh Vegetables
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Herbs & Seasonings
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Fresh Fruits
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Organic Fruits & Vegetables
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Cuts & Sprouts
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Exotic Fruits & Veggies
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Flower Bouquets, Bunches
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item border-bottom w-100 ">
          {" "}
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Cold Drinks & Juices{" "}
            <i className="feather-icon icon-chevron-right"></i>
          </a>
          {/* <!-- collapse --> */}
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#categoryCollapseMenu"
          >
            <div>
              <ul className="nav flex-column ms-3">
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Soft Drinks
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Fruit Juices
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Coldpress
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Energy Drinks
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Water & Ice Cubes
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Soda & Mixers
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Concentrates & Syrups
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Detox & Energy Drinks
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Juice Collection
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="nav-item border-bottom w-100 ">
          {" "}
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            Breakfast & Instant Food{" "}
            <i className="feather-icon icon-chevron-right"></i>
          </a>
          {/* <!-- collapse --> */}
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#categoryCollapseMenu"
          >
            <div>
              <ul className="nav flex-column ms-3">
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="">
                    Batter
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Breakfast Cereal
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Noodles, Pasta & Soup
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Frozen Non-Veg Snackss
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Frozen Veg
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Vermicelli
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Instant Mixes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item border-bottom w-100 ">
          {" "}
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            Bakery & Biscuits{" "}
            <i className="feather-icon icon-chevron-right"></i>
          </a>
          {/* <!-- collapse --> */}
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#categoryCollapseMenu"
          >
            <div>
              <ul className="nav flex-column ms-3">
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="">
                    Cookies
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Glucose & Marie
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Sweet & Salty
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Healthy & Digestive
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Cream Biscuits
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Rusks & Wafers
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Cakes & Rolls
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Buns & Bakery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item border-bottom w-100 ">
          {" "}
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSeven"
            aria-expanded="false"
            aria-controls="flush-collapseSeven"
          >
            Chicken, Meat & Fish{" "}
            <i className="feather-icon icon-chevron-right"></i>
          </a>
          {/* <!-- collapse --> */}
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#categoryCollapseMenu"
          >
            <div>
              <ul className="nav flex-column ms-3">
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="">
                    Chicken
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Sausage, Salami & Ham
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Exotic Meat
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Eggs
                  </Link>
                </li>
                {/* <!-- nav item --> */}
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Frozen Non-Veg Snacks
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
