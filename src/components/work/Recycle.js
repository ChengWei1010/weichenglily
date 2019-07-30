import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Quote from "../../components/Quote.js"
import Cover from "./img/recycleCover.png"
import Box from "./img/recycleBox.png"
import Process from "./img/recycleProcess.svg"
import Assumption from "./img/recycleAssumption.svg"
import Frame from "./img/recycleFrame.svg"
import Themes from "./img/recycleThemes.png"
import HMW from "./img/recycleHMW.png"
import Insights from "./img/recycleInsights.png"

function Recycle(){

  return(
    <div className="content-container">
      {/* <FontAwesomeIcon
        icon={faArrowLeft}
        className="fa-back"
      />BACK */}

      <section className="section-head">
        <h3>Design Research</h3>
        <h1>The Recycling Truck</h1>
        <p>Using <mark>design thinking</mark> to discover and solve people's problem about <mark>trash and recycling.</mark></p>

        <img src={Cover} alt="img-work-large" className="img-work-large"></img>
        
        <div className="col col-50-percent">
          <h3>overview</h3>
          <p>Recycling Truck is a semester-long group project from ITD 380 Design Thinking Course.</p>
        </div>
        <div className="col col-50-percent">
          <span><p><h3>members</h3>Yuqing Chen, Rodrigo Leal, Wei Cheng</p></span>
          <span><p><h3>time</h3>January to May, 2019</p></span>
        </div>
      </section>
      
      <section><h2>Design Process</h2>
        <img src={Process} className="img-work-large"/>
      </section>

      <section><h2>Problem</h2>         
        <article>
        <div className="col col-50-percent">
          <h3>Story</h3>
          <p>Me and my teammates started this project with a shared concern about environmental sustainability.
          I have a <mark>recycling box</mark> at home including items I know can be recycled but didn't know how to deal with.
          We started to think about how these issues could affect people’s lives.<br></br><br></br>
          Thus, we decide to explore further about people's experience and problems regarding recycling and trash.</p>
          </div>
          <div className="col col-50-percent">
            <img src={Box} className="img-work-small"/>
          </div>
        </article>

        <article>
          <h3>Assumptions</h3>
          <p>We stared to ask ourselves what are the possible cause of this problem,
          listed out some assumptions and and keep them in mind to validate them further in our research process.</p>
          <img src={Assumption} className="img-work-small"/>
        </article>

        <article>
        <h3>Problem Frame</h3>
          <div className="col col-50-percent">
            <p>
            <Quote h2="Problem Frame:" text="Improving the recycling facilities and people’s awareness of effects about unusual waste."></Quote>
            Since design thinking is a <mark>problem finding</mark> more than a problem solving process,
            based on the assumptions, we want to find a specific problem space that we want to explore around the topic about disposing unusual waste.
            </p>
          </div>
          <div className="col col-50-percent">
            <img src={Frame} className="img-work-small"></img>
          </div>           
        </article>
      </section>



      <section><h2>Research</h2>
        <article>
          <h3>Background Research</h3>
        </article>
        <article>
          <h3>Intercept Interview</h3>
        </article>
        <article>
          <h3>Contextual Interview</h3>
        </article>
      </section>


      <section><h2>Ideate</h2>
      <article>
        <h3>Create Themes</h3>
        <img src={Themes} className="img-work-large"></img>
        <p>We wrote the quotes from interviewees on sticky notes, and categorized them by similar categories and topics:
        Regarding the issue about recycling unusual materials, people have these themes about this problem:</p>
      </article>

      <article>
        <h3>Insights</h3>
        <div className="col col-50-percent"><img src={Insights} className="img-work-large"></img></div>
        <div className="col col-50-percent">
          <p>
          We created insights based on research themes and results:
          <ol>
          <li>Going to drop off center is inconvenient because of transportation and time concerns, so people don't want to commit their efforts.</li>
          <li>When people are confused about recycling, they don't tend to look up for information, instead they ignore and hide their problems.</li>
          <li>When people see real situation and damage of the environment, these evidence can motivate people to form better recycling habits.</li>
          <li>People tend to change their recycling habits to match people around them.</li>
          </ol>
          </p>
        </div>
      </article> 
      <article>
        <h3>How Might We</h3>
        </article>

        <h3>Ideation</h3>
      </section>      


      <section><h2>Prototype</h2>
        <h3>version 1</h3>
        <h3>version 2</h3>
      </section>


      <section><h2>Proposal</h2>
        <h3>video</h3>
      </section>

  </div>
  )
}
export default Recycle