import React, {Component} from "react"
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom"


function Header(){

  return(

    <header>
        <div>
            <span className="title-main">WEI CHENG</span>
            <span className="title-sub">- UIUX designer</span>
        </div>
    </header>
	
  )
}
export default Header