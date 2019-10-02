import React from "react"

function SectionHead(props){

  return(
    <section className="section-head">
        <h4>{props.category}</h4>
        <h1>{props.heading}</h1>
        <div className="intro">{props.intro}</div>
    </section>
  )
}
export default SectionHead