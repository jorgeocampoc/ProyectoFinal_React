import { useEffect, useState } from "react";

export const ModalForm = ({ formStater }) => {
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    status: "",
  });
  const { name, status, gender } = formState;
  const [isButtonHovered, setIsButtonHovered] = useState();

  const handleinput = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onSave = () => {
    formStater(formState);
  };

  return (
    <>
      <ul className="nav nav-tabs row justify-content-center text-white mt-3 m-5">
        <li className="nav-item  col-md-2">
          <div className="input-group input-group-sm mb-3 ">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <strong>Name</strong>
            </span>
            <input
              type="text"
              className="form-control p-3"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Enter a name"
              name="name"
              id="name"
              value={name || ""}
              onChange={handleinput}
            />
          </div>
        </li>

        <li className="nav-item dropdown  col-md-2 mb-3 ">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              name="gender"
              value={gender}
              onChange={handleinput}
            >
              <option value=""></option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <label htmlFor="floatingSelect">
              <strong>Gender</strong>
            </label>
          </div>
        </li>

        <li className="nav-item  col-md-2 ">
          <div className="form-floating ">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              name="status"
              value={status}
              onChange={handleinput}
            >
              <option value=""></option>
              <option value="dead">Dead</option>
              <option value="alive">Alive</option>
            </select>
            <label htmlFor="floatingSelect">
              <strong>Status</strong>
            </label>
          </div>
        </li>
        <li className="text-center mt-3 mb-3 ">
          <button className={`btn ${isButtonHovered ? "btn-success" : "btn-light"}`}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)} onClick={onSave}>
            Search
          </button>
        </li>
      </ul>
    </>
  );
};
