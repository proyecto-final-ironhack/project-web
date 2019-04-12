import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (


  <nav className="navBar">
  <Link className="button" to="/menu">Click to play more games!</Link>
  </nav>
 
  )
}

export default NavBar;