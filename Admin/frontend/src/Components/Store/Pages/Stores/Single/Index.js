import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Products from "./Products";
import Pages from "./Pages";
import Zoom from "../../../../Modals/Zoom";

const Index = () => {
  return (
    <>
      <section className="mb-lg-14 mb-8 mt-8">
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-12 col-lg-3 col-md-4 mb-4 mb-md-0">
              <Section1 />
              <hr />
              {/* <!-- nav --> */}
              <Section2 />
              <hr />
              <Section3 />
            </div>
            <div className="col-12 col-lg-9 col-md-8">
              <Section4 />

              <Section5 />
              {/* <!-- row --> */}
              <Products />
              {/* <!-- row --> */}
              <Pages />
            </div>
          </div>
        </div>
      </section>
      <Zoom />
    </>
  );
};

export default Index;
