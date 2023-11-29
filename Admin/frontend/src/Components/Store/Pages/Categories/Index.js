import React from "react";
import SideBar from "./LeftSideBar/Index";
import Main from "./Main/Index";

const Index = () => {
  return (
    <div className=" mt-8 mb-lg-14 mb-8">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row gx-10">
          {/* <!-- col --> */}
          <SideBar />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Index;
