import React from 'react'
import "../styles/componentes/productos.css"
import { useState,useEffect } from 'react'

export default function Productos(props) {
  const [cantInicial,setCantInicial]=useState(0);
  const [totalInicial,setTotalInicial]=useState(0);

  // Esta función se ejecutará cada vez que cambie cantInicial
  useEffect(()=>{
    totalProducto();
  },[cantInicial]);

  function aumentarProducto(){
    setCantInicial(cantInicial+1);
  };

  function disminuirProducto(){
    if(cantInicial>0){
      setCantInicial(cantInicial-1);
    }
  }

  function totalProducto(){
      setTotalInicial(cantInicial*props.precio);
      props.cantProductos(props.id,cantInicial,cantInicial*props.precio)
  }
  


  return (
    <div className='contenedor-interfaz-producto'>
      <div className='contenedor-imagen'>
        <img src={props.imagen} alt='imagen-producto'/>
      </div>
      <div>
        <h3>{props.nombre}</h3>
        <div className='contenedor-producto'>
          <div className='producto-descripcion'>
            <p>Disponible: 105 lt</p>
            <p>Precios $ {props.precio}</p>
          </div>
          <div className='producto-aumentar-disminuir'>
            <p>Total: {totalInicial} D$</p>
            <div className='botones-aumentar-disminuir'>
              <i className="bi bi-dash-square-fill" style={{backgroundColor:"black"}}
              onClick={()=>{
                disminuirProducto();
                }
              }
              ></i>
              <p>{cantInicial}</p>
              <i className="bi bi-plus-square-fill" style={{color:"green",backgroundColor:"white"}}
              onClick={()=>{
                aumentarProducto();
                }
              }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
