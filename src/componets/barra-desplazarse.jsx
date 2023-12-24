import React from 'react'
import "../styles/componentes/barra-desplazarse.css"
import { Link } from 'react-router-dom';

export default function BarraDesplazarse(props) {
  return (
    <div className='contenedor-barra-iconos'>
      <Link to="/tienda-map">
        {props.mapa?<i style={{fontWeight:"bold",fontSize:"25px",color:"white"}} class="bi bi-map"></i>:<i style={{color:"white"}} class="bi bi-map"></i>}
      </Link>
      <Link to="/tienda-pedidos">
        {props.pedidoProducto? <i style={{fontWeight:"bold",fontSize:"25px",color:"white"}} class="bi bi-people"></i>:<i style={{color:"white"}} class="bi bi-people"></i>}
      </Link>
      <Link to="/gestor-cliente">
      {props.gestorCliente? <i style={{fontWeight:"bold",fontSize:"25px",color:"white"}} class="bi bi-list"></i>:<i style={{color:"white"}} class="bi bi-list"></i>}
      </Link>
    </div>
  )
}
