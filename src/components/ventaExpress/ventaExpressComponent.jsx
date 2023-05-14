import {RentaComponent} from "../renta/rentaComponent";

export const VentaExpressComponent = () => {
    return(
        <div>
            <RentaComponent></RentaComponent>
            <div className="contenidoVenta">
                    <p className="textoVenta">Renta</p>
                    <img className="imagenCasa" src="img/rentaOne.webp" alt="" />

                    <h3 className="direccionVenta">Av Acueducto 1518</h3>
                    <p className="PaisVenta">Guadalajara. Jal.. Mexico</p>
                    <p className="precioVenta">$44,000</p>
                    <hr />

                    <div className="capacidadDeLaCasa">
                        <div className="contenidoDeLaCasa">
                            <img className="svgVenta" src="img/habitacion.png" alt="" />
                            <p className="descripcionCasa">Habitaciones</p>
                            <p className="especificacionesCasa">4</p>
                        </div>

                        <div className="contenidoDeLaCasa">
                            <img className="svgVenta" src="img/banera.png" alt="" />
                            <p className="descripcionCasa">Baños</p>
                            <p className="especificacionesCasa">2</p>
                        </div>

                        <div className="contenidoDeLaCasa">
                            <img className="svgVenta" src="img/capas.png" alt="" />
                            <p className="descripcionCasa">Niveles</p>
                            <p className="especificacionesCasa">3</p>
                        </div>

                        <div className="contenidoDeLaCasa">
                            <img className="svgVenta" src="img/zona.png" alt="" />
                            <p className="descripcionCasa">Mt2</p>
                            <p className="especificacionesCasa">1234</p>
                        </div>
                    </div>
                </div>

                <div className="contenidoVenta">
                    <p className="textoVenta">Renta</p>
                    <img className="imagenCasa" src="img/rentaOne.webp" alt="" />

                    <h3 className="direccionVenta">Av Acueducto 1518</h3>
                    <p className="PaisVenta">Guadalajara. Jal.. Mexico</p>
                    <p className="precioVenta">$44,000</p>
                    <hr />

                    <div className="capacidadDeLaCasa">
                        <div className="contenidoDeLaCasa">
                            <img className="svgVenta" src="img/habitacion.png" alt="" />
                            <p className="descripcionCasa">Habitaciones</p>
                            <p className="especificacionesCasa">4</p>
                        </div>

                        <div className="contenidoDeLaCasa">
                            <img className="svgVenta" src="img/banera.png" alt="" />
                            <p className="descripcionCasa">Baños</p>
                            <p className="especificacionesCasa">2</p>
                        </div>

                        <div className="contenidoDeLaCasa">
                            <img className="svgVenta" src="img/capas.png" alt="" />
                            <p className="descripcionCasa">Niveles</p>
                            <p className="especificacionesCasa">3</p>
                        </div>

                        <div className="contenidoDeLaCasa">
                            <img className="svgVenta" src="img/zona.png" alt="" />
                            <p className="descripcionCasa">Mt2</p>
                            <p className="especificacionesCasa">1234</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}