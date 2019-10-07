import React from "react"
import Divider from "../../components/Divider.js"
import SectionHead from "../../components/SectionHead.js"
import Quote from "../../components/Quote.js"

import Process from "./img/steve/Process.svg"
import Style from "./img/steve/Style.svg"
import Interview1 from "./img/steve/Interview1.jpg"
import Interview2 from "./img/steve/Interview2.jpg"
import JourneyMaps from "./img/steve/JourneyMaps.png"
import Mural from "./img/steve/Mural.png"
import Storyboard from "./img/steve/Storyboard.png"
import IA from "./img/steve/IA.svg"
import HiFi from "./img/steve/HiFi.png"
import IconInfo from "./img/steve/IconInfo.png"
import IconConnection from "./img/steve/IconConnection.png"
import IconSoftskills from "./img/steve/IconSoftskills.png"
import IconDemotivated from "./img/steve/IconDemotivated.png"

function Steve(){
const bgcolor="#DEF1F2"
const bg = {
  bgcolor: "#DEF1F2"
}

  return(
    <section className="section-work-body">
      <SectionHead
        category="UX Research and Design"
        heading="Steve.ai"
        intro="Using Artificial Intelligence to assist people to switch career."
        bgcolor={bgcolor}    
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
          <div className="box-border-left"><h4>collaborators</h4>Esha Kothari, Anmol Khandeparker, Prajwal Pokharel</div>
          <div className="box-border-left"><h4>role</h4>UX research, UX design</div>
          <div className="box-border-left"><h4>time</h4>January to May, 2019</div>
        </div>
      </section>

      <section className="section-body-middle"><h2>Design Process</h2>
        <img src={Process} className="img-work-large"/>
      </section>
      <Divider/>
      
      <section className="section-body-middle"><h2>Part 1 - Problem Space</h2>
      <Quote
          h4="Career Switch Without a Degree:"
          text1="Many jobs in technology field don’t require a degree and value candidates’ experience and skills.
          However, career switch in this area is difficult to people."
          bgcolor={bgcolor}
        />
      <iframe className="youtube" src="https://www.youtube.com/embed/1-aUaOg4qPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      <Divider/>

      <section className="section-body-middle"><h2>Part 2 - Research</h2>
        <article>
        <h3>user interview</h3>
          <p>We interviewed 5 people who is currently preparing to switch their career in technology field.
            We asked questions about their background and goals, reasons to change their career into technology field,
            how do they prepare for it, their challenges during the process, and their thoughts about this whole experience.</p>
          <div className="col col-50-percent"><img src={Interview1} className="img-work-large"/></div>
          <div className="col col-50-percent"><img src={Interview2} className="img-work-large"/></div>
        </article>
      </section>
      <section className="section-width-full">
        <h3>user journeymaps</h3>
        <p>During the interview, our interviewees completed their own user journey map with us.<br></br>
        We found out that although they have different highs and lows,
        they all feel that <u>developing the skills</u> is the most struggling and difficult stage during the career switch process.
        </p>
          <img src={JourneyMaps} className="img-work-large"/>
      </section>

      <section className="section-width-full">
        <h3>AI design exploration</h3>
        <img src={Mural} className="img-work-large"/>
        <a target="_blank" href="https://app.mural.co/t/studentorganization2031/m/studentorganization2031/1553644853362/553946bdc643267b8e9b284d97a4602da81ac0a2">
        <div className="button">View Full Mural board</div></a>
      </section>

      <section className="section-body-middle">
      <h2>Research Insights</h2>
        <div className="row align-center">
          <div className="col col-50-percent">
            <img src={IconInfo} className="img-work-icon"></img>
            <h3>Information Overload</h3>
            <p>It is difficult to select and prioritize to select the best and the most suitable resource for career switch preparation.</p>
          </div>
          <div className="col col-50-percent">
            <img src={IconConnection} className="img-work-icon"></img>
            <h3>Lack of Connection</h3>
            <p>Networking is important in career, however, it is hard to make the right connection for the right resources.</p>
          </div>
        </div>
        
        <div className="row align-center">
          <div className="col col-50-percent">
            <img src={IconSoftskills} className="img-work-icon"></img>
            <h3>Soft Skills</h3>
            <p>Not only the soft skills are the part that need training,
            soft skills like collaboration and communication are important to make career switcher successful.</p>
          </div>
          <div className="col col-50-percent">
            <img src={IconDemotivated} className="img-work-icon"></img>
            <h3>Feeling Demotivated</h3>
            <p>Is is hard to keep motivated for career switcher during the learning and preparing process,
            they might still give up even though spending a lot of time on preparation because the lack of encouragement.</p>
          </div>                        
        </div>
      </section>
      <section className="section-width-full" style={bg}>
        <Quote
        className="section-body-middle"
            h4="How might we..."
            text1="Guide and motivate career switcher to develop both hard and soft skills along with connections in optimum time?"
            bgcolor={bgcolor}/> 
      <Divider/>
      </section>

      <section className="section-body-middle"><h2>Part 3 - Design</h2>
        <img src={Storyboard} className="img-work-large"/>
      </section>

      
      <section className="section-width-full">
        <div className="col col-50-percent"><img src={IA} className="img-work-large"/></div>
        <div className="col col-50-percent"><img src={Style} className="img-work-large"/></div>
      </section>

      <section className="section-width-full">
        <div className="col col-30-percent align-vertical-center"><h2>Hi-Fi Design</h2>
        Using Steve.ai style, I designed the high fidelity design and the interactive prototype.</div>
        <div className="col-align-right col-70-percent "><img src={HiFi} className="img-work-large"/></div>
      </section>
        
      <section className="section-body-middle section-body-last">
        <iframe className="figma" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOOsPkArv70EYKaDcqbnf7Bha%2FSteve.ai%3Fnode-id%3D20%253A1555%26viewport%3D841%252C-67%252C0.2655298113822937%26scaling%3Dscale-down" allowfullscreen></iframe>
        <iframe className="youtube" src="https://www.youtube.com/embed/v3TrLTPbZUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      

      {/* <section className="section-body-middle section-body-last">
        <h2>Relfection</h2>
        <p></p>
      </section> */}
    </section>
    
  )
}
export default Steve