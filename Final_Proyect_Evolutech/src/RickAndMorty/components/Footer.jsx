import React, { useState } from "react";

export const Footer = ({
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
              <a
                className=" btn btn-outline-success me-2 "
                href="#"
                onClick={() => dec()}
                type="button"
                disabled={isLoading}
              >
                Previous
              </a>
            </li>
            <li className="page-item  ">
              <span
                className="page-link rounded-circle me-1 text-dark"
                href="#"
              >
                {counter}
              </span>
            </li>
            <li className="page-item  ">
              <span
                className="page-link  m-1 p-1 bg-dark text-white border-0"
                aria-disabled="true"
              >
                of
              </span>
            </li>
            <li className="page-item">
              <span
                className="page-link rounded-circle me-2 ms-1 text-dark"
                href="#"
              >
                {finalIndex}
              </span>
            </li>
            <li className="page-item">
              <a
                className="btn btn-outline-success "
                href="#"
                onClick={() => inc()}
                disabled={isLoading}
              >
                Next
              </a>
            </li>
            <li className="page-item me-2 ms-2">
              <input
                type="text"
                name="goToPage"
                className="form-control rounded text-center  "
                id="goToPage"
                value={page}
                placeholder="#page"
                onChange={(e) => {
                  setPage(e.target.value);
                }}
              />
            </li>
            <li className="page-item ">
              <a
                className="btn btn-success rounded-circle"
                onClick={handleInput}
              >
                go
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};
