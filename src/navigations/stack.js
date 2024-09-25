import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home/home";
import Skills from "../screens/skills/skills";
import Projects from "../screens/project/project";
import Invalid from "../screens/invalid-data/invalid";

const Stack=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/skills" Component={Skills}/>
            <Route path="/projects" Component={Projects}/>

            <Route path="*" Component={Invalid}/>                  {/*    "* "represnts for invalid path */}
   
        </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default Stack;