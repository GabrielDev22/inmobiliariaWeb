import './App.css'

import {InicioPage} from "./pages/inicio/inicioPage";
import {NavBarPage} from "./pages/navBar/navBarPage";
import {VentaPage} from "./pages/venta/ventaPage";
import {RentaPage} from "./pages/renta/rentaPage";

function App() {

  return (
    <>
      <NavBarPage></NavBarPage>
      <InicioPage></InicioPage>
      <VentaPage></VentaPage>
      <RentaPage></RentaPage>
    </>
  )
}

export default App
