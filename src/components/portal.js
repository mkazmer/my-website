import React from "react"
import { createPortal } from "react-dom"

import "./portal.scss"

const portalText = {
  about:
    "I’ve lived and traveled across the U.S., and currently call Boston home. Exploring new places excites and humbles me, and my wife and I love to travel and seek new perspectives. At home, I spend time with our two rescue pups, Danger and Zelda.",
  games:
    "I’ve always been more of a casual gamer, but recently I’ve found a love for the strategy and social interaction of tabletop games. I am a life long Star Wars fan and overall sci-fi nerd, while also being a bit of a horror movie buff.",
  music:
    "I started playing bass when I was 14 and have been creating music ever since. There’s nothing more rewarding than building something from the ground up and sharing it, whether that’s playing live shows, improvising with the band, or tracking an album.",
}

const Portal = ({ selected, open, toggle }) => {
  if (open) {
    return createPortal(
      <div className="Portal">
        <button
          onClick={() => {
            toggle(false)
          }}
        >
          X
        </button>
        <div>{portalText[selected]}</div>
      </div>,
      document.getElementById("portal")
    )
  } else return null
}

export default Portal
