import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/AuctionCard">Subastas</Link></li>
          <li><Link to="/AddAuction">Creacr Subasta</Link></li>
          <li><Link to="/LoginComp">Login</Link></li>
          <li><Link to="/RegisterComp">Register</Link></li>
          <li><Link to="/Perfil">Perfil</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default NavBar
