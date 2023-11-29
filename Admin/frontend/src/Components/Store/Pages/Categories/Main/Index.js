import React from "react";
import CategoryName from "./CategoryName";
import TopLine from "./TopLine";
import Products from "./Products";
import Pages from "./Pages";
import Zoom from "../../../../Modals/Zoom";

const Index = () => {
  return (
    <>
      <section className="col-lg-9 col-md-12">
        {/* <!-- card --> */}
        <CategoryName />
        {/* <!-- list icon --> */}
        <TopLine />
        {/* <!-- row --> */}
        <Products />
        <Pages />
      </section>
      <Zoom />
    </>
  );
};

export default Index;
