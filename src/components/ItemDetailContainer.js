import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import logo from './ejerciciocuatro/Load_Icon.gif'

export default function ItemDetailContainer({producto}) {
    const [productoaver, setProductoaver] = useState("")
    const getItem = new Promise((resolve,reject)=>{
        if(true){
           
                resolve(producto)
            
        }else{
            reject('400 not found')
        }})    
    useEffect(()=>{
      setTimeout(async()=>{
         const data = await getItem
         console.log(data)
         setProductoaver(data)

        },2000)
    } ,[producto])
    
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
