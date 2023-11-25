import React from "react";

export const CardMarvel = ({
  name,
  thumbnail,
  description,
  modified,
}) => {
  const image = thumbnail.path + "." + thumbnail.extension;
  return (
    <>
      <div className="card col-9 col-md-5 col-xl-2  col-sm-5 m-2 col-xl-3 col-xxl-3  bg-dark border border-3 shadow-lg rounded-5">
        <div className="row g-0  bg-dark text-white mt-1 mb-1  ">
          <div className="  col-md-5 mt-1 mb-1 ">
            <img
              src={image}
              className="img-fluid rounded animate__animated animate__fadeIn  rounded-5"
              alt={name}
              style={{ width: "100%", height: "330px" }}
            />
          </div>
          <div className="col-md-7  ">
            <div className="card-body ">
              <h5 className="card-title text-center mb-4">{name}</h5>
              {description == "" ? (
                <p>No description </p>
              ) : (
                <p className="card-text " style={{ textAlign: "justify" }}>
                  {description}
                </p>
              )}
              <p className="card-text ">
                Last modified::
                <small className="text-white d-block text-sm ">
                  {" "}
                  {modified}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
