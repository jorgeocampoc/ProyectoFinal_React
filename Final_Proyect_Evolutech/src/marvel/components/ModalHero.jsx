import React from "react";

export const ModalHero = ({ comics }) => {
  return (
    <>
      <button
        type="button"
        className="ms-3 btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Comcis
      </button>

      <div
        className=" modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-centered modal-dialog-scrollable text-white bg-dark">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h4 className="modal-title m-auto">Total: {comics.available}</h4>
            </div>
            <div className="modal-body">
              <ol className="p-5">
                {comics.items.map((comic) => (
                  <li key={comic.resourceURI} className="m-2 ">
                    <div className="ms-2">{comic.name}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
