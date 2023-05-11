import "./footerComponent.css";

export const FooterComponent = () => {
    return(
            <div className="contenedorFooter">

                <div className="seccionMarca">
                    <img className="logoMarca" src="img/Real Estate Logo.png" alt="" />
                    <p className="textoMarca"> Politica de privacidad</p>
                    <p className="textoMarca"> © 2035 por DevGabo. Desarrollado y protegido por Neflify</p>
                </div>

                <div className="seccionPaginas">
                    <ul className="listaLinksPagina">
                        <li className="linksPagina">Inicio</li>
                        <li className="linksPagina">Propiedades</li>
                        <li className="linksPagina">Noticias</li>
                        <li className="linksPagina">Equipo</li>
                        <li className="linksPagina">Contacto</li>
                    </ul>

                    <p className="direccionMarca"> Av. Fray Antonio 10</p>
                    <p className="direccionMarca"> 44100 Guadalajara, Jal. Mexico</p>
                    <p className="direccionMarca"> info@misitio.com</p>

                    <div className="contenedorRedesSociales">
                        <a href="https://www.instagram.com/iamgabo22/"><img className="svgRedesSociales" src="img/instagram.svg" alt="" /></a>
                        <a href="https://es-la.facebook.com/"><img className="svgRedesSociales" src="img/facebook.svg" alt="" /></a>
                        <a href="https://github.com/GabrielDev22"><img className="svgRedesSociales" src="img/github.svg" alt="" /></a>
                        <a href="https://www.linkedin.com/in/gabriel-torres-431690229/"><img className="svgRedesSociales" src="img/linkedin.svg" alt="" /></a>
                    </div>

                </div>

            </div>
        )
}