import React from "react"
import Emoji from "./Emoji.js"
import {Link} from "react-router-dom"
import RecycleProject from "./Work/img/RecycleProject.svg"
import QeesiProject from "./Work/img/QeesiProject.svg"
import SteveProject from "./Work/img/SteveProject.svg"
import VisualbiProject from "./Work/img/VisualbiProject.svg"

class Portfolio extends React.Component {
  render () {
  return (
    <section className="section-body-last">
      <div className="intro-home-about">
        Hi, I'm Wei,<br></br>an <mark className="mark-color">UX designer</mark> based in Austin, TX <Emoji symbol="🤘🏽"/><br></br>
        I am an experience explorer at the intersection of
        <br></br>technology, business, and people.
      </div>
    <div className="works-container">
    
    <Link to="/recycle"><img src={RecycleProject} alt="thumbnail" className="project-block"></img></Link>
    <Link to="/Steve"><img src={SteveProject} alt="thumbnail" className="project-block"></img></Link>
    <a target="_blank" href="https://drive.google.com/open?id=14q--1Jai04kww3p0JD_hrt8MoGQ85b0N"><img src={QeesiProject} alt="thumbnail" className="project-block"></img></a>
    <Link to="/Visualbi"><img src={VisualbiProject} alt="thumbnail" className="project-block"></img></Link>
    {/* <a target="_blank" href="https://drive.google.com/file/d/1Id-Vw4HyPX87aj-0kCcqqAyWDaPA3zkJ/view">
      <div className="project-block work-qeesi">
        <ProjectBlock
          year="2019"
          name="QEESI"
          category="Usability Research"/>
        <div className="col project-thumbnail"><img src={qeesi00} alt="thumbnail" className="img-thumbnail"></img></div>
      </div>
    </a> */}
    </div>
  </section>  
  )
  }
}
export default Portfolio