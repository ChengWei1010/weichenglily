import React from "react"

function SectionHead(props){
  const bgcolor = {
    background: props.bgcolor,
  };
  return(
    <section className="section-head" style={bgcolor}>
        <h4>{props.category}</h4>
        <h1>{props.heading}</h1>
        <h2>{props.intro}</h2>
    </section>
  )
}
export default SectionHead