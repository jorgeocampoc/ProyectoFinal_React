import React from "react";

export const ContentPlaceHolder = () => {
  return (
    <div
      className=" card col-9 col-md-5 col-xl-2  bg-secondary col-sm-5 m-2 col-xl-3 col-xxl-3 animate__animated animate__fadeIn "
      aria-hidden="true"
    >
      <div className="row g-0 ">
        <div className="  col-md-5 mt-1 mb-1 placeholder-glow">
          <img
            className="img-fluid rounded-start placeholder"
            alt=""
            style={{ width: "100%", height: "330px" }}
          />
        </div>
        <div className="  col-md-7 ">
          <div className="  card-body ">
            <p className="  card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
