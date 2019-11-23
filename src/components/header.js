import React from "react"
import { Link } from "gatsby"

import bass from "../images/bass.jpg"
import avatar from "../images/avatar.jpg"
import "./Header.scss"

const Header = () => (
  <header>
    <div className="Header">
      <img className="banner-img" src={bass} alt="Banner Img" />
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
        </ul>
        <h1 className="name">MIKE KAZMER</h1>
        <ul className="details">
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
