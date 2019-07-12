import React, {Component} from "react"
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom"


function ProjectBlock(props){

  return(
    <div className="project-block">
      <div className="project-info">
        {props.year}<br></br>
        <div className="project-title">{props.name}</div>
        {props.category}
      </div>
      {/* <div className="col-2 project-thumbnail">
        (image)
      </div> */}
    </div>
	
  )
}
export default ProjectBlock