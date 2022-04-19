import { stringify } from '@firebase/util'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch, WriteBatch } from 'firebase/firestore'
import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import CartaItem from './CartaItem'
import ItemCount from './ItemCount'


export default function Cart() {
    const { productosCart,add,total,vaciar } = useCartContext()
    const [enviar, setenviar] = useState(true)
    
    const generarOrden = async(e)=>{
        e.preventDefault()
        const orden={
            buyer:{
                nombre:e.target.nombre.value,
                mail:e.target.mail.value,
                telefono:e.target.telefono.value
            },
            total: total,
            item:
                productosCart.map(
                    i=>( {
                            id:i.item.id,
                            nombre:i.item.nombre,
                            precioCantidad:i.cantidad*i.item.precio,
                            cantidad: i.cantidad
                        }))
        }
        e.target.nombre.value=""
        e.target.mail.value=""
        e.target.telefono.value=""
        const db = getFirestore()
        const col = collection(db,'ordenes')
        await addDoc(col,orden).then()
        
        console.log(orden)
        const col2 = collection(db,"Productos")
        let a= orden.item.map(i=>i.id)
        console.log(a)
        const q = await query(col2,
            where( "id" , "in" , a)
            )
            
        const batch = writeBatch(db)
        console.log(q)
        await getDocs(q).then(res=>res.docs.forEach(
           res=> batch.update(res.ref,{
               stock: res.data().stock - orden.item.find(i=>i.id === (res.data().id)).cantidad
           })
        )).finally()
        batch.commit()
        vaciar()
    }
    
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
         <button className='detallecartitem' onClick={()=>{setenviar(false)}}>Terminar Compra
         </button>
         {enviar || productosCart.length === 0 ?<></>:
         <form className='form' onSubmit={generarOrden}>
             <label>Nombre</label><input type="text" name='nombre' /> 
             <label>Mail</label><input type="text" name="mail" />
             <label>Telefono</label><input type="number" name="telefono" />
             <input type="submit"  value="Enviar" />
         </form>
         }
         </div>
    </div>      
    )
  
}