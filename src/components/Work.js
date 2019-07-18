import React from "react"
import ProjectBlock from "./ProjectBlock.js"
import {Link} from "react-router-dom"
// import recycle00 from "./Work/recycle00.png"
import qeesi00 from "./Work/qeesi00.png"
import steve00 from "./Work/steve00.png"

function Work(){

  return (
    <div className="content-container">

    <Link to="/recycle">
    <div className="project-block work-recycle">
      <ProjectBlock
        year="2019"
        name="Recycling Truck"
        category="Design Research"
        description="Design thinking research about trash and recycling."/>
      {/* <div className="col project-thumbnail"><img src={recycle00} alt="thumbnail" className="img-thumbnail"></img></div> */}
    </div>
    </Link>

    <Link to="/Steve">
    <div className="project-block work-steve">
      <ProjectBlock
        year="2019"
        name="Steve.ai"
        category="UX Research and Design"
        description="Artificial Intelligence experience design about career change."/>
      <div className="col project-thumbnail"><img src={steve00} alt="thumbnail" className="img-thumbnail"></img></div>
    </div>
    </Link>

    <Link to="/qeesi">
    <div className="project-block work-qeesi">
      <ProjectBlock
        year="2019"
        name="QEESI"
        category="UX Research"
        description="Usability research for UT Health San Antonio online questionaire."/>
      <div className="col project-thumbnail"><img src={qeesi00} alt="thumbnail" className="img-thumbnail"></img></div>
    </div>
    </Link>

  </div>      
  )
}
export default Work