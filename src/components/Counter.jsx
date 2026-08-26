import { useState } from "react";
import Count from "./Count";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    // console.log(counter, "counter")

    const counterHandler =  () =>{
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
    }
    return (
        <div className="counter">
            <Count counter={counter} setCounter={setCounter}/>
            <button onClick={()=> counterHandler()} className="increment-btn">Increment</button>
        </div>
    );
};

export default Counter;