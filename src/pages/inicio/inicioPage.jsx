import {InicioComponent} from "../../components/inicio/inicioComponent";
import {VentaComponent} from "../../components/venta/ventaComponent";
import {RentaComponent} from "../../components/renta/rentaComponent";
import {ClientesComponent} from "../../components/clientes/clientesComponent";
import {ContactanosComponent} from "../../components/contactanos/contactanosComponent";
import {InfoContactoComponent} from "../../components/infoContacto/infoContactoComponent";


export const InicioPage = () => {
    return(
        <div>
            <InicioComponent></InicioComponent>
            <VentaComponent></VentaComponent>
            <RentaComponent></RentaComponent>
            <ClientesComponent></ClientesComponent>
            <ContactanosComponent></ContactanosComponent>
            <InfoContactoComponent></InfoContactoComponent>
        </div>
    )
}