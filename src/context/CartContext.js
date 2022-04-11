import { createContext, useContext, useEffect, useState } from "react";


const cartContext = createContext()
export const useCartContext =() => useContext(cartContext)

function CartContextProvider ({children}){
    const [productosCart, setProductosCart] = useState([])
    const [total, settotal] = useState()
    useEffect( () =>{
        let x=0
        
        for (const i of productosCart) {
            x=x+i.item.precio*Number(i.cantidad)
            
        }
        settotal(x)
    },[productosCart])
    const vaciar = () =>{
        setProductosCart([])
        
    }
    const add = (id,cantidadProductos)=>{
        cantidadProductos === 0
        ?console.log("No se agrego ningun producto")
        :agregarProducto(id,cantidadProductos)
        
    }
    const removerProducto = (id) =>{
        setProductosCart(productosCart.filter(x=>x.item.id !== id))
       
        
    }
    const agregarProducto = (item,cantidad)=>{
        
        if(( productosCart.find( x => x.item.id === item.id)) === undefined){
            setProductosCart([...productosCart,
                {item,cantidad}
            ]
                )
        }else{
            let prodAux = productosCart.find( x => x.item.id === item.id)
            prodAux.cantidad=prodAux.cantidad+cantidad 
            let aux = productosCart.filter(x => x.item.id !== item.id)
            aux.push(prodAux)
            setProductosCart(aux)
        }
        
    }
 return( 
     <cartContext.Provider value={{
        agregarProducto,
         productosCart,
         removerProducto,
         add,
         total,
         vaciar
     }
     }>
         {children}
     </cartContext.Provider>
     
 )
}
export default CartContextProvider