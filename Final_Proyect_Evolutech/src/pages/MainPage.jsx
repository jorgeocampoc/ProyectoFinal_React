import React from "react";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  const handleImg = ({ target }) => {
    navigate(`/${target.id}`, {
      replace: true,
    });
  };
  return (
    <div className="custom-div ">
      <div className="custom rounded  pb-1 pt-1  ">
        <h1 className="text-white m-5 text-center fs-1">
          <label className="d-block">APIs</label>
          Marvel && Rick and Morty
        </h1>
      </div>
      <hr />
      <div className="row m-5 justify-content-around ">
        <div className="card  col-sm-10 col-md-5  mb-2 p-2 animate__animated animate__fadeInLeft">
          <div className="card-body bg-custom mb-1">
            <h5 className="card-title">Marvel </h5>
            <p className="card-text ">
              The Marvel Comics API allows developers everywhere to access
              information about Marvel's vast library of comics—from what's
              coming up, to 70 years ago.
            </p>
          </div>
          <img
            src="./src/assets/download.png"
            className="card-img-bottom img-hover  "
            id="marvel"
            alt="..."
            onClick={handleImg}
          />
        </div>

        <div className="card  col-sm-10 col-md-5  mb-4 p-2 animate__animated  animate__fadeInRight">
          <div className="card-body bg-custom2 ">
            <h5 className="card-title"> Rick and Morty </h5>
            <p className="card-text">
              The Rick and Morty API is a REST(ish) and GraphQL API based on the
              television show Rick and Morty. You will have access to about
              hundreds of characters, images, locations and episodes. The Rick
              and Morty API is filled with canonical information as seen on the
              TV show.
            </p>
          </div>
          <img
            src="./src/assets/rm.png"
            className="card-img-bottom pt-5 img-hover  animate__animated animate__fadeIn"
            alt="..."
            onClick={handleImg}
            id="characters"
          />
        </div>
      </div>
      <footer className="bg-dark text-light d-flex justify-content-between align-items-center p-2">
        <div className="content-footer ">&copy; 2023 - Jorge Ocampo Cerezo</div>
        <div className="">
          <label className="me-2">My repositorie</label>
          <button className="btn btn-outline-primary">
            <i className="fab fa-linkedin  "></i>
          </button>
          <button className="btn btn-outline-success ms-2">
            <i className="fab fa-github "></i>
          </button>
        </div>
      </footer>
    </div>
  );
};
