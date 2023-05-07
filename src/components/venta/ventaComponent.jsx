import "./ventaComponent.css";

export const VentaComponent = () => {
    return(
        <div>  
            <h4 className="subtituloVenta">NUEVOS PREDIOS</h4>
            <h2 className="tituloVenta">En Venta</h2>

            <div className="containerVenta">
                <div className="contenidoVenta">
                    <img src="img/imagenVenta.webp" alt="" />
                    <p className="textoVenta">Compra</p>

                    <h3 className="direccionVenta">Ramon Corona 2748</h3>
                    <p className="textoVenta">Guadalajara, Jal.. Mexico</p>
                    <p className="precioVenta">$17,000,000</p>
                    <hr />
                    <div className="capacidadDeLaCasa">
                        <img src="" alt="" />
                        <p>4</p>

                        <img src="" alt="" />
                        <p>2</p>

                        <img src="" alt="" />
                        <p>3</p>

                        <img src="" alt="" />
                        <p>1234</p>

                    </div>
                </div>
            </div>

        </div>
    )
}