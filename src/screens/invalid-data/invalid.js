import React from "react";
import { useNavigate } from "react-router-dom";

const Invalid=()=>{
    const navigate=useNavigate();
    const onclickHandler=()=>{
        navigate("/")
    }


    return(
        <>
        <h1>404 user error</h1>
        <button onClick={onclickHandler}>Back to home screen</button>
        </>
    )
}

export default Invalid;