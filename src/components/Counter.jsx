import { useEffect, useRef, useState } from "react";
import Count from "./Count";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const[width, setWidth] = useState(0)

    // const [randerCount, setRanderCount] = useState(0)

    const randerCount = useRef(0);
    const inRef = useRef(null)

    useEffect(()=> {
        // setRanderCount((prev)=> prev+1);
        randerCount.current = randerCount.current + 1
    });

    // console.log(randerCount.current, "randerCount");

    useEffect(()=> {
        document.title = `counter: ${counter}`
        localStorage.setItem("useEffect", "Use effect treggerd")
        // console.log("from inside useEffect")
        // console.log(window.innerWidth);
        
        window.addEventListener("resize", ()=> {
            setWidth(window.innerWidth);
        });
    }, [counter]);

    useEffect(()=> {
        // console.log(" Use effect Empty dependency array");
        // load data from api
    }, []);

    const counterHandler =  () =>{
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
    }

    const handleBtnClick = () =>{
        // console.log(inRef.current.value);
        inRef.current.focus()
    }
    return (
        <div className="counter">
            <h2>rander count: {randerCount.current}</h2>
            <Count counter={counter} setCounter={setCounter}/>
            <button onClick={()=> counterHandler()} className="increment-btn">Increment</button>

            <h2>monitor width: {width}</h2>

            <input ref={inRef} type="text" />
            <button onClick={handleBtnClick}>Click</button>
        </div>
    );
};

export default Counter;