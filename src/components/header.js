import React from "react"
import { Link } from "gatsby"

import bass from "../images/bass_banner.png"
import avatar from "../images/avatar.jpg"
import "./header.scss"

const Header = () => (
  <header>
    <div className="Header">
      <img className="banner-img" src={bass} alt="Banner Img" />
      <div className="nav">
        <ul>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/music">Music</Link>
          </li>
        </ul>
        <h1 className="name">MIKE KAZMER</h1>
        <ul className="roles">
          <li>
            <h2>FE Developer</h2>
          </li>
          <li>
            <h2>Bass Player</h2>
          </li>
        </ul>
      </div>
    </div>
    <div className="avatar">
      <img src={avatar} alt="Avatar" />
    </div>
  </header>
)

export default Header
