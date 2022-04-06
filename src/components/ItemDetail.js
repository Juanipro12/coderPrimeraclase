import React from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

export default function ItemDetail({item}) {
    const { agregarProducto } = useCartContext()
    const add = (id,cantidadProductos)=>{
        cantidadProductos === 0
        ?console.log("No se agrego ningun producto")
        :agregarProducto(item,cantidadProductos)
    }
  return (
    <div className='cardDetalle'>
        <img src={item.img} alt={item.nombre} />
        <div className='cardDescripcion'>
              <h2>{item.nombre}</h2>
              <span>${item.precio}</span>
              <p>Stock:{item.stock}</p>
              <ItemCount key={item.id} item={item} stock={item.stock} initial={0} onAdd={add}/>
        </div>
    </div>
  )
}



