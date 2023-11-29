import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  const slides = [
    {
      image: "assets/images/slider/slide-1.jpg",
      title: "SuperMarket For Fresh Grocery",
      discount: "Opening Sale Discount 50%",
      description:
        "Introduced a new model for online grocery shopping and convenient home delivery.",
    },
    {
      image: "assets/images/slider/slider-2.jpg",
      title: "Free Shipping on orders over $100",
      discount: "Free Shipping - orders over $100",
      description:
        "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 2000);

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, [currentSlide]);

  return (
      <section className="mt-8">
        <div className="container">
          <div className="hero-slider ">
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{
                  background: `url(${slide.image}) no-repeat`,
                  backgroundSize: "cover",
                  borderRadius: ".5rem",
                  backgroundPosition: "center",
                  display: index === currentSlide ? "block" : "none",
                }}
              >
                <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                  <span className="badge text-bg-warning">
                    {slide.discount}
                  </span>
                  <h2 className="text-dark display-5 fw-bold mt-4">
                    {slide.title}
                  </h2>
                  <p className="lead">{slide.description}</p>
                  <Link to="" className="btn btn-dark mt-3">
                    Shop Now{" "}
                    <i className="feather-icon icon-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Section1;
