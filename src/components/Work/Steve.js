import React from "react"
import YouTube from 'react-youtube';
import Divider from "../../components/Divider.js"

import Process from "./img/steve/Process.svg"
import Style from "./img/steve/Style.svg"

function Steve(){
  
  return(
    <section className="section-work-body">
      <section className="section-head">
        <h4>UX Research and Design</h4>
        <h1>Steve.ai</h1>
        <p>An application using Artificial Intelligence to assist people who are changing their career to a S.T.E.M job.</p>
        {/* <img src={Cover} alt="img-work-large" className="img-work-large"></img> */}

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