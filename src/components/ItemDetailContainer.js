import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import logo from './ejerciciocuatro/Load_Icon.gif'

import { useParams } from 'react-router-dom'
import { collection, getFirestore, where, query, getDocs } from 'firebase/firestore'

export default function ItemDetailContainer() {
    const { id } = useParams()
    const [productoaver, setProductoaver] = useState("")
    useEffect(()=>{
      setTimeout(async()=>{
        const firestore = getFirestore()
          const qu = collection(firestore,'Productos')
          const q = query(qu, where("id", "==", id));
          const prod = await getDocs(q).then(resp => resp.docs.map(res=>(res.data())))
          setProductoaver(prod[0])
          

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
