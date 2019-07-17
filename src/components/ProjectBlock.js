import React from "react"

function ProjectBlock(props){
  const bg = {
    background: props.color
  };

  const img = {
    background: "black"

  };

  return(
    <div className="project-block" style={bg}>
      <div className="col-2 project-info">
        <span>{props.year}<br></br></span>
        <span className="project-title">{props.name}</span><br></br>
        <span>{props.category}</span>
      </div>
      <div className="col-2 project-thumbnail">
        <div alt="wei" className={props.class}/>
        
      </div>
    </div>
	
  )
}
export default ProjectBlock