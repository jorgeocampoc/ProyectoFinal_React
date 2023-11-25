import React from "react";

export const CardCharacter = ({ status, name, image, gender, origin, img }) => {
  const icon = () => {
    if (status === "Dead") {
      return (
        <i className="text-dark fa-circle rounded-circle bg-dark me-2 ms-2"></i>
      );
    } else if (status === "Alive") {
      return (
        <i className="fa-circle text-success rounded-circle bg-success me-2 ms-2"></i>
      );
    } else if (status === "unknown") {
      return (
        <i className="fa-circle rounded-circle text-secondary bg-secondary me-2 ms-2"></i>
      );
    }
  };
  return (
    <>
      <div className=" rounded  animate__animated animate__fadeIn ">
        <div
          className="card "
          style={{ background: "#CFEDCE", height: "230px" }}
        >
          <div className="row no gutters ">
            <div className="col-4 m-1">
              <img
                src={image}
                alt=""
                style={{ height: "220px", width: "100%" }}
                className=" card-img rounded  animate__animated animate__fadeIn "
              />
            </div>
            <div className="col-7 mt-1 mb-1 custom-border-rm">
              <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
                <p className="card-text ">Gender: {gender}</p>
                <p className="">
                  {icon()}
                  {status}
                </p>
                <p className="card-text">
                  Origin: <small>{origin}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
