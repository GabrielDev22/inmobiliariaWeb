import './App.css'

import {InicioPage} from "./pages/inicio/inicioPage";
import {NavBarPage} from "./pages/navBar/navBarPage";
import {VentaPage} from "./pages/venta/ventaPage";
import {RentaPage} from "./pages/renta/rentaPage";
import {ClientePage} from "./pages/clientes/clientesPage";
import {ContactanosPage} from "./pages/contactanos/contactanosPage";
import {InfoContactoPage} from "./pages/infoContacto/infoContactoPage";
import {FooterPage} from "./pages/footer/footerPage";

function App() {

  return (
    <>
      <NavBarPage></NavBarPage>
      <InicioPage></InicioPage>
      <VentaPage></VentaPage>
      <RentaPage></RentaPage>
      <ClientePage></ClientePage>
      <ContactanosPage></ContactanosPage>
      <InfoContactoPage></InfoContactoPage>
      <FooterPage></FooterPage>
    </>
  )
}

export default App
