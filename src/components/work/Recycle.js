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
import Process from "./img/recycleProcess.png"
import Assumption from "./img/recycleAssumption.png"
import Themes from "./img/recycleThemes.png"
import Insights from "./img/recycleInsights.png"
import Ideation from "./img/recycleIdeas.png"
import Prototype1 from "./img/recyclePrototype1.png"
import Prototype2 from "./img/recyclePrototype2.png"
import SME from "./img/recycleSME.png"
import Contextual1 from "./img/recycleContextual1.png"
import Contextual2 from "./img/recycleContextual2.png"
import Intercept1 from "./img/recycleIntercept1.png"
import Intercept2 from "./img/recycleIntercept2.png"
import Intercept3 from "./img/recycleIntercept3.png"

function Recycle(){

  return(
    <section className="section-work-body">
      {/* <FontAwesomeIcon
        icon={faArrowLeft}
        className="fa-back"
      />BACK */}

      <section className="section-head">
        <h4>Design Research</h4>
        <h1>The Recycling Truck</h1>
        <p>Using <mark>design thinking</mark> to discover and solve people's problem about <mark>recycling unusual waste.</mark></p>

        <img src={Cover} alt="img-work-large" className="img-work-large"></img>

        <div className="col col-60-percent">
          <div className="box-border-left">
            <h4>overview</h4>
            Recycling Truck is a semester-long group project from ITD 380 Design Thinking Course at UT Austin.
            Recycling Truck tackles the problem regarding recycling, especially unusual recycling items. <br></br><br></br>
            It provides people an <b>easier</b>, <b>educational</b>, and <b>joyful social experience</b> for neighbors and communities who don’t have a convenient way to visit drop off centers to recycle unusual wastes.
          </div>
        </div>
        
        <div className="col col-40-percent">
          <div className="box-border-left"><h4>collaborators</h4>Yuqing Chen, Wei Cheng, Rodrigo Leal</div>
          <div className="box-border-left"><h4>role</h4>UX research, UX design</div>
          <div className="box-border-left"><h4>time</h4>January to May, 2019</div>
        </div>
      </section>
      
      <Divider/>

      <section className="section-body-middle"><h2>Design Process</h2>
        <img src={Process} className="img-work-large"/>
      </section>

      <Divider/>

      <section className="section-body-middle"><h2>1 - Problem Space</h2>         
        <article>
        <div className="col col-50-percent">
          <h3>Our Story</h3>
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
          <Quote h2="Problem Frame:" text="Improving the recycling facilities and people’s awareness of effects about unusual waste."></Quote>
          <div className="box-border-left">Problem framing is a crucial part of the <mark>discovery process</mark> in design thinking.
          We framed a specific problem space that we want to explore further about disposing unusual waste.</div>       
       </article>
      </section>

      <Divider/>

      <section className="section-body-middle"><h2>2 - Research</h2>
        <article>
          <h3>Subject Matter Expert Interview</h3>
          <div className="col col-50-percent">
            <img src={SME} className="img-work-large"></img>
          </div>
          To learn more about the <u>recycling facilities</u>, how do they operate, and their challenges,
          we planned a site visit to the Austin Recycling Recovery Center and set up an interview with Andy Dawson, the Assistant Division Manager.
          <br></br><br></br>
          We also made a phone call interview with Susan Harm,
          the Senior Public Information Specialist to learn more about the <u>education and marketing</u> aspects of recycling in Austin.
        </article>

        <article>
          <h3>Contextual Interview</h3>
          <div className="col col-50-percent">
            <img src={Contextual1} className="img-work-large"></img>
            <h4>activity 1 - Recycling Tour</h4>
            <p>
            We asked our participants to give us a tour at their home/neighborhood,
            we aimed to <u>understand their recycling habits</u> and <u>and problems</u>.</p>
          </div>
          <div className="col col-50-percent">
            <img src={Contextual2} className="img-work-large"></img>
            <h4>activity 2 - Recycling Box</h4>
            <p>Gathering thoughts about how to deal with unusual waste through the discussion about items in the box we provided.</p>
          </div>
        </article>

        <article>
          <h3>Intercept Interview</h3>
          <div className="col-close col-33-percent">
            <img src={Intercept1} className="img-work-large"></img>
          </div>
          <div className="col-close col-33-percent">
            <img src={Intercept2} className="img-work-large"></img>
          </div>
          <div className="col-close col-33-percent">
            <img src={Intercept3} className="img-work-large"></img>
          </div>
          During our site visit to Austin Recycling center, we did 10 intercept interviews with random people coming to the center.
          We asked questions regarding their <u>reason</u> for recycling, their <u>transportation</u> to the drop off center, and their <u>views</u> about recycling in general.
        </article>
      </section>

      <Divider/>

      
      <section className="section-width-full">
      <h2>Research Findings</h2>
      <p>After the research, we wrote the quotes from all interviewees on sticky notes and categorized them by similar themes:</p>

        <div className="col col-40-percent">
          <p>
            <ul>
              <li><u>Concerns</u> (confusions, time, traveling):<br></br>These are the problems or blockers that prevent people from doing recycle or caring about the unusual waste.</li>
              <li><u>Habits</u> (recycling habits, reuse, motivation):<br></br>These describe the habits that people have or the reason why they do recycle.</li>
              <li><u>Impact</u> (social, individual, education):<br></br>These record why people change their habits in either positive or negative ways.</li>
              <li><u>Facilities Improvements</u>:<br></br>Some suggestions or feedbacks about how to improve the recycling facilities.</li>
            </ul>
          </p>

        </div>
        <div className="col col-60-percent">
          <img src={Themes} className="img-work-large"></img>
        </div>
      </section>

      <section className="section-width-full">
        <p>
          <div className="col col-40-percent"><img src={Insights} className="img-work-large"></img></div>
          <div className="col-align-right col-60-percent">
            <h2>Insights</h2>
            Based on the interviews and research findings, we listed the insights and form our how might we statement.
            <ol>
            <li>Going to drop off center require transportation and time, so people don't want to commit their efforts.</li>
            <li>When people are confused about recycling, they tend to ignore their problems and don't ask for help.</li>
            <li>Existing damage of the environment can motivate people to form better recycling habits or education themselves.</li>
            <li>People tend to change their recycling habits to match people around them.</li>
            </ol>
          </div>
        </p>

      </section>

      <section className="section-body-middle">
        <article>
        <Quote
          h2="How might we..."
          text="Provide an easier, educational, and joyful social experience for people in neighbors and communities who don’t have a convenient way to visit drop off centers?">
        </Quote>
        </article>
      </section>

      <section className="section-body-middle">
        <h2>3 - Ideation</h2>
        <p>We brainstormed and came up with several creative digital and physical solutions to fix people's pain points and followed the research insights.</p>
        <img src={Ideation} className="img-work-large"></img>
      </section>
      
      <Divider/>

      <section className="section-body-middle">
        <h2>4 - Prototype</h2>
      <p>We picked the <mark>recycling truck</mark> for prototype testing.
        The purpose of prototyping is to actually tested with people, to learn from feedbacks and iterate our design.</p>
 
      <article>
        <div className="col col-50-percent">
          <img src={Prototype1} className="img-work-large"></img>
        </div>
        <div className="col col-50-percent">
        <p>In version 1, we sent <u>flyers and email announcements</u> 2 days ahead to promote our recycling truck.
            We ended up having <b>5 participants</b> bringing their unusual recycling items.
            Also, there were <b>5 observers</b> stopped by and willing to learn more about what we're doing.<br></br>
            We learned that...
          <ul>
            <li>We should estimate the number of participants to prepare for out vehicle capacity.</li>
            <li>We found that outdoor location encourages more passersby to stop by.</li>
            <li>We can provide recycling education information when interacting with participants.</li>
          </ul>
        </p>
        </div>
      </article>
      
      <article>
        <div className="col col-50-percent">
        <p>In version 2, we sent flyers and posted poster on bulletin boards in the <u>apartment complex</u>.
          However, we ended up having only <b>3 participants</b> and <b>2 observers</b>.<br></br>
          We learned that...
          <ul>
            <li>Type of residents and neighborhood affected the amount of unusual waste items.</li>
            <li>We should send even earlier and multiple channels of marketing methods in neighborhoods.</li>
          </ul>
        </p>
        </div>
        <div className="col col-50-percent">
          <img src={Prototype2} className="img-work-large"></img>
        </div>
      </article>
      </section>

      <Divider/>
      
      {/* <section className="section-full">
        <h2>5 - Proposal</h2>
        <h3></h3>
      </section>

      <Divider/> */}
      
      <section className="section-body-middle">
        <h2>Reflection</h2>
        <p>I really enjoyed doing this project because I really understanding how to conduct a research from a design thinking and human-centered perspective.
          I learned precious experience in every step from problem finding to research, from insights generation to final design.
          In addition, I knew more about recycling and my own living environment, it's very inspiring and I'm glad that we brought environmental awareness to people around us!</p>
      </section>
      {/* <ScrollProgress className="progress-bar"/> */}
  
  </section>
  )
}
export default Recycle