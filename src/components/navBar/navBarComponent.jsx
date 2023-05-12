import { useState } from "react";
import "./navBarComponent.css";

export const NavBarComponent = () => {

    const [isOpen, setIsOpen] = useState(false);


    return(
        <div className="navbar">
            <div className="nav_logo"><span style={{color: "#E50E0B"}}>D</span>evGabriel</div>
            <div className={`nav_items ${isOpen && "open"}` }>
                <a href="#">Inicio</a>
                <a href="#">Propiedades</a>
                <a href="#">Noticias</a>
                <a href="#">Equipo</a>
                <a href="#">Contacto</a>
            <div className="redesSociales"> 
                <a href="https://www.instagram.com/iamgabo22/"><img src="img/instagramWhite.svg" alt="" /></a>
                <a href="https://es-la.facebook.com/"><img src="img/facebookWhite.svg" alt="" /></a>
                <a href="https://www.linkedin.com/in/gabriel-torres-431690229/"><img src="img/linkedinWhite.svg" alt="" /></a>
                <a href="https://github.com/GabrielDev22"><img src="img/githubWhite.svg" alt="" /></a>
            </div>    
            </div>

        <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>


        </div>
    )
}
