import React from "react"
import SectionHead from "../../components/SectionHead.js"
import Divider from "../../components/Divider.js"
import Research1 from "./img/visualbi/Research1.jpg"
import Research2 from "./img/visualbi/Research2.jpg"

function Visualbi(){
  const bgcolor="#99D6EF"
  const bg = {
    bgcolor: "#99D6EF"
  }
  
  return(
    <section className="section-work-body">
    <SectionHead
        category="UI/UX Design Internship"
        heading="Visualbi"
        intro="UX research and design for business intelligence and data visualization product on Microsoft Power BI."
        bgcolor={bgcolor}
      />
        
    <section className="section-body-middle">
        <div className="col col-60-percent">
            <div className="box-border-left">
                <h4>overview</h4>
                During my internship, I conducted user interviews, focus groups, and user testings to iterate and redesign use flow and user experience of valQ, a Microsoft Power BI data visualization product by designing interactive prototype on Adobe XD.
                I also refined the design of valQ’s future roadmap pitch deck.
            </div>
        </div>
        
        <div className="col col-40-percent">
          <div className="box-border-left"><h4>role</h4>UX research, UI/UX design</div>
          <div className="box-border-left"><h4>time</h4>May 2019 to current</div>
        </div>
      </section>


      <section className="section-body-last">
        <article>
          <h2>Design for valQ with product team</h2>
          <p>
          I design for valQ, a data visualization tool on Microsoft Power BI.
          It was previously the value driver tree visualization on SAP Lumira Designer.
          It recently migrated to Microsoft Power BI platform to meet more users’ needs.
          </p>
        </article>

        <article>
          <h2>How did I design?</h2>
          <h3>Rapid user research for new features</h3>
          <p>
          For new feature exploration for the business model building in the visualization tool,
          I conducted small internal focus group with product users (business analyst).
          And I listed the stakeholder needs, the users’ need, and the design principles together to decide how to prioritize and design the feature.
          <br></br><br></br>
          After conducting the basic research, I will finally create interactive prototype using Adobe XD for the feature update.
          </p>

          <div className="col col-50-percent">
            <img src={Research1} className="img-work-large"></img>
          </div>
          <div className="col col-50-percent">
            <img src={Research2} className="img-work-large"></img>
          </div>
        </article>
        <Divider></Divider>
        <article>
          <h2>Want to learn more?</h2>
          <h3>chat with me!</h3>
          <p>
          I can’t show you all the product here, but feel free to contact with me.
          I will be very happy to discuss about UI/UX design for enterprise data visualization and business analysis tool with you!
          </p>
        </article>

      </section>
    </section>
    
  )
}
export default Visualbi