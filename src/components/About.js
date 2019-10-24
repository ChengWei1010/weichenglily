import React from "react"
import Emoji from "./Emoji.js"

function About(){

  return(
    <section className="section-work-body">
      <section className="section-body-last">
      <div className="intro-home-about">
        Hello again!<br></br>
        You can pronounce <mark className="mark-color">Wei</mark> like <mark className="mark-color">way</mark>.</div>
      <div className="col col-60-percent">
        <p>
        
        I’m a UX designer passionate about creating empathetic experience connecting <b>people, technologies, and business</b>.

        I came from a developer background and I’m currently pursuing MS degree of information studies focusing on UX Design at <b>UT Austin</b>.
                
        I was born and raised in Taiwan.<br></br>
        
        {/* <br></br>
        
        I'm currently an <b>UI/UX Design Intern</b> at Visual BI Solutions,
        I enjoy designing for business intelligence tools and Microsoft Power BI Visualizations.<br></br> */}

        <br></br>
        
        In my spare time I like to
        cook <Emoji symbol="🍳"/>, 
        hiking <Emoji symbol="⛰"/>, 
        and doing yoga <Emoji symbol="🧘🏻‍♀️"/>.
        <br></br>
        
        Thank you for visiting my portfolio :)<br></br>
        </p>
        <a target="_blank" href="https://drive.google.com/open?id=14q--1Jai04kww3p0JD_hrt8MoGQ85b0N">
          <span className="highlight">View Wei's resume</span>
        </a>
      </div>

      <div className="col col-40-percent">
        <img src={require("../wei.jpg")} alt="wei" className="img-wei"/>
        {/* <Image name="wei" path="../wei.jpg" size="img-wei"/> */}
      </div>
    </section>
  </section>
  )
}
export default About