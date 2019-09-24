import React from "react"
import {Link, NavLink} from "react-router-dom"

function Header(){

  return(
    <header>
      <Link to="/work" activeClassName="active">
        <div className="title-main">Wei Cheng</div>
        {/* <span className="title-sub"> - UIUX Designer</span> */}
      </Link>
      <NavLink to="/illustrations" className="nav-item" activeClassName="active">illustrations</NavLink>
      <NavLink to="/about" className="nav-item" activeClassName="active">about</NavLink>
      <NavLink to="/work" className="nav-item" activeClassName="active">work</NavLink>
    </header>
	
  )
}
export default Header