import Productos from '../../componets/productos'
import imagenProducto from "../../images/productos/producto-img.png"
import persona from "../../images/persona/persona-img.png"
import "../../styles/pedidos/tienda-productos.css"
import Usuario from './usuario'
import { useState,useEffect } from 'react'
import BarraDesplazarse from '../../componets/barra-desplazarse'
import { Link } from 'react-router-dom';

export default function TiendaPedidos() {

  
  
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

  //Funcion para actualizar la cantidad y precio Total del componente en el array de objetos
  const cantProd=(id,nuevaCantidad,nuevoPrecio)=>{
    console.log(nuevoPrecio)
    setproducData((prevProducts)=>
      prevProducts.map((producto)=>
        producto.id===id?{...producto,cantidad:nuevaCantidad,precioTotal:nuevoPrecio}:producto
      ),
    )
  };

  useEffect(()=>{
    console.log(producData)
  },[producData]);

  function precioTotal(){
    let suma=0;
    producData.forEach((producto)=>{
        suma+=producto.precioTotal
    })
    return suma;
  }

  function cantidadProductos(){
    let suma=0;
    producData.forEach((producto)=>{
        suma+=producto.cantidad
    })
    return suma;
  }

  return (
    <div className='tienda-productos'>
      <Usuario
        imagen={persona}
        nombre="JACKSON CASTELLI"
        cedula="5.326.420"
        telefono="0982164522"
        dir="Colonia Alborada"
        credito="$500.000"
        cuenta="$250.000"
        totalPrecio={precioTotal()}
        cantidadProductos={cantidadProductos()}
      />
      <div className='contenedor-productos-deslizar'
        >
        {productosData.map((producto,index) => (
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
        <div className='contenedor-icon-plus'>
          <Link to="/buscar-productos">
            <i className="bi bi-plus-circle-fill"></i>
          </Link>
        </div>
        <BarraDesplazarse
          mapa={false}
          pedidoProducto={true}
          gestorCliente={false}
          
        />
    </div>
  )
}
