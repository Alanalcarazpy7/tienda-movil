import React from 'react'
import { useState,useEffect } from 'react'

export default function Maps({ciudad}) {

  //Conectarme con la Api
  const react_app_key="3f7d26e3bd0b4c67822215006232612"
  const react_app_url="http://api.weatherapi.com/v1/current.json?aqi=no"

  const [datoMaps, setdatoMaps] = useState(null); // Estado para almacenar la ciudad

  async function cargarInfo(){
    console.log("ciudad",ciudad)
    try{
      const request=await fetch(`${react_app_url}&key=${react_app_key}&q=${ciudad}`);

      const json=await request.json();
      setdatoMaps(json)
    }
    catch(error){
      throw error
    }
  }

  

  //Por defecto el mapa mostrara la ciudad de Asuncion
  let lat="-25.267026"
  let lon="-57.576060"

  if (datoMaps && datoMaps.location){
    lat=`${datoMaps.location.lat}`
    lon=`${datoMaps.location.lon}`
  }

  const mapaURL=`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115448.714330286!2d${lon}08!3d${lat}203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!!2s!5e0!3m2!1ses!2spy!4v1703299390560!5m2!1ses!2spy`

  useEffect(() => {
    cargarInfo();  
  }, [ciudad]);

  return (
    <div className='contenedor-mapa'>
      <p style={{textAlign:"center",fontSize:"18px"}}>Cood. {lat} , {lon}</p>
      <iframe 
      title='Google Maps'
      src={mapaURL}
      width="100%" 
      height="400" 
      style={{border:"0",padding:"0.7rem"}}
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}
