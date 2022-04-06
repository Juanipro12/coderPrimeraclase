import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function CartaItem({item,cantidad}) {
    const {img , precio , nombre} = item
    const { removerProducto } = useCartContext()
    
  return (
    <>
    <img src={img} alt={nombre}/>
    <p>${precio}</p>
    <h2>{nombre}</h2>
    <span>cantidad: {cantidad}</span>
    <button onClick={()=>removerProducto(item.id)}>eliminar</button>
    </>
  )
}
