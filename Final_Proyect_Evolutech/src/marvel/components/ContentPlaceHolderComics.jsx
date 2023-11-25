import React from "react";

export const ContentPlaceHolderComics = () => {
  return (
    <div className="card-group container mb-4  custom-card-filter mt-3 ">
      <div className="card placeholder-glow bg-secondary animate__animated animate__fadeIn">
        <img
          style={{ width: "100%", height: "500px" }}
          className="card-img-top placeholder  "
          alt=""
        />
        <div className="card-body placeholder-glow">
          <span className="placeholder col-8"></span>
        </div>
      </div>
    </div>
  );
};
