import React from 'react'
import "../../styles/gestor-cliente/agregar-cliente.css"

export default function AgregarClientes(props) {
  return (
    <div className='contenedor-input-ingresar'>
        <input type="text" onChange={props.obtenerValorNombre} value={props.valueNombre} name='nombre' placeholder='nombre'/>
        <input type="text" onChange={props.obtenerValorTelefono} value={props.valueTelefono} name='telefono'  placeholder='telefono'/>
        <input type="text" onChange={props.obtenerValorCedula}  value={props.valueCedula} name='cedula'  placeholder='cedula'/>
        <button onClick={props.cambiarValor}>Enviar</button>
    </div>
  )
}
