import "./rentaComponent.css";

export const RentaComponent = () =>{
    return(
        <div>
            <h4 className="subtituloVenta">NUEVOS PRECIOS</h4>
            <h2 className="tituloVenta">En Renta</h2>

            <div className="containerVenta">
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
                    <img className="imagenCasa" src="img/rentaTwo.jpeg" alt="" />

                    <h3 className="direccionVenta">Av. Hidalgo 345</h3>
                    <p className="PaisVenta">Guadalajara, Jal.. Mexico</p>
                    <p className="precioVenta">$36,000</p>
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
                        <p className="especificacionesCasa">2</p>
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
                    <img className="imagenCasa" src="img/rentaThree.jpeg" alt="" />

                    <h3 className="direccionVenta">Avenida Mexico 495</h3>
                    <p className="PaisVenta">Guadalajara, Jal.. Mexico</p>
                    <p className="precioVenta">$30,000</p>
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
                    <img className="imagenCasa" src="img/rentaFour.webp" alt="" />

                    <h3 className="direccionVenta">Av. Patria 2348</h3>
                    <p className="PaisVenta">Guadalajara, Jal.. Mexico</p>
                    <p className="precioVenta">$24,000</p>
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
                        <p className="especificacionesCasa">2</p>
                    </div>
                    
                    <div className="contenidoDeLaCasa">   
                        <img className="svgVenta" src="img/zona.png" alt="" />
                        <p className="descripcionCasa">Mt2</p>
                        <p className="especificacionesCasa">1234</p>
                    </div>
                    </div>
                </div>
            </div>

            <button className="btnCompra"><a className="linkCompra" href="">Ver mas</a></button>
            <hr />
        </div>
    )
}