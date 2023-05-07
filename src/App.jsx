import './App.css'

import {InicioPage} from "./pages/inicio/inicioPage";
import {NavBarPage} from "./pages/navBar/navBarPage";
import {VentaPage} from "./pages/venta/ventaPage";

function App() {

  return (
    <>
      <NavBarPage></NavBarPage>
      <InicioPage></InicioPage>
      <VentaPage></VentaPage>
    </>
  )
}

export default App
