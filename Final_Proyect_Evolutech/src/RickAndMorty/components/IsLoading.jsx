import React from "react";

export const IsLoading = ({ color }) => {
  return (
    <div
      className="bg-dark"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <div className={`spinner-border text-${color}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
