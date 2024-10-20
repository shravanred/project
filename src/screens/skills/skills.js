import React from "react";
import NavBar from "../../components/navbar/navbar";
import image from "./pexels-felixmittermeier-956999.jpg";
const Skills=()=>{
    return(
        <>
        <div style={{backgroundSize:'cover',
            backgroundImage:`url(${image})` , height:'100vh' 
            }}>
        <NavBar/>
        <h1 style={{color:'white'}}>Welcome to skill</h1>
        </div>
        </>
    )
}

export default Skills;