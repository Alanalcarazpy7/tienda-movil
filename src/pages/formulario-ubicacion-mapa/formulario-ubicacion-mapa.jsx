import React from 'react'
import FormularioUsuario from '../../componets/formulario-usuario'
import BarraDesplazarse from '../../componets/barra-desplazarse'
import UbicacionSeleccionar from '../../componets/ubicacion-seleccionar'
import "../../styles/formulario-ubicacion-mapa/formulario-ubicacion-mapa.css"
import BarraBuscador from '../../componets/barra-buscador'
import Maps from '../../componets/maps'
import { useState } from 'react'

export default function FormularioUbicacion() {
  const [filtro, setfiltro] = useState("")

  const filtroChange=(event)=>{
    const nombreProducto=event.target.value;
    setfiltro(nombreProducto)
  }

  const buscarUbicacion=(()=>{
    return filtro;
  })

  return (
    <div>
      <div className='contenedor-formulario-ubicacion-mapa'>
        <div className='contenedor-titulo'>
          <p>Personas</p>
          <i className="bi bi-x"></i>
        </div>
        <div className='contenedor-formulario-input'>
          <FormularioUsuario
          input="Nombre:"
          />
          <FormularioUsuario
          input="Documento:"
          />
          <FormularioUsuario
          input="Telefono:"
          />
          <FormularioUsuario
          input="Direccion:"
          />
        </div>
        <div className='contenedor-ubicacion'>
          <UbicacionSeleccionar
            input="Terreno"
            seleccionar="el terreno"
          />
          <UbicacionSeleccionar
            input="Rol"
            seleccionar="el rol"
          />
        </div>
        <div className='contenedor-mapa'>
          <BarraBuscador
            texto={"Buscar por nombre del lugar"}
            backgroundColor="black"
            filtroChange={filtroChange}
          />
          <Maps
            ciudad={filtro}
          />
        </div>
      </div>
      <div className='contenedor-boton'>
        <button className='boton-guardar'>
          Guardar
        </button>
      </div>
      
      <BarraDesplazarse
        mapa={true}
        pedidoProducto={false}
        gestorCliente={false}
      />
    </div>
  )
}
