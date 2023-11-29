import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts";
import ZoomModal from "../../../Modals/Zoom";
import Zoom from "./Zoom";

const Index = () => {
  return (
    <>
      <Zoom />
      <ProductInfo />
      <RelatedProducts />
      <ZoomModal />
    </>
  );
};

export default Index;
