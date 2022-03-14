import React from 'react'

export default function ListaCategorias({list}){
    console.log(list)
  return (
    <div className='lista'>
        {list.map(item => {
            return( 
            
                <a href='.' className='item'>{item}</a>
            
            )
        })}
    </div>
  )
}
