import React from "react"
import {Link, NavLink} from "react-router-dom"

function Header(){

  return(
    <header>
      <Link to="/portfolio" activeClassName="active">
        <div className="title-main">Wei Cheng</div>
        {/* <span className="title-sub"> - UIUX Designer</span> */}
      </Link>
      <NavLink to="/illustrations" className="nav-item" activeClassName="active">illustration</NavLink>
      <NavLink to="/about" className="nav-item" activeClassName="active">about</NavLink>
      <NavLink to="/portfolio" className="nav-item" activeClassName="active">portfolio</NavLink>
    </header>
	
  )
}
export default Header