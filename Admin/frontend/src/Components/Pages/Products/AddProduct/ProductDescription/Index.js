import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

const Index = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div className="mb-3 col-lg-12 mt-5">
      <h4 className="mb-3 h5">Product Descriptions</h4>
      <div>
        <ReactQuill
          style={{ height: "200px" }}
          theme="snow"
          value={editorContent}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default Index;
