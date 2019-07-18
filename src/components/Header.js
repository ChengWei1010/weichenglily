import React from "react"
import {Link, NavLink} from "react-router-dom"

function Header(){

  return(
    <header>
      <Link to="/work" activeClassName="active">
        <span className="title-main">Wei Cheng</span>
      </Link>
      <NavLink to="/about" className="nav-item" activeClassName="active">about</NavLink>
      <NavLink to="/work" className="nav-item" activeClassName="active">work</NavLink>
    </header>
	
  )
}
export default Header