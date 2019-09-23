import React from "react"
import ProjectBlock from "./ProjectBlock.js"
import {Link} from "react-router-dom"
// import recycle00 from "./Work/recycle00.png"
import qeesi00 from "./Work/qeesi00.png"
import steve00 from "./Work/steve00.png"

function Work(){

  return (
    <section className="section-body-middle">
      {/* <div className="intro">
      I'm a <b>UI/UX Designer</b> who cares about using design to improve people's <b>experience.</b><br></br><br></br>
      Currently exploring business intelligence and dashboard designs at <b>VisualBI Solutions</b> in Plano, TX as an intern.
      </div> */}
    <div className="works-container">
    <Link to="/recycle">
    <div className="project-block work-recycle">
      <ProjectBlock
        year="2019"
        name="The Recycling Truck"
        category="Design Research"/>
      {/* <div className="col project-thumbnail"><img src={recycle00} alt="thumbnail" className="img-thumbnail"></img></div> */}
    </div>
    </Link>

    <Link to="/Steve">
    <div className="project-block work-steve">
      <ProjectBlock
        year="2019"
        name="Steve.ai"
        category="UX Research and Design"/>
      <div className="col project-thumbnail"><img src={steve00} alt="thumbnail" className="img-thumbnail"></img></div>
    </div>
    </Link>

    <Link to="/qeesi">
    <div className="project-block work-qeesi">
      <ProjectBlock
        year="2019"
        name="QEESI"
        category="Usability Research"/>
      <div className="col project-thumbnail"><img src={qeesi00} alt="thumbnail" className="img-thumbnail"></img></div>
    </div>
    </Link>
    </div>
  </section>      
  )
}
export default Work