import React from 'react'
import "../styles/componentes/barra-buscador.css"

export default function BarraBuscador(props) {
  return (
    <div className='contenedor-buscar'>
      <div>
        <input placeholder={props.texto} onChange={props.filtroChange}/>
        <i className="bi bi-search" onClick={props.buscarProductos} style={{backgroundColor:props.backgroundColor}}></i>
      </div>
    </div>
  )
}
