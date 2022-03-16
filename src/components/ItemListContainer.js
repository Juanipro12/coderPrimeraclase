import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer() {
    const add = (cantidadProductos)=>{
        cantidadProductos === 0
        ?console.log("No se agrego ningun producto")
        :console.log("Cantidad de productos agregados al carrito: "+cantidadProductos)
    }
  return (
    <div>
        <h1>
            Lista de productos
        </h1>
        <ol>
            <li>
                producto 1
                <ItemCount key={1} stock={3} initial={0} onAdd={add} />
            </li>
            <li>
                producto 2
                <ItemCount key={2} stock={2} initial={0} onAdd={add} />
            </li>
            <li>
                producto 3
                <ItemCount key={3} stock={8} initial={0} onAdd={add} />
            </li>
            <li>
                producto 4
                <ItemCount key={4} stock={10} initial={0} onAdd={add} />
            </li>
        </ol>
        
    </div>
  )
}
