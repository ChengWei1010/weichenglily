import React from "react"
import Logo from "./Logo.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

function Footer(){
  const version = "WEI CHENG | June 2019"

  return(
    <footer>
      {/* <Logo /><br></br> */}
      <a target="_blank" href="https://www.facebook.com/WeiChengLily">
      <FontAwesomeIcon
        icon={['fab', 'facebook-f']}
        className="fa fa-facebook"
      /></a>

      <a target="_blank" href="https://www.linkedin.com/in/wei-cheng-280045130/">
      <FontAwesomeIcon
        icon={['fab', 'linkedin-in']}
        className="fa fa-linkedin"
      /></a>

      <a target="_blank" href="https://medium.com/@weichenglily">
      <FontAwesomeIcon
        icon={['fab', 'medium-m']}
        className="fa fa-medium"
      /></a>
      
      <a target="_blank" href="mailto:wei.cheng@utexas.edu">
      <FontAwesomeIcon
        icon={faEnvelope}
        className="fa fa-envelope"
      /></a>

      <p className="footerText">&copy; {`${version}`}</p>
    </footer>	
  )
}
export default Footer