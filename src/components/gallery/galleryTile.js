import React from "react"

import InfoIcon from "../../images/icons/info-icon.png"
import "./galleryTile.scss"

const GalleryTile = ({ image, toggle, toSelect, setSelected }) => {
  console.log(image)
  return (
    <div className="GalleryTile">
      <button
        onClick={() => {
          toggle(true)
          setSelected(toSelect)
        }}
      >
        <img className="info-icon" src={InfoIcon} alt="Info icon" />
        <img className="image" src={image} alt={`${image}`} />
      </button>
    </div>
  )
}

export default GalleryTile
