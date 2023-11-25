import React from "react";
import { UseFetchMarvel } from "../hooks/UseFetchMarvel";
import { CardMarvel } from "./CardMarvel";
import { CounterMarvel } from "../hooks/CounterMarvel";
import { totalCharacters } from "../helpers/GetDataMarvel";
import { FooterMarvel } from "./FooterMarvel";
import { CardSeries } from "./CardSeries";
import { CardComics } from "./CardComics";
import { CardFilter } from "./CardFilter";
import { PlaceHoldermarvel } from "./PlaceHoldermarvel";
import { PlcaeHolderComics } from "./PlcaeHolderComics";
import { PlaceHolderSeries } from "./PlaceHolderSeries";

export const CreateData = ({ tipo, name = "", mode }) => {
  const { counter, totalPages, dec, inc, pages, setTotalPages, setCounter } =
    CounterMarvel(totalCharacters);
  const { results, isLoading } = UseFetchMarvel(tipo, counter, 20, name);
  const goToPage = (data) => {
    if (data.trim() == "") {
      alert("Enter a page");
    } else if (data > pages || data < 1) {
      alert("Invalid page");
    } else {
      data = Number(data.trim());
      setCounter((data - 1) * 20);
      setTotalPages(data);
    }
  };
  return (
    <>
      {(() => {
        if (mode == "search") {
          return isLoading ? (
            <PlaceHolderSeries color={"danger"} />
          ) : (
            <>
              {results.length === 0 ? (
                <div
                  className="d-flex text-white justify-content-center align-items-center animate__animated animate__fadeIn fs-3"
                  style={{ height: "400px" }}
                >
                  Resource not found
                </div>
              ) : (
                <div className="row  container-fluid rows-cols-1  row-cols-sm-2   row-cols-md-5 g-3  m-auto">
                  {results.map((ch) => (
                    <CardFilter key={ch.id} {...ch} />
                  ))}
                </div>
              )}
            </>
          );
        } else {
          switch (tipo) {
            case "characters":
              return isLoading ? (
                <PlaceHoldermarvel color={"danger"} />
              ) : (
                <div className="row  justify-content-center  container-fluid  ">
                  {results.map((ch) => (
                    <CardMarvel
                      key={ch.id}
                      {...ch}
                      counter={counter}
                      setCounter={setCounter}
                    />
                  ))}
                </div>
              );

            case "series":
              return isLoading ? (
                <PlaceHolderSeries color={"danger"} />
              ) : (
                <div className="row justify-content-center ">
                  {results.map((serie) => (
                    <CardSeries key={serie.id} {...serie} />
                  ))}
                </div>
              );

            case "comics":
              return isLoading ? (
                <PlcaeHolderComics color={"danger"} />
              ) : (
                <div className="row container-fluid rows-cols-2  row-cols-sm-2 row-cols-md-3 g-3  mt-3">
                  {results.map((serie) => (
                    <CardComics key={serie.id} {...serie} />
                  ))}
                </div>
              );

            default:
              return null;
          }
        }
      })()}
      <FooterMarvel
        isLoading={isLoading}
        dec={dec}
        inc={inc}
        counter={totalPages}
        finalIndex={pages}
        goToPage={goToPage}
      />
    </>
  );
};
