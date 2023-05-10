import './App.css'

import {InicioPage} from "./pages/inicio/inicioPage";
import {NavBarPage} from "./pages/navBar/navBarPage";
import {VentaPage} from "./pages/venta/ventaPage";
import {RentaPage} from "./pages/renta/rentaPage";
import {ClientePage} from "./pages/clientes/clientesPage";

function App() {

  return (
    <>
      <NavBarPage></NavBarPage>
      <InicioPage></InicioPage>
      <VentaPage></VentaPage>
      <RentaPage></RentaPage>
      <ClientePage></ClientePage>
    </>
  )
}

export default App
