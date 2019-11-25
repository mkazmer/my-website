import React from "react"

import Layout from "../components/layout"
import Gallery from "../components/gallery"

const About = () => (
  <Layout>
    <div>
      <h1>Driven by curiosity to create great experiences</h1>
      <h4>
        Whether it’s writing a melodic bass line, exploring a dungeon crawler,
        or trying new cuisines, I’m driven by my desire to learn and to create
        engaging, memorable experiences.
      </h4>
      <Gallery />
    </div>
  </Layout>
)

export default About
