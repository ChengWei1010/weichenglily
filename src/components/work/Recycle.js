import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Quote from "../../components/Quote.js"
import Divider from "../../components/Divider.js"
// import ScrollProgress from "../../components/ScrollProgress.js"
import Cover from "./img/recycleCover.png"
import Box from "./img/recycleBox.png"
import Process from "./img/recycleProcess.svg"
import Assumption from "./img/recycleAssumption.png"
import Frame from "./img/recycleFrame.png"
import Themes from "./img/recycleThemes.png"
import Insights from "./img/recycleInsights.png"
import Ideation from "./img/recycleIdeas.png"
import Prototype1 from "./img/recyclePrototype1.png"
import Prototype2 from "./img/recyclePrototype2.png"

function Recycle(){

  return(
    <div>
      {/* <FontAwesomeIcon
        icon={faArrowLeft}
        className="fa-back"
      />BACK */}

      <section className="section-head">
        <h3>Design Research</h3>
        <h1>The Recycling Truck</h1>
        <p>Using <mark>design thinking</mark> to discover and solve people's problem about <mark>recycling unusual waste.</mark></p>

        <img src={Cover} alt="img-work-large" className="img-work-large"></img>
        
        <div className="col col-60-percent">
          <div className="box-border-left">
            <h3>overview</h3>
            Recycling Truck is a semester-long group project from ITD 380 Design Thinking Course.
          </div>
        </div>
        
        <div className="col col-40-percent">
          <div className="box-border-left">
            <h3>collaborators</h3>Yuqing Chen, Rodrigo Leal, Wei Cheng
          </div>

          <div className="box-border-left">
            <h3>time</h3>January to May, 2019
          </div>
        </div>
      </section>
      
      <section><h2>Design Process</h2>
        <img src={Process} className="img-work-large"/>
      </section>

      <Divider/>

      <section><h2>Problem</h2>         
        <article>
        <div className="col col-50-percent">
          <h3>Story</h3>
          <p>Me and my teammates started this project with a shared concern about environmental sustainability.
          I have a <mark>recycling box</mark> at home including items I know can be recycled but didn't know how to deal with.
          <br></br><br></br>
          Therefore, we decide to explore further about people's experience and problems regarding recycling and trash.
          </p>
          </div>
          <div className="col col-50-percent">
            <img src={Box} className="img-work-small"/>
          </div>
        </article>

        <article>
          <h3>Assumptions</h3>
          <p>Before we stared, we ask ourselves what can be the possible cause of this problem.
            We noted down our assumptions and and keep them in mind to validate them further in our research process.</p>
          <img src={Assumption} className="img-work-small"/>
        </article>

        <article>
        <h3>Problem Frame</h3>
          <p>
          Problem framing is a crucial part of the <mark>discovery process</mark> in design thinking.
          We framed a specific problem space that we want to explore further about disposing unusual waste.
          </p>
          <Quote h2="Problem Frame:" text="Improving the recycling facilities and people’s awareness of effects about unusual waste."></Quote>
       </article>
      </section>

      <Divider/>

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

      <Divider/>

      <section><h2>Ideate</h2>
      <article>
        <h3>Create Themes</h3>
        <p>We wrote the quotes from interviewees on sticky notes, and categorized them by similar categories and topics:</p>
        <img src={Themes} className="img-work-large"></img>
      </article>

      <article>
        <h3>Insights</h3>
        <p>
        Based on the interviews and themes, we listed the insights and form our how might we statement:
        <div className="col col-60-percent"><img src={Insights} className="img-work-large"></img></div>
        <div className="col col-40-percent">
          <ol>
          <li>Going to drop off center require transportation and time, so people don't want to commit their efforts.</li>
          <li>When people are confused about recycling, they ignore their problems and don't ask for help.</li>
          <li>Existing damage of the environment motivate people to form better recycling habits.</li>
          <li>People tend to change their recycling habits to match people around them.</li>
          </ol>
          </div>
        </p>
      <div className="col"> 
        <Quote
          h2="How might we..."
          text="Provide a easier, educational, and joyful social experience for people in neighbors and communities who don’t have a convenient way to visit drop off centers?">
        </Quote>
      </div>
      </article>
      
      <article>
        <h3>Ideation</h3>
        <p>We brainstormed and came up with several creative digital and physical solutions to fix people's pain points and followed the research insights.</p>
        <img src={Ideation} className="img-work-large"></img>
      </article>
      </section>    

      <Divider/>

      <section><h2>Prototype</h2>
      <article>
        <div className="col col-50-percent">
          <img src={Prototype1} className="img-work-large"></img>
        </div>
        <div className="col col-50-percent">
        In version 1, we sent <mark>flyers and email announcements</mark> 2 days ahead to promote our recycling truck.
        We ended up having <b>5 participants</b> bringing their unusual recycling items.
        Also, there were <b>5 observers</b> stopped by and willing to learn more about what we're doing.<br></br>
        
        We learned that...
        <ul>
          <li>We should estimate the number of participants to prepare for out vehicle capacity.</li>
          <li>We found that outdoor location encourages more passersby to stop by.</li>
          <li>We can provide recycling education information when interacting with participants.</li>
        </ul>
        </div>
      </article>
      
      <article>
        <div className="col col-50-percent">
        In version 2, we sent flyers and posted poster on bulletin boards in the apartment complex.
        However, we ended up having only <mark>3 participants</mark> and <mark>2 observers</mark>.<br></br>
        We learned that...
        <ul>
          <li>Type of residents and neighborhood affected the amoutn of unusual waste items.</li>
          <li>We should send even earlier and multiple channels of marketing methods in neighborhoods.</li>
        </ul>
        </div>
        <div className="col col-50-percent">
          <img src={Prototype2} className="img-work-large"></img>
        </div>
      </article>
      </section>

      <Divider/>
      
      <section><h2>Proposal</h2>
        <h3>video</h3>
      </section>

      <section className="section-full"><h2>Reflection</h2>
        <p></p>
      </section>
      {/* <ScrollProgress className="progress-bar"/> */}
  </div>
  )
}
export default Recycle