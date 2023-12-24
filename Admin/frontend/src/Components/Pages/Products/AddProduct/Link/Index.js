import React, { useEffect, useState } from "react";

const Index = ({ setValidationResults, resetForm }) => {
  const [link, setLink] = useState("");

  //Reset data when product created
  useEffect(() => {
    if (resetForm) {
      setLink("");
    }
  }, [resetForm]);

  useEffect(() => {
    if (link === "") {
      // If link is empty, set the error
      const newLink = { error: "Please put link", data: link };

      setValidationResults((prevResults) => {
        return { ...prevResults, AffiliatedLink: newLink };
      });
    } else {
      // If link is not empty, remove the error
      const newLink = { error: "", data: link };

      setValidationResults((prevResults) => {
        return { ...prevResults, AffiliatedLink: newLink };
      });
    }
  }, [link, setValidationResults]);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="mb-3 col-lg-6">
      <label className="form-label">Affiliated Link</label>
      <input
        type="text"
        className="form-control"
        placeholder="Affiliated Link"
        value={link}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Index;
