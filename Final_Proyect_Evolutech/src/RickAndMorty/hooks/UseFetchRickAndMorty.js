import { useEffect, useState } from "react";
import { GetDataRickAndMorty } from "../helpers/GetDataRickAndMorty";



export const UseFetchRickAndMorty = ( tipo, page, character, gender, status ) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [info, setInfo] = useState([]);

  const getCharacters = async () => {
    {  
      setIsLoading(true)
    }
    const {characters, info} = await GetDataRickAndMorty( tipo, page,character, gender, status);
      setCharacters(characters);
      setInfo(info);
      setIsLoading(false)  
  };

  useEffect(() => {
    getCharacters();
  }, [ tipo, page, character, gender, status   ]);

  return {
    characters,
    isLoading,
    info
  };
}
