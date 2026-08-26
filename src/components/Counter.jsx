import { useEffect, useState } from "react";
import Count from "./Count";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const[width, setWidth] = useState(0)

    // console.log(counter, "counter")

    useEffect(()=> {
        document.title = "counter"
        localStorage.setItem("useEffect", "Use effect treggerd")
        
        window.addEventListener("resize", ()=> {
            setWidth(window.innerWidth);
        })
    })

    const counterHandler =  () =>{
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
    }
    return (
        <div className="counter">
            <Count counter={counter} setCounter={setCounter}/>
            <button onClick={()=> counterHandler()} className="increment-btn">Increment</button>

            <h2>monitor width: {width}</h2>
        </div>
    );
};

export default Counter;