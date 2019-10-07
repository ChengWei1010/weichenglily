import React from "react"

function Quote(props){
  const bgcolor = {
    background: props.bgcolor,
  };

  return(
    <div>
        <div className="quote" style={bgcolor}>
        <h2>{props.h2}</h2>
        <h4>{props.h4}</h4>
            {props.text1}
            <br></br>
            {props.text2}
        </div>
    </div>
  )
}
export default Quote