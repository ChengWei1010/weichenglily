import React from "react"
import ProjectBlock from "./ProjectBlock.js"
import {Link} from "react-router-dom"
// import recycle00 from "./Work/recycle00.png"
import qeesi00 from "./Work/qeesi00.png"
import steve00 from "./Work/steve00.png"

function Work(){

  return (
    <section className="section-body-last">
      <div className="intro">Hi, I'm Wei,<br></br>a passionate UX designer based in Austin, TX</div>
    <div className="works-container">
    <Link to="/recycle">
    <div className="project-block work-recycle">
      <ProjectBlock
        year="2019"
        name="Recycling Truck"
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

    {/* <Link to="/qeesi"> */}
    <a target="_blank" href="https://drive.google.com/file/d/1Id-Vw4HyPX87aj-0kCcqqAyWDaPA3zkJ/view">
      <div className="project-block work-qeesi">
        <ProjectBlock
          year="2019"
          name="QEESI"
          category="Usability Research"/>
        <div className="col project-thumbnail"><img src={qeesi00} alt="thumbnail" className="img-thumbnail"></img></div>
      </div>
    </a>
    {/* </Link> */}
    </div>
  </section>      
  )
}
export default Work