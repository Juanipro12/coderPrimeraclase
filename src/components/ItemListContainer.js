import React, { useEffect, useState } from 'react'

import Item from './ejerciciocuatro/Item'
import ItemCount from './ItemCount'
import logo from './ejerciciocuatro/Load_Icon.gif'
import { Link, useParams } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


export default function ItemListContainer({onGuardarProducto}) {
  const {categoria} = useParams()
  const {add} = useCartContext()
    
    
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        setTimeout(async()=>{
          const firestore = getFirestore()
          const query = collection(firestore,'Productos')
          const prod = await getDocs(query).then(resp => resp.docs.map(res=>({id:res.id,...res.data()})))
          console.log(prod)
          setProductos(prod)
          setCargando(false)
        },2000)
       
        
      }, [productos]);
      const cargar = (resultado) =>{
       return resultado.map(prod => (
          <div className='card'>
                <Item key={`${prod.id}${prod.precio}`} Nombre={prod.nombre} Precio={prod.precio} Img={prod.img} />
                <ItemCount key={prod.id} item={prod} stock={prod.stock} initial={0} onAdd={add} />
                <Link to={`/item/${prod.id}`}>Ver</Link>
          </div>
               )
      )
      }
  return (
      <div>
          {cargando ? 
          <img src={logo} alt={"cargando"} />
          :
          <div>
                <h1 className='TituloProductos'>
                    Lista de productos
                </h1>
            <div className='itemListCont'>
                
                
                    {
                      categoria === undefined?  cargar(productos):
                    cargar(productos.filter(prod => { return (prod.categoria === categoria) }))
                    }
                    
    </div>
    </div>
    }
    </div>
    
  )
}