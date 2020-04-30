import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

function BackHome(props){

  return(
    <section className="section-body-middle section-body-last">
        <h3>thanks for reading this project.</h3>
        <a href="/"><span><FontAwesomeIcon icon={faLongArrowAltLeft}/></span>  <u>Back to home</u></a>
    </section>
  )
}
export default BackHome