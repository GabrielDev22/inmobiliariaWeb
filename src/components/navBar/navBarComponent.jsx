import "./navBarComponent.css";

export const NavBarComponent = () => {
    return(
        <div className="contenedorNavBar">
            <div className="contenidoNavbar">
                <img className="logoNavBar" src="img/RealLogo.png" alt="" />
                <div className="redesSocialesNavBar">
                        <a href="https://www.instagram.com/iamgabo22/"><img className="svgRedesSocialesNavbar" src="img/instagramWhite.svg" alt="" /></a>
                        <a href="https://es-la.facebook.com/"><img className="svgRedesSocialesNavbar" src="img/facebookWhite.svg" alt="" /></a>
                        <a href="https://github.com/GabrielDev22"><img className="svgRedesSocialesNavbar" src="img/githubWhite.svg" alt="" /></a>
                        <a href="https://www.linkedin.com/in/gabriel-torres-431690229/"><img className="svgRedesSocialesNavbar" src="img/linkedinWhite.svg" alt="" /></a>
                    </div>

            <div className="linksPaginaNavBar">
                <ul className="listadoNavbar">
                    <li className="linksPaginasNavbar">Inicio</li>
                    <li className="linksPaginasNavbar">Propiedades</li>
                    <li className="linksPaginasNavbar">Noticias</li>
                    <li className="linksPaginasNavbar">Equipo</li>
                    <li className="linksPaginasNavbar">Contacto</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
