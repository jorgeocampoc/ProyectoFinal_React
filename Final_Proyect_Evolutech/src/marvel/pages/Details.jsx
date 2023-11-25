import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ModalHero } from "../components/ModalHero";

export const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const {
    thumbnail,
    name,
    title,
    description,
    modified,
    comics,
    series,
    stories,
    events,
  } = state.props;
  const image = thumbnail.path + "." + thumbnail.extension;
  const onReturnBack = () => {
    navigate(-1);
  };

  return (
    <div className="container-fluid text-white  ">
      <div className="d-flex row g-3 mt-5 justify-content-center">
        <div className="col-md-4  ">
          <img
            src={image}
            className="rounded-3 animate__animated animate__fadeInLeft"
            style={{ height: "50rem", width: "80%" }}
          />
        </div>
        <div className="col-md-5  animate__animated animate__fadeIn custom-border">
          <h4
            className="text-center d-block mt-3 fs-3"
            style={{ letterSpacing: "5px", textTransform: "uppercase" }}
          >
            {title === undefined ? <p>{name}</p> : <p>{title}</p>}
          </h4>
          <p className="p-3 mt-2  mb-2" style={{ textAlign: "justify" }}>
            <label className="d-block mb-2">Description:</label>
            {description === "" || description === null ? (
              <label className="">Not description</label>
            ) : (
              <label>{description}</label>
            )}
          </p>

          {comics !== undefined ? (
            <div className="ms-3 mb-3">
              Comics available: {comics.available}
            </div>
          ) : (
            ""
          )}

          {series !== undefined  ? (
            <div className="ms-3 mb-3">
              Series available: {series.available}
            </div>
          ) : 
          <div className="ms-3 mb-3">
          Series available: 0
        </div>
          }
          {stories !== undefined && stories.items.length !== 0 ? (
            <div className="ms-3 mb-3">Stories: {stories.available}</div>
          ) : (
            ""
          )}

          {events !== undefined && events.items.length !== 0 ? (
            <div className="ms-3 mb-3">Events: {events.available}</div>
          ) : (
            ""
          )}
          <div className="ms-3">
            <label className="">Last Modified:</label>
            <label>{modified}</label>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className=" btn btn-outline-danger border-2 mt-4 "
          onClick={onReturnBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};
