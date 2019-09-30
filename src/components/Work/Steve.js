import React from "react"
import Cover from "./img/recycleCover.png"

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
            However, the process can be challenging, stressful, and not everyone will get their career switch successfully.
            Steve ai aims to solve this problem using AI technology in mobile application.
          </div>
        </div>
        
        <div className="col col-40-percent">
          <div className="box-border-left"><h4>collaborators</h4>Esha Kothari, Anmol Khandeparker, Prajwal</div>
          <div className="box-border-left"><h4>role</h4>UX research, UX design</div>
          <div className="box-border-left"><h4>time</h4>January to May, 2019</div>
        </div>
      </section>  

      <section className="section-body-middle section-body-last">
        <h2>Coming soon...</h2>
        <p></p>
      </section>
    </section>
  )
}
export default Steve