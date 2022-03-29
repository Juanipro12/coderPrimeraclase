import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ListaCategorias({list}){
    console.log(list)
  return (
    <div className='lista'>
        {list.map(item => {
            return( 
            
                <NavLink key={item} to={`category/${item}`} className='item'>{item}</NavLink>
            
            )
        })}
    </div>
  )
}
