import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Mike!</h1>
    <div className="home-container">
      <div className="text-container-1">
        <p className="home-text">
          As a skilled problem solver and lifelong learner, I'm excited by new
          challenges. With my extensive background in both technical and
          creative fields, I bring both an analytical and creative mindset to
          all I do.
        </p>
      </div>
      <div className="text-container-2">
        <p className="home-text">
          As a musician, I live and breathe the creative process, enjoy
          collaborating, and love building something from the ground up.
        </p>
      </div>
      <div className="text-container-3">
        <p className="home-text">Lets build something great together.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
