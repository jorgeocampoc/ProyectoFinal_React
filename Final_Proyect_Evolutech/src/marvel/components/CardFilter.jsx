import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CardFilter = (props) => {
  const { tipo, id, thumbnail, name, title } = props;
  const image = thumbnail.path + "." + thumbnail.extension;
  const navigate = useNavigate();
  const [isButtonHovered, setIsButtonHovered] = useState();

  const handleDetails = () => {
    navigate(`/details/${id}`, { state: { props } });
  };
  return (
    <div className="card-group container mb-4 custom-card-filter ">
      <div className="card ">
        <img
          src={image}
          style={{ width: "100%", height: "350px" }}
          className="card-img-top  "
          alt="..."
        />
        <div className="card-body bg-dark ">
          {name === undefined ? (
            <h5 className="card-title text-center text-white mb-3">{title}</h5>
          ) : (
            <h5 className="card-title text-center text-white mb-3">{name}</h5>
          )}

          <div className="d-flex justify-content-center ms-5 me-5">
            <button
              className={`btn ${isButtonHovered ? "btn-danger" : "btn-light"}`}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              onClick={handleDetails}
            >
              More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
