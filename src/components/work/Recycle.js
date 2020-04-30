import React from "react"
import SectionHead from "../../components/SectionHead.js"
import Quote from "../../components/Quote.js"
import Divider from "../../components/Divider.js"
import BackHome from "../../components/BackHome.js"

import Cover from "./img/recycle/Cover.png"
import Box from "./img/recycle/Box.png"
import Process from "./img/recycle/Process.svg"
import Themes from "./img/recycle/Themes.png"
import ThemeCategories from "./img/recycle/ThemeCategories.svg"
import Ideation from "./img/recycle/Ideation.png"
import PrototypeTruck from "./img/recycle/PrototypeTruck.png"
import Research from "./img/recycle/Research.png"
import Insight1 from "./img/recycle/Insights1.jpg"
import Insight2 from "./img/recycle/Insights2.jpg"
import Insight3 from "./img/recycle/Insights3.jpg"
import Journeymap from "./img/recycle/Journeymap.svg"
import Solution from "./img/recycle/Solution.png"
import Get from "./img/recycle/IconGet.svg"
import Give from "./img/recycle/IconGive.svg"
import Gain from "./img/recycle/IconGain.svg"
import Time from "./img/recycle/IconTime.svg"
import Location from "./img/recycle/IconLocation.svg"
import Knowledge from "./img/recycle/IconKnowledge.svg"

function Recycle(){
const bgcolor="#E3F4D8"

  return(
    <section className="section-work-body">

      <SectionHead
        category="Design Research"
        heading="Recycling Truck"
        intro="an easier, educational, and joyful social experience for neighbors and communities to recycle."
        // bgcolor={bgcolor}
      />
      <section className="section-body-middle">
        <div className="col col-60-percent">
          <img src={Cover} alt="img-work-large" className="img-work-large"></img>
        </div>
        
        <div className="col col-40-percent">
        <div className="box-border-left">
            <h4>overview</h4>
            Recycling Truck is a design thinking research to discover and solve problem about recycling unusual waste.
          </div>
          <div className="box-border-left"><h4>collaborators</h4>Yuqing Chen, Wei Cheng, Rodrigo Leal</div>
          <div className="box-border-left"><h4>my role</h4>UX research, UX design</div>
          <div className="box-border-left"><h4>time</h4>January to May, 2019</div>
        </div>
        <a target="_blank" href="https://drive.google.com/file/d/1aQFLD8wNyahneuSo5aGKkvArDf-OClLy/view?usp=sharing">
        <div className="button">View Presentation Slides</div></a>
      </section>
      <Divider/>

      <section className="section-body-middle"><h2>Design Process</h2>
        <img src={Process} className="img-work-large"/>
      </section>
      <Divider/>

      <section className="section-body-middle">
        <article>
        <div className="col col-50-percent">
          <h1>Only <mark>5%</mark> Austin Residents use the Recycling Drop-off Center</h1>
          <p>Our team started this project with a shared concern about environmental sustainability.
            I mentioned that I have a <u>recycling box</u> including items I know can be recycled,
            but I didn't know how to deal with them.
            
          </p>
          </div>
          <div className="col-align-right col-50-percent">
            <img src={Box} className="img-work-large"/>
          </div>
        </article>

        <div className="align-center">
          <h1>Why is recycling unusual waste difficult to people?</h1>
          We listed our assumptions first and will validate them through our research.
          <article>
          <div className="col col-33-percent">
            <img src={Knowledge} className="img-work-smaller"></img>
            <h3>Lack of knowledge</h3>
            People don’t know how to properly dispose unusual waste.
          </div>
          
          <div className="col col-33-percent">
            <img src={Location} className="img-work-smaller"></img>
            <h3>Inconvenient Location</h3>
            Recycling centers are far from people’s living areas.
          </div>
          
          <div className="col col-33-percent">
            <img src={Time} className="img-work-smaller"></img>
            <h3>Time Concerns</h3>
            People don’t want to commit time to deal with those waste.
          </div>
          </article>
          <Quote
          h4="Therefore, we want to focus on:"
          text1="Improving the convenience of recycling facilities in Autin and people’s awareness about unusual waste."
          bgcolor={bgcolor}
          />
        </div>

      </section>
      <Divider/>

      <section className="section-body-middle">
        <h1>Part 2 - Research</h1>
          We set up 3 interviews with subject matter experts from Austin Resource Recovery,
          a City of Austin department to learn about facilities operation,
          the education and marketing aspect of recycling in Austin.

          During the site visit to Austin Resource Recovery drop-off center,
          we completed intercept interviews with visitors to learn about their reason for recycling,
          their transportation ways to the drop off center, and their views about recycling in general.
        <img src={Research} className="img-work-large"></img>
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

      <section className="section-body-middle">          
        <article>
          <div className="col col-40-percent">
            <img src={Insight1} className="img-work-large"></img>
          </div>
          <div className="col col-60-percent">
            <h4>Insight 1</h4>
            <h2>Going to drop off center requires <mark>transportation and time</mark>, so people don’t want to commit their effort.</h2>
            There is only one recycling center in south Austin, and it require car to go there.
            The operation schedule doesn’t match well with people’s free time.
            During the busiest time, people have to wait in a long line to get into the drop of center.
            Therefore, people don’t want to go and drop off their unusual waste.
          </div>
        </article>

        <article>
          <div className="col col-40-percent">
            <img src={Insight2} className="img-work-large"></img>
          </div>
          <div className="col col-60-percent">
            <h4>Insight 2</h4>
            <h2>People tend to <mark>ignore confusions</mark> and don’t ask for help</h2>
            Although people know the importance about recycling and separating regular recyclable items and the other items,
            when they're deciding how to deal with them, they don’t search for the proper ways or ask for help.
            Only when there’s another person telling them what to do, they’ll do it and possibly continue to disposed of the item in that way.
          </div>
        </article>

        <article>
          <div className="col col-40-percent">
            <img src={Insight3} className="img-work-large"></img>
          </div>
          <div className="col col-60-percent">
            <h4>Insight 3</h4>
            <h2>There’s <mark>social impact</mark> behind recycling.</h2>
            People tend to change their habits to match people around them. 
            Either positively or negatively, people copy the recycling habits of others.
            They also change easily when they move to a new place with new people.
          </div>
        </article>
      </section>
      
      <section className="section-body-middle">
        <h3>Journey Map</h3>
        <img src={Journeymap} className="img-work-large"></img>
      </section>
      

      <section className="section-width-full bg-recycle">
        <article className="align-center">
          <h1>How might we</h1>
          <h2>
            Provide an <mark>easier, educational, and joyful</mark> social experience<br></br>
            for people in neighbors and communities<br></br>
            who don’t have a convenient way to visit drop off centers?<br></br>
          </h2>
        </article>
      </section>

      
      <section className="section-width-full">
        <div className="col col-30-percent align-vertical-center">
          <h2>Ideation</h2>
          We brainstormed and came up with several digital and physical solutions to 
          fix people's pain points based on the opportunities from journey map and research insights.
        </div>
        <div className="col-align-right col-70-percent "><img src={Ideation} className="img-work-large"></img></div>
      </section>

      <section className="section-body-middle"><h2>Part 4 - Prototype Testing</h2>
      <p>
        We picked the <b>recycling truck</b> for prototype testing.
        The purpose of prototyping is to actually tested with people, to learn from feedbacks and iterate our design.
      </p>
        <img src={PrototypeTruck} className="img-work-large"></img>
        <p>In version 1, we sent flyers and email announcements 2 days ahead to promote our recycling truck, end up having 5 participants and 5 observers.
          In the version 2, we tested another location and improve our advertising methods, having less participants than the first time.<br></br>
            
            We learned that...
          <ul>
            <li>We should estimate the number of participants as well as vehicle <u>capacity</u>.</li>
            <li>We found that <u>outdoor location</u> encourages more passersby to stop by.</li>
            <li>We can provide recycling <u>education information</u> when interacting with participants.</li>
            <li><u>Type of residents and neighborhood</u> affected the categories of the waste.</li>
            <li>We should send <u>even earlier and multiple channels</u> of marketing methods in neighborhoods.</li>
          </ul>
        </p>      
      </section>

      <Divider/>
      
      <section className="section-body-middle"><h2>Part 5 - Final Design Proposal</h2>
        <div className="col col-50-percent">
            <img src={Solution} className="img-work-large"></img>
        </div>
        <div className="col col-50-percent">
          <p>
            After all the research and the prototype testing,
            we came up with the design proposal.
            This is a concept that we can suggested to Austin Recycling Recovery Center
            to improve the experience and solve people’s problem and challenge about recycling.
          </p>
          <h3>The Recycling Truck</h3>
          <p>Recycling Truck goes around the city and has a schedule according to people’s working and living habits in every specific area.</p>
          
          <h3>The Scheduling System</h3>
          <p>People can get information about the truck through various of communication medium for the schedule
            and book a slot if they have larger items like furniture or electronics like televisions.</p>
        </div>
      </section>      

      <section className="section-width-full">
        <div className="align-center">
          <h1>The Process Using The Recycling Truck</h1>
          <div className="col col-33-percent">
            <img src={Get} className="img-work-smaller"></img>
            <h3>Get</h3>
            Get the <u>schedule of Recycling Truck</u> from website, mobile application, email announcements, or flyers 
            and get started to collect items at your preferred location.
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
            and gain <u>knowledge</u> through interacting with other users and  staffs at the recycling truck.
          </div>
        </div>
      </section>
      <Divider/>
      
      <section className="section-body-middle"><h2>Reflection</h2>
        <p>I really enjoyed doing this project because I really understanding how to conduct a research from a design thinking and human-centered perspective.
          I learned precious experience in every step from problem finding to research, from insights generation to final design.
          In addition, I knew more about recycling and my own living environment, it's very inspiring and I'm glad that we brought environmental awareness to people around us!</p>
      </section>
      <BackHome></BackHome>  
  </section>
  )
}
export default Recycle