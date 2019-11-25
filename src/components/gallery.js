import React from "react"

import about from "../images/gallery/about.jpg"
import games from "../images/gallery/games.jpg"
import music from "../images/gallery/music.jpg"
import "./gallery.scss"

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="tile">
        <img className="image" src={about} alt={`${about}`} />
        <p>I love travel and stuff.</p>
      </div>
      <div className="tile">
        <img className="image" src={games} alt={`${games}`} />
        <p>I love table-top games and nerd stuff.</p>
      </div>
      <div className="tile">
        <img className="image" src={music} alt={`${music}`} />
        <p>Have been playing bass for over 2 decades.</p>
      </div>
    </div>
  )
}

export default Gallery
