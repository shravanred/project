import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home/home";
import Skills from "../screens/skills/skills";
import Projects from "../screens/project/project";
import Invalid from "../screens/invalid-data/invalid";
import Products from "../screens/products/products";
import Doctors from "../screens/doctors/doctors";
import Engineers from "../screens/engineers/engineers";

const Stack=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}>
                <Route path="doctors" element={<Doctors/>}/>
                <Route path="engineers" element={<Engineers/>}/>
            </Route>

            <Route path="/:locatoin/:restaurent/info" element={<Products/>} />

            <Route path="*" element={<Invalid/>} />                  {/*    "* "represnts for invalid path */}
   
        </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default Stack;