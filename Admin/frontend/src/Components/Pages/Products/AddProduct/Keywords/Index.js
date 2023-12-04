import React, { useState } from "react";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === " " && inputValue.trim() !== "") {
      // Add the keyword when space is pressed
      setKeywords((prevKeywords) => [...prevKeywords, inputValue.trim()]);
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Keywords:</strong>
        {keywords.map((keyword, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              backgroundColor: "#e0e0e0",
              borderRadius: "5px",
              padding: "5px",
              margin: "0 5px",
            }}
          >
            {keyword}
          </span>
        ))}
      </div>
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        placeholder="Type a keyword"
        style={{ marginBottom: "10px" }}
      />
      <button onClick={handleKeyPress} className="btn btn-success">
        Add Keyword
      </button>
    </div>
  );
};

export default Index;
