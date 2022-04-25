import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function PedidoExito() {
    const navigation= useNavigate()
    useEffect(() => {
      setTimeout(()=>{
            
            navigation("/")
      },3000)
    
    }, [])
    
  return <p className='text-center'>Tu pedido fue realizado con exito!</p>
}
