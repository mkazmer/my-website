import React, { useState } from "react"

import about from "../images/gallery/about.jpg"
import games from "../images/gallery/games.jpg"
import music from "../images/gallery/music.jpg"
import Portal from "./portal"
import "./gallery.scss"

const Gallery = () => {
  const [open, toggle] = useState(false)
  const [selected, setSelected] = useState("about")

  return (
    <div className="Gallery">
      <Portal selected={selected} open={open} toggle={toggle} />
      <div className="tile">
        <button
          onClick={() => {
            toggle(true)
            setSelected("about")
          }}
        >
          <img className="image" src={about} alt="Travel pic" />
        </button>
      </div>
      <div className="tile">
        <button
          onClick={() => {
            toggle(true)
            setSelected("games")
          }}
        >
          <img className="image" src={games} alt="Zelda board game" />
        </button>
      </div>
      <div className="tile">
        <button
          onClick={() => {
            toggle(true)
            setSelected("music")
          }}
        >
          <img className="image" src={music} alt="Me playing bass" />
        </button>
      </div>
    </div>
  )
}

export default Gallery
