import React from "react";

export const CardEpisode = ({ id, name, episode, air_date, season }) => {
  return (
    <>
      <div
        className="card  border-success border-2  animate__animated animate__fadeIn "
        style={{ background: "#DBF4DB" }}
      >
        <div className="card-body ">
          <h5 className="card-title bg-dark p-3 text-white rounded">
            <strong className="me-1">{id}.</strong> {name}
          </h5>
          <p className="card-text ps-2">
            <strong>Season:</strong> {season}
          </p>
          <p className="card-text ps-2">
            <strong>Episodio:</strong> {episode}
          </p>
          <p className="card-text ps-2">
            <strong>Release date:</strong> {air_date}
          </p>
        </div>
      </div>
    </>
  );
};
