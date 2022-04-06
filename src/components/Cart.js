
import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/CartContext'
import CartaItem from './CartaItem'


export default function Cart() {
    const { productosCart } = useCartContext()
    
   
    console.log(productosCart)
    
  return (
    
     
     
     productosCart.map( (x)=> {
         return(<CartaItem cantidad={x.cantidad} item={x.item} 
         />)})
    

           
    )
  
}
