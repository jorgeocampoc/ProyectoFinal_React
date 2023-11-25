import React from "react";

export const NotCharacterFound = ({ tipo }) => {
  return (
    <div className="w-50 text-center  m-auto alert alert-primary  animate__animated animate__fadeIn">
      <span className="" href="#">
        <img
          src="./src/assets/rm.png"
          width="30"
          height="30"
          className="d-inline-block align-top rounded-circle "
          disabled
        />
        <label className="mt-1">No {tipo} found.</label>
      </span>
    </div>
  );
};
