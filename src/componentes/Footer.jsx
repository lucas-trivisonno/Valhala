import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebook}from "@fortawesome/free-brands-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
return(
    <div className="fondo-naranja">
<ul className="iconos">
    <li className="redes">
     <a href=""><FontAwesomeIcon icon={faWhatsapp}  /></a>
    </li>
    <li className="redes">
    <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
    </li>
    <li className="redes">
     <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
    </li>
</ul>
    </div>
)
}


export default Footer;