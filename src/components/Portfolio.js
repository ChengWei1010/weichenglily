import React from "react"
import Emoji from "./Emoji.js"
import {Link} from "react-router-dom"
import recycle00 from "./Work/recycle00.svg"
import qeesi00 from "./Work/qeesi00.svg"
import steve00 from "./Work/steve00.svg"
import visualbi00 from "./Work/visualbi00.svg"

class Portfolio extends React.Component {
  render () {
  return (
    <section className="section-body-last">
      <div className="homepage-intro">
        Hi, I'm Wei, an <mark className="mark-color">UX designer</mark> based in Austin, TX <Emoji symbol="🤘🏽"/><br></br>
        I am an experience explorer at the intersection of
        <br></br>technology, business, and people.
      </div>
    <div className="works-container">
    
    <Link to="/recycle"><img src={recycle00} alt="thumbnail" className="project-block"></img></Link>
    <a target="_blank" href="https://drive.google.com/file/d/1Id-Vw4HyPX87aj-0kCcqqAyWDaPA3zkJ/view"><img src={qeesi00} alt="thumbnail" className="project-block"></img></a>
    <Link to="/Steve"><img src={steve00} alt="thumbnail" className="project-block"></img></Link>
    <Link to="/Visualbi"><img src={visualbi00} alt="thumbnail" className="project-block"></img></Link>
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