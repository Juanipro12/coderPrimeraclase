import { createContext, useContext, useState } from "react";


const cartContext = createContext()
export const useCartContext =() => useContext(cartContext)

function CartContextProvider ({children}){
    const [productosCart, setProductosCart] = useState([])
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
         removerProducto
     }
     }>
         {children}
     </cartContext.Provider>
     
 )
}
export default CartContextProvider