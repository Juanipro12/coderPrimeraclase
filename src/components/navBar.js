import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartWidget from './CartWidget'
import ListaCategorias from './ejerciciouno/ListaCategorias'
import Logo from './ejerciciouno/Logo'




export default function NavBar() {

  const { productosCart } = useCartContext()
  const categorias = ["Remeras","Pantalones","Zapatillas","Accesorios"]


  

  return (
    <div className="navbar" >
      <NavLink to={`/`}>
      <Logo  />
      </NavLink>
      <ListaCategorias list={categorias} />
      <NavLink to={`/cart`}>
      <CartWidget cantProd={productosCart.length}/>
      </NavLink>
      
    </div>
  )
}
