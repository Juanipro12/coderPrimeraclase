import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartaItem from './CartaItem'
import ItemCount from './ItemCount'


export default function Cart() {
    const { productosCart,add,total,vaciar } = useCartContext()
   
    
   
    console.log(productosCart)
    
  return (
      <div className='contedorcard'>
    <div className='cart'>
     
     {
         productosCart.length ===   0 ?<span>No hay prouctos en el carro</span>:
     productosCart.map( (x)=> {
         return(
         <div className='itemcart'>
         <CartaItem cantidad={x.cantidad} item={x.item}/>
         <ItemCount key={x.item.id} item={x.item} stock={x.item.stock} initial={0} onAdd={add}/>
         </div>
         )})
    
         }
         </div>
         <div className='detallecart'>
         <span className='detallecartitem'>Total:${total}</span>
         <button className='detallecartitem' onClick={vaciar}>Vaciar Carro</button>
         <button className='detallecartitem' onClick={vaciar}>Terminar Compra</button>
         </div>
    </div>      
    )
  
}