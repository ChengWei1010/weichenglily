import React from "react"
import Emoji from "./Emoji.js"

function About(){

  return(
    <section className="section-body-last">
      <div className="col col-60-percent">
        <h1>Hello again!</h1>
        <h2>You can pronounce <mark className="mark-color">Wei</mark> like <mark className="mark-color">way</mark>.</h2>
        <article>
        I’m a UX designer passionate about creating empathetic experience connecting people, technologies, and business.
        
        <br></br><br></br>
        
        I came from a developer background and I’m currently pursuing MS degree of information studies focusing on UX Design at UT Austin.

        <br></br><br></br>
        
        In my spare time I like to
        cook <Emoji symbol="🍳"/>, 
        hiking <Emoji symbol="⛰"/>, 
        and doing yoga <Emoji symbol="🧘🏻‍♀️"/>.
        <br></br>
        
        Thank you for visiting my portfolio :)<br></br>
        </article>
        <a target="_blank" href="https://drive.google.com/open?id=14q--1Jai04kww3p0JD_hrt8MoGQ85b0N">
          <span className="highlight">View my resume</span>
        </a>
      </div>

      <div className="col col-img-wei">
        <img src={require("../wei.jpg")} alt="wei" className="img-wei"/>
        {/* <Image name="wei" path="../wei.jpg" size="img-wei"/> */}
      </div>
    </section>
  )
}
export default About