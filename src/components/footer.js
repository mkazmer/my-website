import React from "react"

import linkedin from "../images/icons/linkedin.png"
import github from "../images/icons/github.png"
import twitter from "../images/icons/twitter.png"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <ul>
          <li className="footer-link">
            <a href="https://www.linkedin.com/in/michael-kazmer-517967118/">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </li>
          <li className="footer-link">
            <a href="https://github.com/mkazmer">
              <img src={github} alt="Github" />
            </a>
          </li>
          <li className="footer-link">
            <a href="https://twitter.com/webbasser">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-extend" />
    </div>
  )
}

export default Footer
