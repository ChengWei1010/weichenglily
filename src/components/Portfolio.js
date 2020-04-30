import React from "react"
import Emoji from "./Emoji.js"
import {Link} from "react-router-dom"
import RecycleProject from "./Work/img/RecycleProject.svg"
import QeesiProject from "./Work/img/QeesiProject.svg"
import SteveProject from "./Work/img/SteveProject.svg"
import VisualbiProject from "./Work/img/VisualbiProject.svg"
import HCXProject from "./Work/img/HCXProject.svg"
import KrtcoProject from "./Work/img/KrtcoProject.svg"

class Portfolio extends React.Component {
  render () {
  return (
    <section className="section-body-last">
      <div className="intro-home-about">
        <div className="title-main">Hi, I'm Wei.</div>
        
        <div className="title-sub">
        I am a passionate <mark className="mark-color">UX designer</mark><Emoji symbol="🤘🏽"/><br></br>
        also an experience explorer at the intersection of
        <br></br>technology, business, and people.
        </div>
      </div>
    <div className="works-container">
    
    {/* <Link to="/capstone" className="project-block"><img src={RecycleProject} alt="thumbnail" className="project-img"></img>
      <div class="text-overlay">capstone</div>
    </Link> */}

    <Link to="/recycle" className="project-block"><img src={RecycleProject} alt="thumbnail" className="project-img"></img>
      <div class="text-overlay">Recycling Truck - a Design Thinking Research</div>
    </Link>
    
    <a target="_blank" href="https://medium.com/@weichenglily/steve-ai-a043a946ecb3" className="project-block">
        <img src={SteveProject} alt="thumbnail" className="project-img"></img>
        <div class="text-overlay">Steve.ai - UX Design for artificial intelligence</div>
    </a>

    <a target="_blank" href="https://drive.google.com/open?id=1mEz3DGyBeNI4BeAymCrCP6CuYsAlpkYr" className="project-block"><img src={QeesiProject} alt="thumbnail" className="project-img"></img>
      <div class="text-overlay">Usability Research for UT San Antonio Health</div>
    </a>

    <Link to="/Visualbi" className="project-block"><img src={VisualbiProject} alt="thumbnail" className="project-img"></img>
      <div class="text-overlay">UI/UX Internship about BI and data visulization</div>
    </Link>

    <a target="_blank" href="http://ericnordquist.wpengine.com/" className="project-block"><img src={HCXProject} alt="thumbnail" className="project-img"></img>
      <div class="text-overlay">Portfolio webside design and develop</div>
      </a>
    
    <a target="_blank" href="http://bm.nsysu.edu.tw/krtc-competition2016/home.php" className="project-block"><img src={KrtcoProject} alt="thumbnail" className="project-img"></img>
      <div class="text-overlay">Web design and develop</div>
    </a>

    </div>
  </section>  
  )
  }
}
export default Portfolio