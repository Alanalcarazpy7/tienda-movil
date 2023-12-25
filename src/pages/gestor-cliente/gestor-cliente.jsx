import React from 'react';
import BarraDesplazarse from '../../componets/barra-desplazarse';
import "../../styles/gestor-cliente/gestor-cliente.css";
import ClienteInformacion from '../../componets/cliente-informacion';
import BarraBuscador from '../../componets/barra-buscador';
import { useState } from 'react';
import "../../styles/gestor-cliente/input-style.css";
import AgregarClientes from './agregar-clientes';

export default function GestorCliente(props) {
  const clientes = [
    { id:"1",nombre: 'Alan Alcaraz', telefono: '564651312', cedula: '070895465' },
    { id:"2",nombre: 'Joel Montiel', telefono: '454545455', cedula: '987878545' },
    { id:"3",nombre: 'Juan Pérez', telefono: '564651312', cedula: '070895465' },
    { id:"4",nombre: 'María	García', telefono: '454545455', cedula: '987878545' },
    { id:"5",nombre: 'Carlos Rodríguez', telefono: '564651312', cedula: '070895465' },
    { id:"6",nombre: 'Ana	López', telefono: '454545455', cedula: '987878545' },
    { id:"7",nombre: 'Laura	Martínez', telefono: '564651312', cedula: '070895465' },
    { id:"8",nombre: 'Raquel Torres', telefono: '454545455', cedula: '987878545' },
  ];

  const [enEdicion, setEnEdicion] = useState(false);
  const [cliente, setClientes] = useState(clientes);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(clientes);
  const [filtro, setfiltro] = useState("")
  const [mostrarAgregarCliente, setmostrarAgregarCliente] = useState(false);

  const aggCliente=(()=>{
    setmostrarAgregarCliente(!mostrarAgregarCliente)
  })

  const handleEditarClick = (index) => {
    setClienteSeleccionado(cliente[index]);
    setEnEdicion(true);
  };

  const obtenerValor = (name, event) => {
    setClienteSeleccionado((prevClienteSeleccionado) => ({
      ...prevClienteSeleccionado,
      [name]: event.target.value,
    }));
  };

  
  const cambiarValor = () => {
    setClientes((prevClientes) =>
      prevClientes.map((cliente) =>
        cliente.id === clienteSeleccionado.id ? { ...cliente, ...clienteSeleccionado } : cliente
      )
    );
    setEnEdicion(false);
  };

  const borrarCliente = (id) => {
    setEnEdicion(false);
    setClientes((prevClientes) =>
      prevClientes.filter((cliente) => cliente.id !== id)
    );
    console.log(cliente)
  };
  
  const filtroChange=(event)=>{
    const nombreProducto=event.target.value;
    setfiltro(nombreProducto)
  }

  //Funcion que va filtrando de acuerdo al nombre
  function filtrarProductos(){
    return cliente.filter((productos)=>productos.nombre.toLowerCase().includes(filtro.toLowerCase()))
  }

  const obtenerValorAggCliente=((name, event)=>{
    
    setClienteSeleccionado((prevClienteSeleccionado) => ({
      ...prevClienteSeleccionado,
      [name]: event.target.value,
    }));
  })

  const agregarClienteNuevo=(()=>{
    
    setClientes((prevClientes) => [
      ...prevClientes,
      {
        id:cliente[cliente.length-1].id+1,
        nombre:clienteSeleccionado.nombre,
        telefono:clienteSeleccionado.telefono,
        cedula:clienteSeleccionado.cedula,
      },
    ])
    setmostrarAgregarCliente(false)
  })

  return (
    <div className='contenedor-gestor-cliente'>
      {enEdicion ? (
        <>
        <AgregarClientes
          obtenerValorNombre={(e) => obtenerValor('nombre', e)}
          obtenerValorTelefono={(e) => obtenerValor('telefono', e)}
          obtenerValorCedula={(e) => obtenerValor('cedula', e)}
          cambiarValor={cambiarValor}
          valueNombre={clienteSeleccionado.nombre}
          valueTelefono={clienteSeleccionado.telefono}
          valueCedula={clienteSeleccionado.cedula}
        />
        {/*
          <div key={clienteSeleccionado.id} className='contenedor-input'>
            <input type="text" onChange={(e) => obtenerValor('nombre', e)} value={clienteSeleccionado.nombre} name='nombre'/>
            <input type="text" onChange={(e) => obtenerValor('telefono', e)} value={clienteSeleccionado.telefono} name='telefono'/>
            <input type="text" onChange={(e) => obtenerValor('cedula', e)} value={clienteSeleccionado.cedula} name='cedula'/>
            <button onClick={cambiarValor}>Enviar</button>
          </div>
          */}
        </>
      ) : (
        <>
        </>
      )}
      {/*Si mostrarCliente es true se activara el campo de texto para añadir mas clientes*/}
      {mostrarAgregarCliente && (
        <AgregarClientes
          obtenerValorNombre={(e) => obtenerValorAggCliente('nombre', e)}
          obtenerValorTelefono={(e) => obtenerValorAggCliente('telefono', e)}
          obtenerValorCedula={(e) => obtenerValorAggCliente('cedula', e)}
          cambiarValor={agregarClienteNuevo}
        />
        )}
      <BarraBuscador
        texto={"Buscar Cliente"}
        backgroundColor="black"
        filtroChange={filtroChange}
      />
      <table className='contenedor-tabla'>
        <thead>
          <tr className='contenedor-informacion'>
            <th>Cliente</th>
            <th>Teléfono</th>
            <th>Cedula</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtrarProductos().map((cliente, index) => (
            <ClienteInformacion
              key={index}
              id={cliente.id}
              nombre={cliente.nombre}
              telefono={cliente.telefono}
              cedula={cliente.cedula}
              onBorrar={()=>borrarCliente(cliente.id)}
              onEditar={() => handleEditarClick(index)}
              
            />
          ))}
        </tbody>
      </table>
      <div className='contenedor-icon-personadd'>
        <i className="bi bi-person-plus"
        onClick={aggCliente}
        ></i>
      </div>
      <BarraDesplazarse
        mapa={false}
        pedidoProducto={false}
        gestorCliente={true}
      />
    </div>
  );
}
