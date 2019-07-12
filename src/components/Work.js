import React, {Component} from "react"
import ProjectBlock from "./ProjectBlock.js"

function Work(){

  return(
  <div className="content-container">
    {/* <h1>My amazing design works.</h1> */}
    <h1>My new portfolio website is coming soon!</h1>
    
    <ProjectBlock name="QEESI" category="UX Research" year="2019"></ProjectBlock>
    <ProjectBlock name="Steve.ai" category="UX Research and Design" year="2019"></ProjectBlock>
    <ProjectBlock name="The Recycling Truck" category="Design Research" year="2019"></ProjectBlock>
  </div>
  )
}
export default Work