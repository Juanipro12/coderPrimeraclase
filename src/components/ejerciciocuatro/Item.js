import React from 'react'

export default function Item({Nombre,Precio,Img}) {
  
  
  return (
    <div className='cardDentro' >
        <h3>{Nombre}</h3>
        <span>${Precio}</span>
        <img className='imgCard' src={Img} alt={Nombre}/>
    </div>
  )
}
