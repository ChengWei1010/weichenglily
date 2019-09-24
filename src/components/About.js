import React from "react"
import Emoji from "./Emoji.js"

function About(){

  return(
    <section className="section-body-last">
      
      <div className="col col-60-percent">
      <h1>Hello!</h1>
      <p>
      (You can pronounce “Wei” like “way”)<br></br>
      
      I'm a designer coming from a developer background and currently pursuing MS degree of information studies at <b>UT Austin</b>.
      
      I'm passionate about creating empathetic experience connecting <b>people, technologies, and business</b>.
      
      I was born and raised in Taiwan.<br></br>
      
      <br></br>
      
      I'm currently an <b>UI/UX Design Intern</b> at Visual BI Solutions,
      I enjoy designing for business intelligence tools and Microsoft Power BI Custom Visuals here.<br></br>

      <br></br>
      
      In my spare time I like to
      cook <Emoji symbol="🍳"/>, 
      hiking <Emoji symbol="⛰"/>, 
      and doing yoga <Emoji symbol="🧘🏻‍♀️"/>.
      <br></br>
      
      Thank you for visiting my portfolio :)<br></br>
      </p>
      <a target="_blank" href="https://drive.google.com/file/d/1fqzDpGra-_NwU80lvILuDHrepqdy2j2-/view?usp=sharing">
        <span className="highlight">View Wei's resume</span>
      </a>
    </div>
    <div className="col col-40-percent">
    <img src={require("../wei.jpg")} alt="wei" className="img-wei"/>
    {/* <Image name="wei" path="../wei.jpg" size="img-wei"/> */}
    </div>
  </section>
  )
}
export default About