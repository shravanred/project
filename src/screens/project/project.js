import React from "react";
import NavBar from "../../components/navbar/navbar";
import image from "./pexels-felixmittermeier-956999.jpg";
import { Outlet, Link} from "react-router-dom";
const Projects=()=>{
    return(
        <>
        <div style={{backgroundSize:'cover',
            backgroundImage:`url(${image})` , height:'100vh' 
            }}>
        <NavBar/>
        <h1 style={{color:'white'}}>Welcome to project</h1>
        <Outlet/>
        <Link to="doctors">Doctors</Link>
        <Link to="engineers">Engineers</Link>
        </div>
        </>

    )
}

export default Projects;