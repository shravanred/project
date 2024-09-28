import React from "react";
import NavBar from "../../components/navbar/navbar";
import image from "./pexels-felixmittermeier-956999.jpg";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
        
        <div style={{backgroundSize:'cover',
            backgroundImage:`url(${image})` , height:'100vh' 
            }}>
        <NavBar/>

        {/* <img src={image}/> */}
        <h1 style={{color:'white'}}>Welcome to Home</h1>
        {
            [0,1,2,3].map((each)=>{
                return(
                    
                <Link to="/hyderabad/${each}/info">
                    <button style={{color:'red'}} class="bg-blue-500 hover:bg-blue -700 text-black font-bold py-2 mx-2 px-4 rounded">{each}</button>
                </Link>
            
                )
            })
        }
        
        </div>
        </>
    )
}

export default Home;