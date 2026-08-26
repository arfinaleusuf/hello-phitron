// import React from "react";

const Count = ({ counter, setCounter}) => {

    return <h2>
        <button onClick={()=> setCounter(100)}>Update</button>
        {counter}</h2>;
};

export default Count;