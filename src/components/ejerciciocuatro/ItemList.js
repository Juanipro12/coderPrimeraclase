import React from 'react'
import Item from './Item'

export default function ItemList({Items}) {
  return (
    <div className='ItemList'>
        {Items.map(it=>{
            return <Item Nombre={it.Nombre} Precio={it.Precio} Img={it.Img} />
        })}
    </div>
  )
}
