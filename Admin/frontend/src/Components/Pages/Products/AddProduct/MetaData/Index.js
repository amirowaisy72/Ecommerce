import React from "react";

const Index = () => {
  return (
    <div className="card mb-6 card-lg">
      {/* <!-- card body --> */}
      <div className="card-body p-6">
        <h4 className="mb-4 h5">Meta Data</h4>
        {/* <!-- input --> */}
        <div className="mb-3">
          <label className="form-label">Meta Title</label>
          <input type="text" className="form-control" placeholder="Title" />
        </div>

        {/* <!-- input --> */}
        <div className="mb-3">
          <label className="form-label">Meta Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Meta Description"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Index;
