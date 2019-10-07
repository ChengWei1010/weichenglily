import React from "react"
import Quote from "../../components/Quote.js"
import Divider from "../../components/Divider.js"
import SectionHead from "../../components/SectionHead.js"

import Cover from "./img/recycle/Cover.png"
import Box from "./img/recycle/Box.png"
import Process from "./img/recycle/Process.svg"
import Assumption from "./img/recycle/Assumptions.svg"
import Themes from "./img/recycle/Themes.png"
import ThemeCategories from "./img/recycle/ThemeCategories.svg"
import Insights from "./img/recycle/Insights.png"
import Ideation from "./img/recycle/Ideas.png"
import Prototype1 from "./img/recycle/Prototype1.png"
import Prototype2 from "./img/recycle/Prototype2.png"
import SME from "./img/recycle/SME.png"
import Contextual1 from "./img/recycle/Contextual1.jpg"
import Contextual2 from "./img/recycle/Contextual2.jpg"
import Intercept1 from "./img/recycle/Intercept1.png"
import Intercept2 from "./img/recycle/Intercept2.png"
import Journeymap from "./img/recycle/Journeymap.svg"
import HMW from "./img/recycle/HMW.jpg"
import Truck from "./img/recycle/Truck.png"
import Get from "./img/recycle/IconGet.svg"
import Give from "./img/recycle/IconGive.svg"
import Gain from "./img/recycle/IconGain.svg"

function Recycle(){
const bgcolor="#E3F4D8"

  return(
    <section className="section-work-body">

      <SectionHead
        category="Design Research"
        heading="Recycling Truck"
        intro="Discover and solve problem about recycling unusual waste"
        bgcolor={bgcolor}
      />
      <section className="section-body-middle">
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
          <div className="box-border-left"><h4>my role</h4>UX research, UX design</div>
          <div className="box-border-left"><h4>time</h4>January to May, 2019</div>
        </div>
        <img src={Cover} alt="img-work-large" className="img-work-large"></img>

      </section>
      <Divider/>

      <section className="section-body-middle"><h2>Design Process</h2>
        <img src={Process} className="img-work-large"/>
      </section>
      <Divider/>

      <section className="section-body-middle"><h2>Part 1 - Define Problem Space</h2>
        <article>
        <div className="col col-60-percent">
          <p>Our team started this project with a shared concern about environmental sustainability.
            I mentioned that I have a <u>recycling box</u> including items I know can be recycled, but I didn't know how to deal with them.            
            <br></br><br></br>
            We then started to think, <mark>"Why is recycling unusual waste difficult to people?"</mark><br></br>
          </p>
          </div>
          <div className="col-align-right col-40-percent">
            <img src={Box} className="img-work-large"/>
          </div>
        </article>

        <article>
          <h3>Our Assumptions</h3>
          <p>We then listed our assumptions regarding this question and and will validate them further during our research.</p>
          <img src={Assumption} className="img-work-large"/>
        </article>
        <article>
          <Quote
            h2="Problem Frame:"
            text1="Improving the recycling facilities and people’s awareness of effects about unusual waste."
            bgcolor={bgcolor}
            />
        </article>
      </section>
      <Divider/>

      <section className="section-body-middle"><h2>Part 2 - Research and Insights</h2>
        <article>
          <div className="col col-50-percent">
            <h3>Subject Matter Expert Interview</h3>
            We planned a site visit to the Austin Recycling Recovery Center
            and set up interviews with subject matter experts to learn about <u>the operation of recycling facilities</u>,
            and the <u>education and marketing aspects</u> of recycling in Austin.
          </div>
          <div className="col col-50-percent">
            <img src={SME} className="img-work-large"></img>
          </div>
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
            <p>Gathering thoughts about how to deal with unusual waste through <u>discussion about items</u> in the box we provided.</p>
          </div>
        </article>

        <article>
          <h3>Intercept Interview</h3>
          <div className="col col-50-percent">
            <img src={Intercept1} className="img-work-large"></img>
          </div>
          <div className="col col-50-percent">
            <img src={Intercept2} className="img-work-large"></img>
          </div>
          <p>During our site visit to Austin Recycling center, we did 10 intercept interviews with random people coming to the center.
          We asked questions regarding their <u>reason</u> for recycling, their <u>transportation</u> to the drop off center,
          and their <u>views</u> about recycling in general.</p>
        </article>
      </section>

      <section className="section-width-full">
        <h3>Journey Map</h3>
        <img src={Journeymap} className="img-work-large"></img>
      </section>
      
      <section className="section-width-full">
        <div className="col col-30-percent align-vertical-center">
          <h2>Research Findings</h2>
          <p>After the research, we wrote the quotes from all interviewees on sticky notes and grouped them into similar themes:</p>
          <img src={ThemeCategories} className="img-work-large"></img>
        </div>
        <div className="col col-70-percent col-align-right">
          <img src={Themes} className="img-work-large"></img>
        </div>
      </section>

      <section className="section-width-full">
        <div className="col col-40-percent"><img src={Insights} className="img-work-large"></img></div>
        <div className="col-60-percent col-align-right">
          <h2>Insights</h2>         
          <ol>
          <li>Going to drop off center require transportation and time, so people don't want to commit their efforts.</li>
          <li>When people are confused about recycling, they tend to ignore their problems and don't ask for help.</li>
          <li>Existing damage of the environment can motivate people to form better recycling habits or education themselves.</li>
          <li>People tend to change their recycling habits to match people around them.</li>
          </ol>
        </div>
      </section>

      <section className="section-width-full">
        <div className="col col-40-percent align-vertical-center"><h2>How Might We...</h2>
        "Provide an <u>easier, educational, and joyful social experience</u> for people in neighbors and communities who don’t have a convenient way to visit drop off centers?"</div>
        <div className="col-align-right col-60-percent "><img src={HMW} className="img-work-large"/></div>
      </section>

      <Divider/>
      
      <section className="section-body-middle"><h2>Part 3 - Ideation</h2>
        <p>
          We brainstormed and came up with several digital and physical solutions to 
          fix people's pain points based on the opportunities from journey map and research insights.
        </p>
        <img src={Ideation} className="img-work-large"></img>
      </section>
      <Divider/>

      <section className="section-body-middle"><h2>Part 4 - Prototype Testing</h2>
      <p>We picked the <b>recycling truck</b> for prototype testing.
        The purpose of prototyping is to actually tested with people, to learn from feedbacks and iterate our design.</p>
 
      <article>
        <div className="col col-50-percent">
          <img src={Prototype1} className="img-work-large"></img>
        </div>
        <div className="col col-50-percent">
          <img src={Prototype2} className="img-work-large"></img>
        </div>
      </article>
      <article>
        <p>In version 1, we sent flyers and email announcements 2 days ahead to promote our recycling truck, end up having 5 participants and 5 observers
          In the version 2, we tested another location and improve our advertising methods, having less participants than the first time.<br></br>
            
            We learned that...
          <ul>
            <li>We should estimate the number of participants as well as vehicle capacity.</li>
            <li>We found that outdoor location encourages more passersby to stop by.</li>
            <li>We can provide recycling education information when interacting with participants.</li>
            <li>Type of residents and neighborhood affected the categories of the waste.</li>
            <li>We should send even earlier and multiple channels of marketing methods in neighborhoods.</li>
          </ul>
        </p>
      </article>
      
      </section>
      <Divider/>
      
      <section className="section-body-middle"><h2>Part 5 - Final Design Proposal</h2>
        <p>After all the research and the prototype testing,
          we came up with the design proposal.
          This is a concept that we can suggested to Austin Recycling Recovery Center
          to improve the experience and solve people’s problem and challenge about recycling.</p>
          <img src={Truck} className="img-work-smaller"></img>
        <p>   
          Recycling Truck goes around the city and has a schedule according to people’s working and living habits in every specific area.
          People can get information about the truck through various of communication medium for the schedule
          and book a slot if they have larger items like furniture or electronics like televisions.
          <br></br><br></br>
          The goal of recycling truck is to give a process of “get-give-gain”. Letting users to have a convenient, joyful social experience to recycle their unusual waste.
        </p>
      </section>      

      <section className="section-width-full">
        <div className="align-center">
          <div className="col col-33-percent">
            <img src={Get} className="img-work-smaller"></img>
            <h3>Get</h3>
            Get the <u>schedule of Recycling Truck</u> from website, mobile application, email announcements, or flyers 
            and get started to collect your unusual recycling items at your preferred location.
          </div>
          
          <div className="col col-33-percent">
            <img src={Give} className="img-work-smaller"></img>
            <h3>Give</h3>
            Give your recyclable items to the staffs at the truck or drop of at the collection bin on the truck by yourself
            when the truck arrived at your <u>preferred time and location</u>.
          </div>
          
          <div className="col col-33-percent">
            <img src={Gain} className="img-work-smaller"></img>
            <h3>Gain</h3>
            Gain <u>joyfulness and encouragement</u> by seeing other people recycling together,
            and gain <u>knowledge</u> through the interaction with other users and the staffs at the recycling truck.
          </div>
        </div>
      </section>
      <Divider/>
      
      <section className="section-body-middle section-body-last"><h2>Reflection</h2>
        <p>I really enjoyed doing this project because I really understanding how to conduct a research from a design thinking and human-centered perspective.
          I learned precious experience in every step from problem finding to research, from insights generation to final design.
          In addition, I knew more about recycling and my own living environment, it's very inspiring and I'm glad that we brought environmental awareness to people around us!</p>
      </section>

      {/* <ScrollProgress className="progress-bar"/> */}
  
  </section>
  )
}
export default Recycle