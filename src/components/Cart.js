
import { addDoc, collection, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useCartContext } from '../context/CartContext'
import CartaItem from './CartaItem'
import ItemCount from './ItemCount'
import validator from 'validator';

export default function Cart() {
    const { productosCart,add,total,vaciar } = useCartContext()
    const [enviar, setenviar] = useState(true)
    const [mensajeError, setmensajeError] = useState("")
    const navigation = useNavigate()
    
    const generarOrden = async(e)=>{
        e.preventDefault()
        if(e.target.mail.value===e.target.mailre.value & validator.isEmail(e.target.mail.value)){
        setmensajeError("")
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
        e.target.mailre.value=""
        e.target.telefono.value=""
        const db = getFirestore()
        const col = collection(db,'ordenes')
        await addDoc(col,orden).then()
        const col2 = collection(db,"Productos")
        let a= orden.item.map(i=>i.id)
        console.log(a)
        const q = await query(col2,
            where( "id" , "in" , a)
            )
            
        const batch = writeBatch(db)
        await getDocs(q).then(res=>res.docs.forEach(
           res=> batch.update(res.ref,{
               stock: res.data().stock - orden.item.find(i=>i.id === (res.data().id)).cantidad
           })
        )).finally(
            vaciar(),
            navigation("/pedidoexitoso")
            )
        batch.commit()
        }else{
            !validator.isEmail(e.target.mail.value)?setmensajeError("Ingreso un email incorrecto"):setmensajeError("El email no coincide")
        }
    }    
  return (
      <div className='contedorcard'>
    <div className='cart'>
     
     {
         productosCart.length ===   0 ?
         <span>No hay prouctos en el carro</span>:
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
                                    {
                                    enviar || productosCart.length === 0 ?
                                                <></>:
                                                        <form className='form' onSubmit={generarOrden}>
                                                            <label>Nombre</label><input type="text" name='nombre' /> 
                                                            <label>Mail</label><input type="text" name="mail" />
                                                            <label>Repetir Mail</label><input type="text" name="mailre" />
                                                            <label>Telefono</label><input type="number" name="telefono" />
                                                            <input type="submit"  value="Enviar" />
                                                            <p>{mensajeError}</p>
                                                        </form>
                                    
                                    }
                            </div>
                    </div>      
    )
  
}