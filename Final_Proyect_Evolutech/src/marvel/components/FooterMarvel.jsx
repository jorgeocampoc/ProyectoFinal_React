import React, { useState } from "react";

export const FooterMarvel = ({
  isLoading,
  dec,
  inc,
  counter,
  finalIndex,
  goToPage,
}) => {
  const [page, setPage] = useState("");
  const handleInput = (e) => {
    goToPage(page);
  };
  return (
    <div className="pb-5 mb-5 bg-dark animate__animated animate__fadeIn ">
      <footer className="footer  fixed ">
        <nav aria-label="Page navigation ">
          <ul className="pagination justify-content-center ">
            <li className="page-item disabled">
              <button
                className=" btn btn-danger me-1 text-white border-3"
                href="#"
                onClick={() => dec()}
                type="button"
                disabled={isLoading}
              >
                Previous
              </button>
            </li>
            <li className="page-item  ">
              <span className="page-link rounded-circle text-dark" href="#">
                {counter}
              </span>
            </li>
            <li className="page-item  ">
              <span
                className="page-link   bg-dark text-white border-0"
                aria-disabled="true"
              >
                <strong>-</strong>
              </span>
            </li>
            <li className="page-item">
              <span
                className="page-link rounded-circle me-1  text-dark"
                href="#"
              >
                {finalIndex}
              </span>
            </li>
            <li className="page-item ">
              <button
                className="btn btn-danger text-white border-3"
                href="#"
                onClick={() => inc()}
                disabled={isLoading}
              >
                Next
              </button>
            </li>
            <li className="page-item me-1  ">
              <input
                type="text"
                name="goToPage"
                className="form-control rounded text-center ms-1 "
                id="goToPage"
                value={page}
                onChange={(e) => {
                  setPage(e.target.value);
                }}
              />
            </li>
            <li className="page-item ms-1 ">
              <button
                className="btn btn-danger border-3 text-white"
                onClick={handleInput}
                disabled={isLoading}
              >
                GO
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};
