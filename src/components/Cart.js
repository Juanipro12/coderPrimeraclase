
import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/CartContext'
import CartaItem from './CartaItem'
import ItemCount from './ItemCount'


export default function Cart() {
    const { productosCart,agregarProducto } = useCartContext()
    const add = (id,cantidadProductos)=>{
        cantidadProductos === 0
        ?console.log("No se agrego ningun producto")
        :agregarProducto(id,cantidadProductos)
    }
    
   
    console.log(productosCart)
    
  return (
    
     
     
     productosCart.map( (x)=> {
         return(
         <>
         <CartaItem cantidad={x.cantidad} item={x.item}/>
         <ItemCount key={x.item.id} item={x.item} stock={x.item.stock} initial={0} onAdd={add}/>
         </>
         )})
    

           
    )
  
}
