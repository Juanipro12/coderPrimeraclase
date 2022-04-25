import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ListaCategorias({list}){
    
  return (
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
      <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        {list.map(item => {
            return(<NavLink key={item} to={`category/${item}`} className='nav-link active nav-item ' id="offcanvasNavbarLabel">{item}</NavLink> )    
        })}
        </ul>
         </div>
        </div>
    </div>
  )
}
