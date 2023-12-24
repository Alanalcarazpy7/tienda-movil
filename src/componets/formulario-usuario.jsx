import React from 'react'
import "../styles/componentes/formulario-usuario.css"

export default function FormularioUsuario(props) {
  return (
    <div className='contenedor-formulario'>
      <h4>{props.input}</h4>
      <input/>
    </div>
  )
}
