import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const Cartwidget = () => {
return(
    <li className="carro">
           <a href=""><FontAwesomeIcon icon={faCartShopping}  /></a>
           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
          
        </li>
)
}


export default Cartwidget;