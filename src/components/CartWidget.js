import React from 'react'
import Carro from './ejerciciodos/carrito-de-compras.png'

export default function CartWidget({cantProd}) {
  return (
    <div className='carrocompleto'>
    <img className='Carro' src={Carro} alt="" />
    <p className='cantidadProductos'>{cantProd}</p>
    </div>
  )
}
