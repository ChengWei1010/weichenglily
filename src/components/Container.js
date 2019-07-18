import React from "react"
import { BrowserRouter as Router, Route, NavLink, Switch, withRouter } from "react-router-dom";
import About from "./About.js"
import Work from "./Work.js"

function Container(){

  return(
    <div>
      <Route exact path="/" component={Work}></Route>
      <Route path="/work" component={Work}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/recycle" component={Recycle}></Route>
    </div>
  )
}
export default Container