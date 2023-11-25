import React, { useState } from "react";
import { ModalFormMarvel } from "../components/ModalFormMarvel";
import { CreateData } from "../components/CreateData";

export const Search = () => {
  const [form, setForm] = useState({
    tipo: localStorage.getItem("tipo") || "",
    name: localStorage.getItem("name") || "",
  });
  const { tipo, name } = form;
  const formStater = ({ name, tipo }) => {
    if (tipo === "characters") {
      setForm({ tipo: "characters", name: "nameStartsWith=" + name });
    } else if (tipo === "series") {
      setForm({ tipo: "series", name: "titleStartsWith=" + name });
    } else {
      setForm({ tipo: "comics", name: "titleStartsWith=" + name });
    }
  };
  localStorage.setItem("name", name);
  localStorage.setItem("tipo", tipo);
  return (
    <>
      <ModalFormMarvel formStater={formStater} />
      <hr />
      {tipo !== "" ? (
        <CreateData tipo={tipo} name={name} mode={"search"} />
      ) : (
        ""
      )}
    </>
  );
};
