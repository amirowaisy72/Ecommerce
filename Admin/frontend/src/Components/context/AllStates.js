import React, { useState } from "react";
import context from "./contextCreator";
import PropTypes from "prop-types"; // Import PropTypes

export const AllStates = (props) => {
  //Host
  const host = "http://localhost:5000";
  // const host = 'https://sore-tan-gosling-hem.cyclic.app'

  //Create Product
  const createProduct = async (productData) => {
    //API Call
    const response = await fetch(`${host}/products/createProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    const json = await response.json();
    return json;
  };

  return (
    <>
      <context.Provider value={{ createProduct }}>
        {props.children}
      </context.Provider>
    </>
  );
};

// Define propTypes for your component
AllStates.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' is a required node
};

export default AllStates;
