import React from 'react'
import "../styles/componentes/cliente-informacion.css";

export default function ClienteInformacion(props) {

  return (
    <tr className='contenedor-cliente-info'>
      <td>{props.nombre}</td>
      <td>{props.telefono}</td>
      <td>{props.cedula}</td>
      <td><i className="bi bi-pencil-fill " onClick={props.onEditar}></i></td>
      <td><i className="bi bi-trash" onClick={props.onBorrar}></i></td>
    </tr>
  )
}
