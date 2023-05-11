import "./contactanosComponent.css";

export const ContactanosComponent = () =>{
    return(
        <div className="contenedorContactanos">
            <h4 className="tituloContactanos">!La casa de tus sueños a un paso¡</h4>
            <div className="contenidoContactanos">
                <div className="informacinContactanos">
                    <img className="imagenContactanos" src="img/telefono.svg" alt="" />
                    <h3 className="subtituloContactanos">Llamanos</h3>
                    <p className="textoContactanos">Llamadas gratis 1-800-000-000</p>
                </div>

                <div className="informacinContactanos">
                    <img className="imagenContactanos" src="img/mapa.svg" alt="" />
                    <h3 className="subtituloContactanos">Encuéntranos</h3>
                    <p className="textoContactanos">Av. Fray Antonio Alcalde 10 44100 Guadalajara, Jal, Mexico</p>
                </div>

                <div className="informacinContactanos">
                    <img className="imagenContactanos" src="img/gmail.svg" alt="" />
                    <h3 className="subtituloContactanos">Enviar un email</h3>
                    <p className="textoContactanos"> correo directo info@misitio.com</p>
                </div>
            </div>
        </div>
    )
}