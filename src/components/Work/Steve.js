import React from "react"
import Divider from "../../components/Divider.js"
import SectionHead from "../../components/SectionHead.js"

import Process from "./img/steve/Process.svg"
import Style from "./img/steve/Style.svg"

function Steve(){
  return(
    <section className="section-work-body">
      <SectionHead
        category="UX Research and Design"
        heading="Steve.ai"
        intro="An application using Artificial Intelligence to assist people who are changing their career."
      />

      <section className="section-body-middle">
        <div className="col col-60-percent">
          <div className="box-border-left">
            <h4>overview</h4>
            More and more people want to switch their job.
            However, the process can be challenging, stressful, and not everyone will end up switching their career successfully.
            <br></br><br></br>
            Steve.ai is an AI technology mobile application that designed to solve several pinpoint throughout this career switch process based on user research.          </div>
        </div>
        
        <div className="col col-40-percent">
          <div className="box-border-left"><h4>collaborators</h4>Esha Kothari, Anmol Khandeparker, Prajwal</div>
          <div className="box-border-left"><h4>role</h4>UX research, UX design</div>
          <div className="box-border-left"><h4>time</h4>January to May, 2019</div>
        </div>
      </section>

      <section className="section-body-middle"><h2>Design Process</h2>
        <img src={Process} className="img-work-large"/>
      </section>
      <Divider/>
      
      <section className="section-body-middle"><h2>Part 1 - Problem Definition</h2>
        
      </section>
      <Divider/>

      <section className="section-body-middle"><h2>Part 2 - Research</h2>
        
      </section>
      <Divider/>

      <section className="section-body-middle"><h2>Part 3 - Design</h2>       
        <img src={Style} className="img-work-large"/>
        <iframe className="figma" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOOsPkArv70EYKaDcqbnf7Bha%2FSteve.ai%3Fnode-id%3D20%253A1555%26viewport%3D841%252C-67%252C0.2655298113822937%26scaling%3Dscale-down" allowfullscreen></iframe>
      </section>
      <Divider/>

      

      <section className="section-body-middle section-body-last">
        <h2>Relfection</h2>
        <p></p>
      </section>
    </section>
    
  )
}
export default Steve