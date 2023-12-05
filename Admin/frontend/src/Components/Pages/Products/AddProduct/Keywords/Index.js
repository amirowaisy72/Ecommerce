import React, { useEffect, useState } from "react";

const Index = ({ setValidationResults }) => {
  const [inputValue, setInputValue] = useState("");
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    if (keywords.length === 0) {
      const newKeywords = { error: "Please add some keywords", data: keywords };

      setValidationResults((prevResults) => {
        return { ...prevResults, Keywords: newKeywords };
      });
    } else {
      const newKeywords = { error: "", data: keywords };

      setValidationResults((prevResults) => {
        return { ...prevResults, Keywords: newKeywords };
      });
    }
  }, [keywords, setValidationResults]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === " " && inputValue.trim() !== "") {
      setKeywords((prevKeywords) => [...prevKeywords, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleAddKeyword = () => {
    if (inputValue.trim() !== "") {
      setKeywords((prevKeywords) => [...prevKeywords, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveKeyword = (index) => {
    setKeywords((prevKeywords) => prevKeywords.filter((_, i) => i !== index));
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
              padding: "15px",
              margin: "0 5px",
              position: "relative",
            }}
          >
            {keyword}
            <button
              onClick={() => handleRemoveKeyword(index)}
              style={{
                position: "absolute",
                top: "2px",
                right: "2px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                fontSize: "10px", // Adjust the font size for the close icon
              }}
            >
              X
            </button>
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
      <button onClick={handleAddKeyword} className="btn btn-success btn-sm">
        Add Keyword
      </button>
    </div>
  );
};

export default Index;
