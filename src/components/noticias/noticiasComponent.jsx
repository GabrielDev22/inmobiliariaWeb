import "./noticiasComponent.css";
import {InfoContactoComponent} from "../infoContacto/infoContactoComponent";

export const NoticiasComponent = () =>{
    return(
        <div>
             <div className="portaExpress">
                <img className="imagenPortadaExpress" src="img/noticias/noticiasPortada.jpg" alt="" />
            </div>

            <h3 className="subtituloNoticias">ACTUALIZACIONES</h3>
            <h1 className="tituloNoticias">Noticias</h1>

        <div className="contenedorNoticias">
            <div className="contenidoNoticias">
                <h3 className="fechaNoticias">31 oct 2035</h3>
                <h2 className="lugarNoticias">Escoge tu departamento</h2>
                <p className="textoNoticas">Por Miguel Hurtado</p>
                <img className="imagenNoticias" src="img/noticias/salasNoticias.jpg" alt=""></img>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>
            </div>

            <div className="contenidoNoticias">
                <h3 className="fechaNoticias">30 sept 2035</h3>
                <h2 className="lugarNoticias">10 tips para que los estudiantes paguen la</h2>
                <p className="textoNoticas">Por Gregorio Jasso</p>
                <img className="imagenNoticias" src="img/noticias/estudiantesNoticias.jpg" alt=""></img>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>
            </div>

            <div className="contenidoNoticias">
                <h3 className="fechaNoticias">31 ago 2035</h3>
                <h2 className="lugarNoticias">Encuentra tu casa de campo</h2>
                <p className="textoNoticas">Por Gerardo Guzman</p>
                <img className="imagenNoticias" src="img/noticias/casaCampoNoticias.jpg" alt=""></img>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>
            </div>

            <div className="contenidoNoticias">
                <h3 className="fechaNoticias">31 jul 2035</h3>
                <h2 className="lugarNoticias">5 cosas a considerar al comprar casa nueva</h2>
                <p className="textoNoticas">Por David Andrade</p>
                <img className="imagenNoticias" src="img/noticias/casaNuevaNoticias.jpg" alt=""></img>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>
            </div>

            <div className="contenidoNoticias">
                <h3 className="fechaNoticias">30 jun 2035</h3>
                <h2 className="lugarNoticias">El Proyecto Barro genera 40 MDD</h2>
                <p className="textoNoticas">Por Vanessa Barro</p>
                <img className="imagenNoticias" src="img/noticias/proyectoNoticas.jpg" alt=""></img>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>
            </div>

            <div className="contenidoNoticias">
                <h3 className="fechaNoticias">31 may 2035</h3>
                <h2 className="lugarNoticias">Nueva ley de construccion de Mexico</h2>
                <p className="textoNoticas">Por Brenda Romero</p>
                <img className="imagenNoticias" src="img/noticias/leyesNoticias.jpg" alt=""></img>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>

                <p className="descripcionNoticias"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas assumenda recusandae quam laboriosam necessitatibus commodi natus, est eligendi blanditiis iure cum numquam inventore doloremque id eveniet itaque beatae architecto!
                </p>
            </div>


        </div>

            <InfoContactoComponent></InfoContactoComponent>
        </div>
    )
}