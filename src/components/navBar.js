import CartWidget from './CartWidget'
import ListaCategorias from './ejerciciouno/ListaCategorias'
import Logo from './ejerciciouno/Logo'




export default function NavBar({onCategoria}) {
  const categorias = ["Remeras","Pantalones","Zapatillas","Accesorios"]
  const cantProductos= Math.floor((Math.random() * (100 - 1 + 1)) + 1);;
  

  return (
    <div className="navbar" >
      <span onClick={()=>onCategoria("inicio")}>
      <Logo  />
      </span>
      <ListaCategorias list={categorias} onCategoria={onCategoria} />
      <CartWidget cantProd={cantProductos}/>
    </div>
  )
}
