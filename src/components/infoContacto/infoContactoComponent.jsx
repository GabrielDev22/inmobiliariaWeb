import "./infoContactoComponent.css";
export const InfoContactoComponent = () =>{
    return(
        <div className="formulario">
            <div className="contenedorInfoContacto">
                <div className="contenedorInfoContacto">
                    <h4 className="subtituloInfo">Encuentra tu casa</h4>
                    <p className="textoInfo"> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo corporis perferendis temporibus blanditiis quae. Voluptatem dignissimos rerum minima quod asperiores doloremque dolorem corporis impedit, deserunt quasi eligendi earum laborum nemo.</p>
                </div> 
                </div>

            <div className="contenedorFormulario">
                <form className="formularioContacto">
                    <label className="labelContacto">Nombre</label>
                    <input className="inputContacto" type="text" required  />

                    <label className="labelContacto">Apellido</label>
                    <input className="inputContacto" type="text" required/>

                    <label className="labelContacto">Email<span style={{color: "red"}}>*</span></label>
                    <input className="inputContacto" type="gmail" required />

                    <div className="radioInput">
                        <label className="labelContacto">Me interesa: </label>
                        <input className="inputRadio" type="radio"/>
                        <label className="labelContacto">Comprar</label>
                        <input className="inputRadio" type="radio" />
                        <label className="labelContacto">Rentar</label>
                        <input className="inputRadio" type="radio" />
                        <label className="labelContacto">Otro</label>
                    </div>

                    <label style={{marginLeft: "12rem"}}>Mensaje</label>
                    <textarea className="textareaContacto" cols="30" rows="10"></textarea>
                </form>
                </div> 
            </div>
        )
} 