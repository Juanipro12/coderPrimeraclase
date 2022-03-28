import React, { useEffect, useState } from 'react'
import { CargarProductos } from './ejerciciocuatro/getFetch'
import Item from './ejerciciocuatro/Item'
import ItemCount from './ItemCount'
import logo from './ejerciciocuatro/Load_Icon.gif'


export default function ItemListContainer({categoria, onGuardarProducto}) {
    const add = (cantidadProductos)=>{
        cantidadProductos === 0
        ?console.log("No se agrego ningun producto")
        :console.log("Cantidad de productos agregados al carrito: "+cantidadProductos)
    }
    const [productos, setProductos] = useState([])
    const [auxProductos, setAuxProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
        CargarProductos
        .then(
          resp => {
          setProductos(resp)
          setAuxProductos(resp)
        })
        .catch(err => console.log(err))
        .finally(setCargando(false))},2000)
      }, []);
      useEffect(() => {
        if(categoria === "inicio") { 
          setAuxProductos(productos)
        }
        else{
        const nuevoProductos = productos.filter(prod => { return (prod.categoria === categoria) })
         setAuxProductos(nuevoProductos)
        }
      }, [categoria])
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
                
                
                    {auxProductos.map(prod => (<div className='card'>
                        <Item key={`${prod.id}${prod.precio}`} Nombre={prod.nombre} Precio={prod.precio} Img={prod.img} />
                        <ItemCount key={prod.id} stock={prod.stock} initial={0} onAdd={add} />
                        <button onClick={()=> onGuardarProducto(prod)}>Ver</button>
                    </div>))}
        
        
    </div>
    </div>
    }
    </div>
    
  )
}
