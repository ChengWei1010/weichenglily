import React from "react"

function Quote(props){

  return(
    <div>
        <div className="quote">
        <h2>{props.h2}</h2>
        {props.text}
        </div>
    </div>
  )
}
export default Quote