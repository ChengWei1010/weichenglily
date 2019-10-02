import React from "react"
import SectionHead from "../../components/SectionHead.js"

function Visualbi(){
  return(
    <section className="section-work-body">
    <SectionHead
        category="UI/UX Design Internship"
        heading="Visualbi Internship"
        intro="UI/UX research and design for business intelligence and data visualization product."
      />
        
    <section className="section-body-middle">
        <div className="col col-60-percent">
            <div className="box-border-left">
                <h4>overview</h4>
                During my internship, I conducted user interviews, focus groups, and user testings to iterate and redesign use flow and user experience of valQ, a Microsoft Power BI data visualization product by designing interactive prototype on Adobe XD.
                Refined the design of valQ’s future roadmap pitch deck.
            </div>
        </div>
        
        <div className="col col-40-percent">
          <div className="box-border-left"><h4>role</h4>UX research, UI/UX design</div>
          <div className="box-border-left"><h4>time</h4>May 2019 to current</div>
        </div>
      </section>

      <section className="section-body-last">
        <h2>Relfection</h2>
        <p>Coming soon!</p>
      </section>
    </section>
    
  )
}
export default Visualbi