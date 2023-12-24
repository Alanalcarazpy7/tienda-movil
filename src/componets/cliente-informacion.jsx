import React from 'react'

export default function ClienteInformacion(props) {

  

  return (
    <tr className='contenedor-cliente-info'>
      <td>{props.nombre}</td>
      <td>{props.telefono}</td>
      <td>{props.cedula}</td>
      <td><i class="bi bi-pencil-fill " onClick={props.onEditar}></i></td>
      <td><i class="bi bi-trash" ></i></td>
    </tr>
  )
}
