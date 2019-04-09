import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5" style={{ borderRadius: "5px"}}>
    //   <Link className="navbar-brand" to="/">Image Recognition</Link>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item">
    //         <NavLink className="nav-link" activeClassName="active" to="/users">Users</NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" activeClassName="active" to="/images">Camera</NavLink>
    //       </li>
    //     </ul>
    //     <ul className="navbar-nav my-2 my-lg-0">
    //       <li className="nav-item">
    //         <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="navbar-brand" to="/menu">Play more games</Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/users">Users <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/images">Camera</Link>
      </li>
    </ul>
         <ul className="navbar-nav my-2 my-lg-0">
           <li className="nav-item">
             <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
          </li>
        </ul>
  </div>
</nav>
  
  )
}

export default NavBar;