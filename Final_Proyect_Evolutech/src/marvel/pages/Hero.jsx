import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  console.log(state);
  const onReturnBack = () => {
    navigate(-1);
  };
  return (
    <div className="text-white text-center ">
      <button className=" btn btn-primary" onClick={onReturnBack}>
        atras
      </button>
    </div>
  );
};
