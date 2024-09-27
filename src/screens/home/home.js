import React from "react";
import NavBar from "../../components/navbar/navbar";
import image from "./pexels-felixmittermeier-956999.jpg";

const Home=()=>{
    return(
        <>
        
        <div style={{backgroundSize:'cover',
            backgroundImage:`url(${image})` , height:'100vh' 
            }}>
        <NavBar/>

        {/* <img src={image}/> */}
        <h1 style={{color:'white'}}>Welcome to Home</h1>
        
        </div>
        </>
    )
}

export default Home;