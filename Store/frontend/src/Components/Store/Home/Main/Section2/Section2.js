import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Section2 = () => {
  const categories = [
    {
      title: "Dairy, Bread & Eggs",
      image: "assets/images/category/category-dairy-bread-eggs.jpg",
    },
    {
      title: "Snack & Munchies",
      image: "assets/images/category/category-snack-munchies.jpg",
    },
    {
      title: "Bakery & Biscuits",
      image: "assets/images/category/category-bakery-biscuits.jpg",
    },
    {
      title: "Instant Food",
      image: "assets/images/category/category-instant-food.jpg",
    },
    {
      title: "Tea, Coffee & Drinks",
      image: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      title: "Atta, Rice & Dal",
      image: "assets/images/category/category-atta-rice-dal.jpg",
    },
    {
      title: "Baby Care",
      image: "assets/images/category/category-baby-care.jpg",
    },
    {
      title: "Chicken, Meat & Fish",
      image: "assets/images/category/category-chicken-meat-fish.jpg",
    },
    {
      title: "Cleaning Essentials",
      image: "assets/images/category/category-cleaning-essentials.jpg",
    },
    {
      title: "Pet Care",
      image: "assets/images/category/category-pet-care.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <div />, // Add your custom left arrow component here
    nextArrow: <div />, // Add your custom right arrow component here
  };

  return (
    <section className="mb-lg-5 mt-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-6">
            <h3 className="mb-0">Featured Categories</h3>
          </div>
        </div>
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="item">
              <Link
                to="/store/categories"
                className="text-decoration-none text-inherit"
              >
                <div className="card card-product mb-lg-4">
                  <div className="card-body text-center py-8">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="mb-3 img-fluid"
                    />
                    <div className="text-truncate">{category.title}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Section2;
