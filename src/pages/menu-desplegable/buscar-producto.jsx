import React from 'react'
import "../../styles/menu-desplegable/buscar-productos.css"
import BarraDesplazarse from '../../componets/barra-desplazarse'
import Productos from '../../componets/productos'
import imagenProducto from "../../images/productos/producto-img.png"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import BarraBuscador from '../../componets/barra-buscador'

export default function BuscarProducto() {

  const productosData = [
    { id: "1",nombre:"Potenciador de oro benu 1 lt" ,imagen: imagenProducto, precio: '35.00',cantidad:0,precioTotal:0 },
    { id: "12",nombre:"tenciador de oro benu 1 lt", imagen: imagenProducto, precio: '35.00',cantidad:0,precioTotal:0 },
    { id: "123",nombre:"enciador de oro benu 1 lt", imagen: imagenProducto, precio: '35.00',cantidad:0,precioTotal:0 },
    { id: "1234",nombre:"nciador de oro benu 1 lt", imagen: imagenProducto, precio: '35.00',cantidad:0,precioTotal:0 },
    { id: "12345",nombre:"Potenci de oro benu 1 lt", imagen: imagenProducto, precio: '35.00',cantidad:0,precioTotal:0 },
    { id: "123456",nombre:"Potendor de oro benu 1 lt", imagen: imagenProducto, precio: '35.00',cantidad:0,precioTotal:0 },
    { id: "1234567",nombre:"iador de oro benu 1 lt", imagen: imagenProducto, precio: '35.00',cantidad:0,precioTotal:0 },
    ];
  const [producData, setproducData] = useState(productosData)
  const [filtro, setfiltro] = useState("")

  //Funcion para actualizar la cantidad y precio Total del componente en el array de objetos
  const cantProd=(id,nuevaCantidad,nuevoPrecio)=>{
    console.log(nuevoPrecio)
    setproducData((prevProducts)=>
      prevProducts.map((producto)=>
        producto.id===id?{...producto,cantidad:nuevaCantidad,precioTotal:nuevoPrecio}:producto
      ),
    )
  };

  function cantidadProductos(){
    let suma=0;
    producData.forEach((producto)=>{
        suma+=producto.cantidad
    })
    return suma;
  }

  //Funcion que obtiene lo que se escribe en el input
  const filtroChange=(event)=>{
    const nombreProducto=event.target.value;
    setfiltro(nombreProducto)
  }

  //Funcion que va filtrando de acuerdo al nombre
  function filtrarProductos(){
    return productosData.filter((productos)=>productos.nombre.toLowerCase().includes(filtro.toLowerCase()))
  }

  const buscarProductos = () => {
    // Filtrar productos con la palabra clave actual
    const productosFiltrados = filtrarProductos();
    setproducData(productosFiltrados);
  };


  return (
    <div>
      <div className='contenedor-buscar-producto'>
        <div className='contenedor-buscador'>
          <Link to="/tienda-pedidos">
            <i className="bi bi-arrow-left atras-flecha"></i>
          </Link>
          <div>
            <BarraBuscador
              texto={"Nombre del Producto"}
              filtroChange={filtroChange}
              buscarProductos={buscarProductos}
              backgroundColor="rgb(2, 46, 113)"
            />
          </div>
        </div>
        <div className='contenedor-barra-productos'>
          <div className='barra-desplazadora-productos'>
          {filtrarProductos().map((producto) => (
            <Productos
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                imagen={producto.imagen}
                precio={producto.precio}
                cantProductos={cantProd}
            />
            ))}
          </div>
        </div>
        <div className='contenedor-items'>
          <h4>Items Seleccionados [{cantidadProductos()}]</h4>
          <i class="bi bi-check-circle-fill"></i>
        </div>
      </div>
      <BarraDesplazarse
        mapa={false}
        pedidoProducto={false}
        gestorCliente={false}
      />
    </div>
  )
}
