import React from "react";
import Cartwidget from "./Cartwidget";


const Header = () => {
return(
    <div className=" fondo-naranja">
        <nav className="navbar navbar-expand-lg fondo-naranja ">
    <div className="container fondo-naranja ">
      <a className="navbar-brand tipografia" href="#">Valhala</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  p-5" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link tipografia" aria-current="page" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link tipografia" href="#">Contacto</a>
          </li>
          </ul>
      </div>
      <Cartwidget />
    </div>
    
  </nav>
  
  </div>
)
}


export default Header;