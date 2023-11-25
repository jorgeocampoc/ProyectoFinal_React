import React from "react";

export const ContentPlaceHolderSeries = () => {
  return (
    <div className="card-group container mb-4 custom-card-filter animate__animated animate__fadeIn ">
      <div className="card placeholder-glow bg-secondary ">
        <img
          style={{ width: "100%", height: "350px" }}
          className="card-img-top  placeholder "
          alt=""
        />
        <div className="card-body placeholder-glow">
          <span className="placeholder col-8"></span>
        </div>
      </div>
    </div>
  );
};
