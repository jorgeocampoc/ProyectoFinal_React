import React, { useState } from "react";
import { ModalForm } from "../components/ModalForm";
import { UseCounter } from "../hooks/Counter";
import { UseFetchRickAndMorty } from "../hooks/UseFetchRickAndMorty";
import { IsLoading } from "../components/IsLoading";
import { CardCharacter } from "../components/CardCharacter";
import { Footer } from "../components/Footer";
import { NotCharacterFound } from "../components/NotCharacterFound";

export const FilterCharacter = () => {
  const [formCharacter, setFormCharacter] = useState({
    name: "",
    gender: "",
    status: "",
  });
  const [ch, setCh] = useState("");
  const formStater = (data) => {
    setFormCharacter(data);
    setCh("character");
    reset();
  };
  const { name, gender, status } = formCharacter;
  const { counter, inc, dec, reset, setCounter } = UseCounter();
  const { characters, isLoading, info } = UseFetchRickAndMorty(
    ch,
    counter,
    name,
    gender,
    status
  );
  const goToPage = (data) => {
    if (data.trim() == "") {
      alert("Enter a page");
    } else if (data > info.pages || data < 1) {
      alert("Invalid page");
    } else {
      data = Number(data.trim());
      setCounter(data);
    }
  };

  return (
    <>
      <ModalForm formStater={formStater} />
      {isLoading ? (
        <IsLoading color={"success"} />
      ) : characters.length === 0 && name != "" ? (
        <NotCharacterFound tipo={"character"} />
      ) : (
        <div className="container-fluid mb-5 pb-5 bg-dark row  rows-cols-1  row-cols-sm-2 row-cols-md-3 g-3  m-auto ">
          {characters.map((ch) => {
            return (
              <div key={ch.id} className="">
                <CardCharacter
                  name={ch.name}
                  image={ch.image}
                  gender={ch.gender}
                  status={ch.status}
                  origin={ch.origin}
                  img={ch.img}
                />
              </div>
            );
          })}
          {
            characters.length !==0?<Footer
            isLoading={isLoading}
            dec={dec}
            inc={inc}
            counter={counter}
            finalIndex={info.pages}
            goToPage={goToPage}
          />:''
          }
        </div>
      )}
    </>
  );
};
