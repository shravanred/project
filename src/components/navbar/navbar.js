import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
const linkstyle={
    textDecoration:'none'
}

const liststyle={
    margin:10
}

    return(
        <div>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Logo
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item" style={liststyle}>
          {/* <a className="nav-link" href="#">
            Home
          </a> */}
          <Link to={"/"} style={linkstyle}>Home</Link>
        </li>
        <li className="nav-item" style={liststyle}>
          {/* <a className="nav-link" href="#">
            Skills
          </a> */}
          <Link to={"/skills"} style={linkstyle}>Skills</Link>
        </li>
        <li className="nav-item" style={liststyle}>
          {/* <a className="nav-link" href="#">
            Project
          </a> */}
          <Link to={"/projects"} style={linkstyle}>Projects</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    );
}

export default NavBar;