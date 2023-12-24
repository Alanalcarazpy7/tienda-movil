import React from 'react';
import BarraDesplazarse from '../../componets/barra-desplazarse';
import "../../styles/gestor-cliente/gestor-cliente.css";
import ClienteInformacion from '../../componets/cliente-informacion';
import "../../styles/componentes/cliente-informacion.css";
import BarraBuscador from '../../componets/barra-buscador';
import { useState } from 'react';

export default function GestorCliente(props) {
  const clientes = [
    { id:"1",nombre: 'Alan Alcaraz', telefono: '564651312', cedula: '070895465' },
    { id:"2",nombre: 'Joel Montiel', telefono: '454545455', cedula: '987878545' },
  ];

  const [enEdicion, setEnEdicion] = useState(false);
  const [cliente, setClientes] = useState(clientes);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(clientes);
  

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

  const borrarCliente=((id)=>{
    console.log(id);
  })

  return (
    <div className='contenedor-gestor-cliente'>
      {enEdicion ? (
        <>
          <div key={clienteSeleccionado.id}>
            <input type="text" onChange={(e) => obtenerValor('nombre', e)} value={clienteSeleccionado.nombre} name='nombre'/>
            <input type="text" onChange={(e) => obtenerValor('telefono', e)} value={clienteSeleccionado.telefono} name='telefono'/>
            <input type="text" onChange={(e) => obtenerValor('cedula', e)} value={clienteSeleccionado.cedula} name='cedula'/>
            <button onClick={cambiarValor}>enviar</button>
          </div>
        </>
      ) : (
        <>
        </>
      )}
      <BarraBuscador
        texto={"Buscar Cliente"}
        backgroundColor="black"
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
          {cliente.map((cliente, index) => (
            <ClienteInformacion
              key={index}
              id={cliente.id}
              nombre={cliente.nombre}
              telefono={cliente.telefono}
              cedula={cliente.cedula}
              onEditar={() => handleEditarClick(index)}
            />
          ))}
        </tbody>
      </table>
      <div className='contenedor-icon-personadd'>
        <i className="bi bi-person-plus"></i>
      </div>
      <BarraDesplazarse
        mapa={false}
        pedidoProducto={false}
        gestorCliente={true}
      />
    </div>
  );
}
