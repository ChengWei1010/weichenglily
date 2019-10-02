import React from "react"

function Quote(props){
  const bgcolor = {
    background: props.bgcolor,
  };

  return(
    <div>
        <div className="quote" style={bgcolor}>
        <h2>{props.h2}</h2>
            {props.text}
        </div>
    </div>
  )
}
export default Quote