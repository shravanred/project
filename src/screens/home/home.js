import React from "react";
import NavBar from "../../components/navbar/navbar";
import image from "./pexels-felixmittermeier-956999.jpg";

const Home=()=>{
    return(
        <>
        
        {/* <div style={{backgroundColor:"black",backgroundSize:"cover",
            backgroundImage:"url("")"
        }}> */}
        <NavBar/>
    
        <h1 >Welcome to Home</h1>
        <img src={image}/>
        {/* </div> */}
        </>
    )
}

export default Home;