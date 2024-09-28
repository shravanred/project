import React from "react";
import NavBar from "../../components/navbar/navbar";
import { Outlet, Link} from "react-router-dom";
const Projects=()=>{
    return(
        <>
        <NavBar/>
        <h1>Welcome to project</h1>
        <Outlet/>
        <Link to="doctors">Doctors</Link>
        <Link to="engineers">Engineers</Link>
        </>
    )
}

export default Projects;