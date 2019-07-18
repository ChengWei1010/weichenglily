import React from "react"

function ProjectBlock(props){
  const bg = {background: props.color}

  return(
    // <div className="project-block" style={bg}>

    //   <div className="col project-info">
    //     <span>{props.year}<br></br></span>
    //     <span className="project-title">{props.name}</span><br></br>
    //     <span>{props.category}</span>
    //   </div>
      
    //   <div className="col project-thumbnail">
    //     <div/>
    //       <img src={props.img} alt="thumbnail" className="img-thumbnail"></img>
    //   </div>
    // </div>
    <div className="col project-info">
      <span>{props.year}<br></br></span>
      <span className="project-name">{props.name}</span><br></br>
      <span className="project-category">{props.category}</span><br></br>
      <span>{props.description}</span>
    </div>
	
  )
}
export default ProjectBlock