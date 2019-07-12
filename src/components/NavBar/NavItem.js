import React from "react"

function NavItem(props){
    console.log(props.url);
  return(
    <a href="{props.url}" target="{props.target}" className="nav-item">{props.title}</a>
  )
}
export default NavItem