import "./equipoComponent.css";
import {InfoContactoComponent} from "../infoContacto/infoContactoComponent";

export const EquipoComponent = () => {
    return(
            <div>
                <div className="portaExpress">
                    <img className="imagenPortadaExpress" src="img/equipo/equipoPortada.jpg" alt="" />
                </div>

                <h3 className="subtituloNoticias">AL EQUIPO</h3>
                <h1 className="tituloNoticias">Agentes</h1>

                <div className="contenedorEquipo">
                    <div className="contenidoEquipo">
                        <h2 className="nombreEquipo">Gregorio Jasso</h2>
                        <p className="numeroEquipo">Agente #123.456.78</p>
                        <img className="imagenEquipo" src="img/equipo/equipoPersonalOne.jpg" alt="" />
                        <h3 className="tituloCorreoEquipo">Email</h3>
                        <p className="correoEquipo">info@misitio.com</p>
                        <h3 className="tituloCorreoEquipo">Telefono</h3>
                        <p className="correoEquipo">+52-1-33-12345678</p>
                    </div>

                    <div className="contenidoEquipo">
                        <h2 className="nombreEquipo">Gregorio Jasso</h2>
                        <p className="numeroEquipo">Agente #123.456.78</p>
                        <img className="imagenEquipo" src="img/equipo/equipoPersonalTwo.jpg" alt="" />
                        <h3 className="tituloCorreoEquipo">Email</h3>
                        <p className="correoEquipo">info@misitio.com</p>
                        <h3 className="tituloCorreoEquipo">Telefono</h3>
                        <p className="correoEquipo">+52-1-33-12345678</p>
                    </div>

                    <div className="contenidoEquipo">
                        <h2 className="nombreEquipo">Gregorio Jasso</h2>
                        <p className="numeroEquipo">Agente #123.456.78</p>
                        <img className="imagenEquipo" src="img/equipo/equipoPersonalThree.jpg" alt="" />
                        <h3 className="tituloCorreoEquipo">Email</h3>
                        <p className="correoEquipo">info@misitio.com</p>
                        <h3 className="tituloCorreoEquipo">Telefono</h3>
                        <p className="correoEquipo">+52-1-33-12345678</p>
                    </div>

                    <div className="contenidoEquipo">
                        <h2 className="nombreEquipo">Gregorio Jasso</h2>
                        <p className="numeroEquipo">Agente #123.456.78</p>
                        <img className="imagenEquipo" src="img/equipo/equipoPersonalFour.jpg" alt="" />
                        <h3 className="tituloCorreoEquipo">Email</h3>
                        <p className="correoEquipo">info@misitio.com</p>
                        <h3 className="tituloCorreoEquipo">Telefono</h3>
                        <p className="correoEquipo">+52-1-33-12345678</p>
                    </div>

                    <div className="contenidoEquipo">
                        <h2 className="nombreEquipo">Gregorio Jasso</h2>
                        <p className="numeroEquipo">Agente #123.456.78</p>
                        <img className="imagenEquipo" src="img/equipo/equipoPersonalFive.jpg" alt="" />
                        <h3 className="tituloCorreoEquipo">Email</h3>
                        <p className="correoEquipo">info@misitio.com</p>
                        <h3 className="tituloCorreoEquipo">Telefono</h3>
                        <p className="correoEquipo">+52-1-33-12345678</p>
                    </div>

                    <div className="contenidoEquipo">
                        <h2 className="nombreEquipo">Gregorio Jasso</h2>
                        <p className="numeroEquipo">Agente #123.456.78</p>
                        <img className="imagenEquipo" src="img/equipo/equipoPersonalSix.jpg" alt="" />
                        <h3 className="tituloCorreoEquipo">Email</h3>
                        <p className="correoEquipo">info@misitio.com</p>
                        <h3 className="tituloCorreoEquipo">Telefono</h3>
                        <p className="correoEquipo">+52-1-33-12345678</p>
                    </div>
                </div>

            <InfoContactoComponent></InfoContactoComponent>
            </div>
        )
} 