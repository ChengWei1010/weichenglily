import React from "react"
import imgWei from "../wei.jpg";


function Image(props){
  console.log(props.path)
  return(
    // <img src={require(props.path)} alt={props.alt} className={props.size}/>
    <img src={imgWei} alt={props.alt} className={props.size}/>
  )
}
export default Image