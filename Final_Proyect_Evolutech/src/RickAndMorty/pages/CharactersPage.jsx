import React, { useMemo } from "react";
import { UseFetchRickAndMorty } from "../hooks/UseFetchRickAndMorty";
import { UseCounter } from "../hooks/Counter";
import { IsLoading } from "../components/IsLoading";
import { CardCharacter } from "../components/CardCharacter";
import { Footer } from "../components/Footer";

export const CharactersPage = () => {
  const { counter, inc, dec, reset, setCounter } = UseCounter();
  const { characters, isLoading, info } = UseFetchRickAndMorty("character", counter,'','','')
  const goToPage = ( data) =>{
    if(data.trim() == ''){
      alert('Enter a page')
    }else if(  data > info.pages || data < 1 ){
      alert('Invalid page')
    }else{
      data = Number(data.trim())
      setCounter( data )
    }
 }
  return (
    <>
      {isLoading ? (
        <IsLoading color={'success'} />
      ) : (
        <div className="bg-dark row  rows-cols-1  row-cols-sm-2 row-cols-md-3 g-3  m-auto ">
          {characters.map((ch) => {
            return (
              <div key={ch.id} className=" ">
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
        </div>
      )}
       <Footer
            isLoading = {isLoading} 
            dec= {dec} 
            inc= {inc} 
            counter = { counter} 
            finalIndex = {info.pages}
            goToPage = { goToPage  }
          />
    </>
  );
};
