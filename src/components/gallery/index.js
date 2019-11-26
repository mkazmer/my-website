import React, { useState } from "react"

import about from "../../images/gallery/about.jpg"
import games from "../../images/gallery/games.jpg"
import music from "../../images/gallery/music.jpg"
import Portal from "./portal"
import GalleryTile from "./galleryTile"
import "./index.scss"

const Gallery = () => {
  const [open, toggle] = useState(false)
  const [selected, setSelected] = useState("about")

  return (
    <div className="Gallery">
      <Portal selected={selected} open={open} toggle={toggle} />
      <GalleryTile
        image={about}
        toggle={toggle}
        toSelect={"about"}
        setSelected={setSelected}
      />
      <GalleryTile
        image={games}
        toggle={toggle}
        toSelect={"games"}
        setSelected={setSelected}
      />
      <GalleryTile
        image={music}
        toggle={toggle}
        toSelect={"music"}
        setSelected={setSelected}
      />
    </div>
  )
}

export default Gallery
