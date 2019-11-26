import React from "react"

import Layout from "../components/layout"
import Gallery from "../components/gallery"
import "./about.scss"

const About = () => (
  <Layout>
    <div className="About">
      <h1 className="about-header">
        Driven By Curiosity To Create Great Experiences
      </h1>
      <p className="about-para">
        Whether it’s writing a melodic bass line, exploring a dungeon crawler,
        or trying new cuisines, I’m driven by my desire to learn and to create
        engaging, memorable experiences.
      </p>
      <Gallery />
    </div>
  </Layout>
)

export default About
