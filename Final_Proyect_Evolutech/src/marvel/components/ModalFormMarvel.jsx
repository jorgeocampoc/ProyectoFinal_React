import { useState, useRef, useEffect } from "react";

export const ModalFormMarvel = ({ formStater }) => {
  const nameF = localStorage.getItem("name").split("=")[1];
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [formState, setFormState] = useState({
    name: nameF || "",
    tipo: localStorage.getItem("tipo") || "",
  });
  const { tipo, name } = formState;

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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

  const isButtonDisabled = name.trim() === "";

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
              ref={inputRef} // Asignar la referencia al input
            />
          </div>
        </li>

        <li className="nav-item dropdown  col-md-2 mb-3 ">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              name="tipo"
              value={tipo}
              onChange={handleinput}
            >
              <option value="characters">characters</option>
              <option value="comics">comics</option>
              <option value="series">series</option>
            </select>
            <label htmlFor="floatingSelect">
              <strong>tipo</strong>
            </label>
          </div>
        </li>

        <li className="text-center mt-3 mb-3 ">
          <button
            className={`btn ${isButtonHovered ? "btn-danger" : "btn-light"}`}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={onSave}
            disabled={isButtonDisabled}
          >
            Search
          </button>
        </li>
      </ul>
    </>
  );
};
