import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartWidget from './CartWidget'
import ListaCategorias from './ejerciciouno/ListaCategorias'
import Logo from './ejerciciouno/Logo'




export default function NavBar() {

  const { productosCart } = useCartContext()
  const categorias = ["Remeras","Pantalones","Zapatillas","Accesorios"]


  

  return (
    <div className="navbar navbar-light sticky-top justify-content-between" >
          <ListaCategorias list={categorias} />
      
          <NavLink to={`/`}>
               <Logo  />
          </NavLink>
     
      <div>
              <button className="navbar-toggler  butonmenu ms-auto me-5 mb-3 p-2 bd-highlight" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span className="navbar-toggler-icon"></span>
                 </button>
                <NavLink to={`/cart`}>
                <CartWidget cantProd={productosCart.length}/>
                </NavLink>
      </div>
      
    </div>
  )
}
