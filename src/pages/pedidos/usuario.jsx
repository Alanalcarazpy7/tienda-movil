import React from 'react'
import "../../styles/pedidos/usuario.css"

export default function Usuario(props) {

  return (
    <div className="contenedor-interfaz-usuario">
      <div className="contenedor-imagen-usuario">
        <img src={props.imagen} alt='imagen-usuario'/>
      </div>
      <div className="contenedor-usuario">
        <h3>Pedido de Productos</h3>
        <div className='contenedor-info-usuario'>
          <div className='info-usuario'>
            <h5>{props.nombre}</h5>
            <div>
              <p>C.I. {props.cedula}</p>
              <p>Telefono {props.telefono}</p>
              <p>Dir. {props.dir}</p>
            </div>
          </div>
          <div className='info-cuenta-usuario'>
            <h4>CREDITO</h4>
            <p>{props.credito}</p>
            <h4>CUENTA</h4>
            <p>{props.cuenta}</p>
          </div>
          <div className='info-productos-usuario'>
            <p>ZAFRA MAIZ 2024</p>
            <p style={{fontSize:"14px"}}>ZAFRA MAIZ 2024</p>
            <p>ZAFRA MAIZ 2024</p>
            <h5>Total DS {props.totalPrecio}</h5>
            <h5>Productos ({props.cantidadProductos})</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
