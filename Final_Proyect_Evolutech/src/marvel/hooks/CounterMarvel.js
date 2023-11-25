import React, { useState } from "react";

export const CounterMarvel = (limit) => {
  const pages = Math.ceil(limit / 21); //redondear al mayor
  const [counter, setCounter] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const inc = () => {
    if (totalPages === pages) return;
    setCounter(counter + 21);
    setTotalPages(totalPages + 1);
  };
  const dec = () => {
    if (counter === 0) return;
    setCounter(counter - 21);
    setTotalPages(totalPages - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return {
    counter,
    inc,
    dec,
    reset,
    setCounter,
    totalPages,
    setTotalPages,
    pages,
  };
};
