// import React from "react";
// import {NavLink } from "react-router-dom";
// import "./navbar.css"

// const NavBar=()=>{
// const linkstyle={
//     textDecoration:'none'
// }

// const liststyle={
//     margin:10
// }

//     return(
//         <div>
// <nav className="navbar navbar-expand-sm  navbar-dark">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       Logo
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#collapsibleNavbar"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>

//     <div className="collapse navbar-collapse" id="collapsibleNavbar">
//       <ul className="navbar-nav">
//         <li className="nav-item" style={liststyle}>
//           {/* <a className="nav-link" href="#">
//             Home
//           </a> */}
//           <NavLink to={"/"} style={linkstyle}>Home</NavLink>
//         </li>

//         <li className="nav-item" style={liststyle}>
//           {/* <a className="nav-link" href="#">
//             Skills
//           </a> */}
//           <NavLink to={"/skills"} style={linkstyle}>Skills</NavLink>
//         </li>
        
//         <li className="nav-item" style={liststyle}>
//           {/* <a className="nav-link" href="#">
//             Project
//           </a> */}
//           <NavLink to={"/projects"} style={linkstyle}>Projects</NavLink>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// </div>
//     );
// }

// export default NavBar;


import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
      >
        {/* <NavLink to="/" className="navbar-brand"> Logo 
        </NavLink> */}
        <NavLink to="/" className="bg">
          Home
        </NavLink>
        <NavLink to="/skills" className="bg">
          Skills
        </NavLink>
        <NavLink to="/projects" className="bg">
          Projects
        </NavLink>
        <NavLink to="/products" className="bg">
          Products
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;