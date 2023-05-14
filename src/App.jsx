import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {InicioPage} from "./pages/inicio/inicioPage";
import {NavBarPage} from "./pages/navBar/navBarPage";
import {FooterPage} from "./pages/footer/footerPage";
import {CompraExpressComponent} from "./components/compraExpress/compraExpressComponent";
import {VentaExpressComponent} from "./components/ventaExpress/ventaExpressComponent";

function App() {

  return (
    <Router>
        <NavBarPage></NavBarPage>

      <Routes>
        <Route path='/' element={<InicioPage></InicioPage>} />
        <Route path='/compraExpress' element={<CompraExpressComponent></CompraExpressComponent>}></Route>
        <Route path='/ventaExpress' element={<VentaExpressComponent></VentaExpressComponent>}></Route>
      </Routes>

        <FooterPage></FooterPage>
    </Router>

  
  
  )
}

export default App
