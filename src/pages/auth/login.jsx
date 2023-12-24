import React from 'react'
import Boton from "../../componets/boton"
import "../../styles/login/login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='contenedor-login'>
      <div className='contenedor-login-app'>
        <input placeholder='Usuario'></input>
        <input placeholder='Contraseña'></input>
        <Link to="/tienda-pedidos">
          <Boton/>
        </Link>
      </div>
    </div>
  )
}
