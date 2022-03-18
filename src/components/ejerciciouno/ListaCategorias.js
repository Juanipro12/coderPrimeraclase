import React from 'react'

export default function ListaCategorias({list,onCategoria}){
    console.log(list)
  return (
    <div className='lista'>
        {list.map(item => {
            return( 
            
                <span key={item} href='.' className='item' onClick={()=>onCategoria(item)}>{item}</span>
            
            )
        })}
    </div>
  )
}
