import React from "react";
import { UseCounter } from "../hooks/Counter";
import { UseFetchRickAndMorty } from "../hooks/UseFetchRickAndMorty";
import { IsLoading } from "../components/IsLoading";
import { Footer } from "../components/Footer";
import { CardEpisode } from "../components/CardEpisode";
import { convertEpisode } from "../utilities/ConvertSesion";

export const ChaptersPage = () => {
  const { counter, inc, dec, reset, setCounter } = UseCounter();
  const { characters, isLoading, info } = UseFetchRickAndMorty(
    "episode",
    counter
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
      {isLoading ? (
        <IsLoading color={"success"} />
      ) : (
        <div className="bg-dark row  rows-cols-1  row-cols-sm-2 row-cols-md-3 g-3  m-auto ">
          {characters.map((ch) => {
            return (
              <div key={ch.id} className=" col-md-3 mb-3">
                <CardEpisode
                  id={ch.id}
                  name={ch.name}
                  episode={ch.season.e}
                  season={ch.season.s}
                  air_date={ch.air_date}
                />
              </div>
            );
          })}
        </div>
      )}
      <Footer
        isLoading={isLoading}
        dec={dec}
        inc={inc}
        counter={counter}
        finalIndex={info.pages}
        goToPage={goToPage}
      />
    </>
  );
};
