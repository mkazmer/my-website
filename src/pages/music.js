import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import livePic from "../images/gallery/music2.jpg"
import spotifyIcon from "../images/icons/spotify-icon.png"
import "./music.scss"

const BAND_LIST_QUERY = graphql`
  query BandList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            slug
          }
        }
      }
    }
  }
`

const Music = () => (
  <StaticQuery
    query={BAND_LIST_QUERY}
    render={data => (
      <Layout>
        <div className="Music">
          <h3 className="music-header">
            I've been lucky enough to play in many bands over the years, but
            here are a few of my favorites
          </h3>
          <div className="page-container">
            <ul className="band-list">
              {data.allMarkdownRemark.edges.map(m => {
                return (
                  <li className="band-container" key={m.node.frontmatter.title}>
                    <div className="band-header">
                      <h3 className="band-name">{m.node.frontmatter.title}</h3>
                      <a
                        className="spotify-container"
                        href={m.node.frontmatter.slug}
                      >
                        <img
                          className="spotify-link"
                          src={spotifyIcon}
                          alt="Spotify"
                        />
                      </a>
                    </div>
                    <p className="band-desc">
                      {m.node.frontmatter.description}
                    </p>
                  </li>
                )
              })}
            </ul>
            <img className="live-pic" src={livePic} alt="Live performace pic" />
          </div>
        </div>
      </Layout>
    )}
  />
)
export default Music
