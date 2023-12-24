import React, { useState } from "react";
import context from "./contextCreator";
import PropTypes from "prop-types"; // Import PropTypes

export const AllStates = (props) => {
  //Host
  const host = "http://localhost:5000";
  // const host = 'https://sore-tan-gosling-hem.cyclic.app'

  //get list of Products
  const getProducts = async () => {
    //API Call
    const response = await fetch(`${host}/products/getProducts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  };

  return (
    <>
      <context.Provider value={{ getProducts }}>
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
