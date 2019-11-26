import React from "react";

const PageNo = () => {
  return (
    <div className="pageNo">
      <div className="pages">
        <span className="prevPageArr">
          <i></i>
        </span>
        <span className="pageCount">1</span>
        <span className="pageCount">2</span>
        <span className="pageCount-dot">.</span>
        <span className="pageCount-dot">.</span>
        <span className="pageCount">5</span>
        <span className="pageCount">6</span>
        <span className="nextPageArr">
          <i></i>
        </span>
      </div>
    </div>
  );
};

export default PageNo;
