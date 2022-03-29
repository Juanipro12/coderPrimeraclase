import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import logo from './ejerciciocuatro/Load_Icon.gif'
import { getItem } from './ejerciciocuatro/getFetch'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {
    const { id } = useParams()
    const [productoaver, setProductoaver] = useState("")
    useEffect(()=>{
      setTimeout(async()=>{
         const data = await getItem(Number(id))
         console.log(data)
         setProductoaver(data)

        },2000)
    } ,[id])
    
  return (
     <div>
         {productoaver === ""?
         <img src={logo} alt={"cargando"} />
         :
        <ItemDetail item={productoaver}/>
    } 
     </div>
  )
}
