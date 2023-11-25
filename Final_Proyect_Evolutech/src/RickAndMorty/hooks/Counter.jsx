import { useState } from "react";
import { finalIndex } from "../helpers/GetDataRickAndMorty";


export const UseCounter = ( initialValue = 1 ) => {
    
    const [counter, setCounter] = useState( initialValue )
    const inc = () => {
        if( finalIndex === counter ) return
        setCounter( counter + 1 );
    }
    const dec = () => {
        if( counter == 1 ) return;
        setCounter(counter-1);
    }
    const reset = () => {
        
        setCounter(1);
    }

  return {
            counter,
            inc,
            dec,
            reset,
            setCounter
        } 
}
