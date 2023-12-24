import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BarraInfo from './componets/barra-info-celular.jsx';
import BuscarProducto from './pages/menu-desplegable/buscar-producto.jsx';
import Login from './pages/auth/login.jsx';
import TiendaPedidos from './pages/pedidos/tienda-pedidos.jsx';
import FormularioUbicacion from './pages/formulario-ubicacion-mapa/formulario-ubicacion-mapa.jsx';
import GestorCliente from './pages/gestor-cliente/gestor-cliente.jsx';


function App() {
  return (
    <div className="App">
    
        <Router>
        
        <BarraInfo />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tienda-pedidos" element={<TiendaPedidos />} />
          <Route path="/buscar-productos" element={<BuscarProducto />}/>
          <Route path="/tienda-map" element={<FormularioUbicacion/>} />
          <Route path="/gestor-cliente" element={<GestorCliente/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
