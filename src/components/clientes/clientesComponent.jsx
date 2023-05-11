import "./clientesComponent.css";

export const ClientesComponent = () => {
    return(
            <div>
                <h4 className="tituloClientes">Opiniones clientes</h4>

                    <div className="contenedorSlidierClientes">
                        <div className="contenidoSliderClientes">
                            <div className="clienteSlider">
                            <button className="btnLeft"><img className="flechaLeft" src="img/flechaLeft.svg" alt="" /></button>
                            <p className="textoClientes">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem, amet cum suscipit sed voluptas deleniti itaque quae, quidem unde eligendi iusto odio corporis porro hic qui? Quibusdam, labore suscipit.
                            </p>
                            <h3 className="nombreCliente">Alexander Baral </h3>
                        <button className="btnRight"><img className="img/flechaRight"  src="img/flechaRight.svg" alt="" /></button>
                        </div>

                        <div className="clienteSlider">
                        <img src="img/flechaLeft.svg" alt="" />
                            <p className="textoClientes">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem, amet cum suscipit sed voluptas deleniti itaque quae, quidem unde eligendi iusto odio corporis porro hic qui? Quibusdam, labore suscipit.
                            </p>
                            <h3 className="nombreCliente">Alexander Baral </h3>
                        </div>

                        <div className="clienteSlider">
                            <p className="textoClientes">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem, amet cum suscipit sed voluptas deleniti itaque quae, quidem unde eligendi iusto odio corporis porro hic qui? Quibusdam, labore suscipit.
                            </p>
                            <h3 className="nombreCliente">Alexander Baral </h3>
                        </div>
                        </div>
                    </div>
            </div>
        )
}