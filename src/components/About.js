import React, {Component} from "react"
import Footer from "../components/Footer.js"
import Image from "../components/Image.js"
import imgWei from "../wei.jpg";

function About(){

  return(
  <div className="content-container">
    <h1>Howdy! I'm Wei.</h1>
      <div className="col col-70-percent">
      <p>
      (You can pronounce “Wei” like “way”) <br></br>
      
      I'm a designer coming from a developer background and currently pursuing MS degree of information studies at <b>UT Austin</b>.
      
      I'm passionate about creating empathetic experience connecting <b>people, technologies, and business</b>.
      
      I was born and raised in Taiwan.<br></br>
      
      <br></br>
      
      I'm currently an <b>UI/UX Design Intern</b> at Visual BI Solutions this summer,
      I enjoy create designs for business intelligence tools and Microsoft Power BI Custom Visuals.<br></br>

      <br></br>
      
      Thank you for visiting my portfolio :)
      </p>
    </div>
    <div className="col col-30-percent">
    <img src={require("../wei.jpg")} alt="wei" className="img-wei"/>
    {/* <Image name="wei" path="../wei.jpg" size="img-wei"/> */}
    </div>
  </div>
  )
}
export default About