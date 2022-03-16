import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer() {
  return (
    <div>
        <h1>
            Lista de productos
        </h1>
        <ol>
            <li>
                producto 1
                <ItemCount stock={3} initial={0} />
            </li>
            <li>
                producto 2
                <ItemCount stock={2} initial={0} />
            </li>
            <li>
                producto 3
                <ItemCount stock={8} initial={0} />
            </li>
            <li>
                producto 4
                <ItemCount stock={10} initial={0} />
            </li>
        </ol>
        
    </div>
  )
}
