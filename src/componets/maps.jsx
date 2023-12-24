import React from 'react'

export default function Maps() {
  
  const mapaURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115448.714330286!2d-57.63615709956308!3d-25.278243307522203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da5e573a00553%3A0x6a1fc72f95db54ad!2sParque%20Guasu%20Metropolitano!5e0!3m2!1ses!2spy!4v1703299390560!5m2!1ses!2spy"
  return (
    <div className='contenedor-mapa'>
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
