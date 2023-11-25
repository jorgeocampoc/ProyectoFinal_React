import React from "react";

export const CardSeries = ({ title, descriptionm, rating, thumbnail }) => {
  const image = thumbnail.path + "." + thumbnail.extension;
  return (
    <>
      <div className="card-group container mb-4 custom-card-filter col-9 col-md-5 col-xl-2  col-sm-5 m-2 col-xl-3 col-xxl-3 ">
        <div className="card ">
          <img
            src={image}
            style={{ width: "100%", height: "356px" }}
            className="card-img-top animate__animated animate__fadeIn "
            alt="..."
          />
          <div className="card-body bg-dark text-white ">
            <h5 className="card-title text-center">{title}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
