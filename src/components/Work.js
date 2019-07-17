import React from "react"
import ProjectBlock from "./ProjectBlock.js"
import {Link} from "react-router-dom"

function Work(){
  const recycle = "rgb(209, 255, 174)"

  return (
    <div className="content-container">
    <p>Currently under construction...Coming soon!</p>
    
      <Link to="/recycle">
        <ProjectBlock name="The Recycling Truck" category="Design Research" year="2019" color={recycle} class="test"/>
      </Link>
      <ProjectBlock name="QEESI" category="UX Research" year="2019" color="#F4F4F4"/>
      <ProjectBlock name="Steve.ai" category="UX Research and Design" year="2019" color="#A9DCDE"/>
  </div>      
  )
}
export default Work