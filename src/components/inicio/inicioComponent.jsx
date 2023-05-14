import "./inicioComponent.css";
import { Link } from "react-router-dom";

export const InicioComponent = () => {
    return(
            <div>
                <div className="contenedorInicio">
                    <h2 className="tituloInicio">Nuevos Precios</h2>
                     <p className="textoInicio">EXCLUSIVOS DE CUVIER</p>
                    <button className="buttonInicio"><a className="linkInicio" href="">Explorar</a></button>
                    <div className="contenedorImagen">
                         <img className="imagenInicio" src="img/imagenInicio.webp" alt="" />
                    </div>
                </div>

            <div className="contenedorBusquedad">
                <h2 className="tituloBusquedad">¿QUE ESTÁS BUSCANDO?</h2>
              <div className="subContenedorBusquedad">
                <div className="contenidoBusquedad">
                    <Link to='/compraExpress'><h3 className="subtituloBusquedad">Comprar</h3></Link>
                    <img className="imagenBusquedad" src="img/casaInicio.jpg" alt="" />
                </div>

                <div className="contenidoBusquedad">
                    <Link to="/ventaExpress"><h3 className="subtituloBusquedad">Venta</h3></Link>
                    <img className="imagenBusquedad" src="img/ventaCasa.jpg" alt="" />
                </div>
            </div>
            </div>  


            </div>
        )
}