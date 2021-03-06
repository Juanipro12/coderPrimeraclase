import React, { useState } from 'react'

export default function ItemCount({item,stock,initial,onAdd}) {
    const [inicial, setinicial] = useState(initial)
    const [mensaje, setmensaje] = useState("") 
    const restar = (x)=>{
        inicial === 0 && x === -1? setmensaje("Error!"):setinicial(inicial+x);
        setTimeout(()=>{
            setmensaje("")
        },3000)
    }
    const agregar = (x)=>{
        inicial >= stock? setmensaje("Stock agotado"):setinicial(inicial+x);
        setTimeout(()=>{
            setmensaje("")
        },3000)
    }
    
  return (
    <div>
        
        <div className='input-botones'>
            <div className='botones'>
                <button onClick={()=>restar(-1)}>-</button>
                <p>{inicial}</p>
                <button onClick={()=>agregar(1)}>+</button>
            </div>
            <button onClick={()=>{
                onAdd(item,inicial);
                setinicial(0)
                }} >Agregar al carrito</button>
            <p className='mensaje'>{mensaje}</p>
            
        </div>
    </div>
  )
}
