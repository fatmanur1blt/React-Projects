import { click } from "@testing-library/user-event/dist/click";
import React, {useState} from "react";

function Counter (){

    const [count,setCount] = useState(0);

    const increaseButton = () => {
        setCount (count + 1);
    };

    const decreaseButton = () => {
        setCount (count - 1);
    };
    return(
        <>      
        <h1>{count}</h1>
        <button onClick={increaseButton}>Increase</button>
        <button onClick={decreaseButton}>Decrease</button>
        </>
    );
}
export default Counter;