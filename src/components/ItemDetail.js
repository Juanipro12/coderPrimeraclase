import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({item}) {
    const add = (cantidadProductos)=>{
        cantidadProductos === 0
        ?console.log("No se agrego ningun producto")
        :console.log("Cantidad de productos agregados al carrito: "+cantidadProductos)
    }
  return (
    <div>
        <img src={item.img} alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <span>${item.precio}</span>
        <p>Stock:{item.stock}</p>
        <ItemCount key={item.id} stock={item.stock} initial={0} onAdd={add}/>
    </div>
  )
}



