import React from 'react'
import "../styles/componentes/barra-info.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState,useEffect } from 'react'

export default function BarraInfo() {
  const [hora,setHora]=useState("");

  useEffect(()=>{
    const intervalo=setInterval(()=>{
      const ahora = new Date();
      const horas = ahora.getHours().toString().padStart(2, '0');
      const minutos = ahora.getMinutes().toString().padStart(2, '0');
      setHora(`${horas}:${minutos}`);
    },1000);
    return () => clearInterval(intervalo);
  },[]);

  return (
    <div className='contenedor-barra'>
      <div>
        <h4>{hora}</h4>
      </div>
      <div className='contenedor-iconos'>
        <i class="bi bi-bar-chart-fill"></i>
        <i class="bi bi-wifi"></i>
        <i class="bi bi-battery-full"></i>
      </div>
    </div>
  )
}
