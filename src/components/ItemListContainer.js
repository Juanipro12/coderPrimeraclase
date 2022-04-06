import React, { useContext, useEffect, useState } from 'react'
import { CargarProductos } from './ejerciciocuatro/getFetch'
import Item from './ejerciciocuatro/Item'
import ItemCount from './ItemCount'
import logo from './ejerciciocuatro/Load_Icon.gif'
import { Link, useParams } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'


export default function ItemListContainer({onGuardarProducto}) {
  const {categoria} = useParams()
  const {agregarProducto} = useCartContext()
    
    const add = (id,cantidadProductos)=>{
        cantidadProductos === 0
        ?console.log("No se agrego ningun producto")
        :agregarProducto(id,cantidadProductos)
    }
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
        CargarProductos
        .then(
          resp => {
          setProductos(resp)
        })
        .catch(err => console.log(err))
        .finally(setCargando(false))},2000)
       
        
      }, []);
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
