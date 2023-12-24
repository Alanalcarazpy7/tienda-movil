import React from 'react'
import "../styles/componentes/ubicacion-seleccionar.css"

export default function UbicacionSeleccionar(props) {
  return (
    <div className='contenedor-formulario-seleccionar'>
      <p>{props.input}</p>
      <select>
        <option value="" disabled selected hidden>Selecciona {props.seleccionar}</option>
        <option value="Terreno1">Terreno1</option>
        <option value="Terreno2">Terreno2</option>
        <option value="Terreno3">Terreno3</option>
        <option value="Terreno4">Terreno4</option>
      </select>
    </div>
  )
}
