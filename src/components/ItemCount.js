import React, { useState } from 'react'

export default function ItemCount({stock,initial,onAdd}) {
    const [inicial, setinicial] = useState(initial)
    const [mensaje, setmensaje] = useState("") 
    const restar = (x)=>{
        inicial === 0 && x === -1? setmensaje("El valor no puede ser menor a 0"):setinicial(inicial+x);
        setTimeout(()=>{
            setmensaje("")
        },2000)
    }
    const agregar = (x)=>{
        inicial >= stock? setmensaje("Stock agotado"):setinicial(inicial+x);
        setTimeout(()=>{
            setmensaje("")
        },2000)
    }
    
  return (
    <div>
        <h1>Agregar al carrito</h1>
        <div className='input-botones'>
            <div className='botones'>
                <button onClick={()=>restar(-1)}>-</button>
                <p>{inicial}</p>
                <button onClick={()=>agregar(1)}>+</button>
            </div>
            <p className='mensaje'>{mensaje}</p>
            
        </div>
    </div>
  )
}
