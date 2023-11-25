import React from "react";

export const CardComics = ({ thumbnail, title }) => {
  const image = thumbnail.path + "." + thumbnail.extension;

  return (
    <>
      <div className="card-group container mb-4  custom-card-filter mt-3  ">
        <div className="card ">
          <img
            src={image}
            style={{ width: "100%", height: "500px" }}
            className="card-img-top  animate__animated animate__fadeIn"
            alt="..."
          />
          <div className="card-body">
            <label className="text-center m-auto container">{title}</label>
          </div>
        </div>
      </div>
    </>
  );
};
