
import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartaItem from './CartaItem'
import ItemCount from './ItemCount'


export default function Cart() {
    const { productosCart,add } = useCartContext()
   
    
   
    console.log(productosCart)
    
  return (
    <div className='cart'>
     
     {
     productosCart.map( (x)=> {
         return(
         <div className='itemcart'>
         <CartaItem cantidad={x.cantidad} item={x.item}/>
         <ItemCount key={x.item.id} item={x.item} stock={x.item.stock} initial={0} onAdd={add}/>
         </div>
         )})
    
         }
    </div>      
    )
  
}
