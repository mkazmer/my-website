import React, { useState } from "react"
import { Link } from "gatsby"

import bass from "../images/bass_banner.png"
import avatar from "../images/avatar.jpg"
import "./header.scss"

const Header = () => {
  const [open, toggle] = useState(false)

  return (
    <header className="Header">
      <div className="header-container">
        <div className={`close-mobile-nav ${open ? "gray-background" : ""}`}>
          <button className="close-nav" onClick={() => toggle(false)} />
        </div>
        <img className="banner-img" src={bass} alt="Banner Bass Guitar Img" />
        <div className="mobile-background">
          <button onClick={() => toggle(true)} className="hamburger">
            <div className="hamburger-div"></div>
          </button>
          <div className={`nav ${open ? "mobile-nav-open" : ""}`}>
            <ul>
              <li className="nav-link">
                <Link onClick={() => toggle(false)} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link onClick={() => toggle(false)} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-link">
                <Link onClick={() => toggle(false)} to="/music">
                  Music
                </Link>
              </li>
            </ul>
          </div>
          <div className="name-container">
            <h1 className="name">MIKE KAZMER</h1>
            <ul className="roles">
              <li className="role">
                <h2>FE Developer</h2>
              </li>
              <li className="role">
                <h2>Bass Player</h2>
              </li>
            </ul>
          </div>
        </div>
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
    </header>
  )
}

export default Header
