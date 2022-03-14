import React from 'react'
import ListaCategorias from './ejerciciouno/ListaCategorias'
import Logo from './ejerciciouno/Logo'




export default function NavBar() {
  const categorias = ["Remeras","Pantalones","Zapatillas","Accesorios"]
  return (
    <div className="navbar" >
      <Logo/>
      <ListaCategorias list={categorias}/>
    </div>
  )
}
