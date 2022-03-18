import React from 'react'
import Item from './ejerciciocuatro/Item'
import ItemCount from './ItemCount'

export default function ItemListContainer({Productos}) {
    const add = (cantidadProductos)=>{
        cantidadProductos === 0
        ?console.log("No se agrego ningun producto")
        :console.log("Cantidad de productos agregados al carrito: "+cantidadProductos)
    }
  return (
      <div>
          <h1 className='TituloProductos'>
            Lista de productos
        </h1>
    <div className='itemListCont'>
        
        
            {Productos.map(prod => (<div className='card'>
                <Item key={`${prod.id}${prod.precio}`} Nombre={prod.nombre} Precio={prod.precio} Img={prod.img} />
                <ItemCount key={prod.id} stock={prod.stock} initial={0} onAdd={add} />
            </div>))}
        
        
    </div>
    </div>
    
  )
}
