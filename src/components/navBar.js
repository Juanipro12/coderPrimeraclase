import React from 'react'
import CartWidget from './CartWidget'
import ListaCategorias from './ejerciciouno/ListaCategorias'
import Logo from './ejerciciouno/Logo'




export default function NavBar() {
  const categorias = ["Remeras","Pantalones","Zapatillas","Accesorios"]
  const cantProductos= Math.floor((Math.random() * (100 - 1 + 1)) + 1);;
  return (
    <div className="navbar" >
      <Logo/>
      <ListaCategorias list={categorias}/>
      <CartWidget cantProd={cantProductos}/>
    </div>
  )
}
