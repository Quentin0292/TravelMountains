/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaTwitter, FaFacebook, FaSnapchatGhost } from "react-icons/fa"

import Header from "./header"
import "./layout.css"

import test from "../images/mountains.jpg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <p>
            Images courtesy of <a href="https://unsplash.com/">unsplash</a>.
          </p>
          <p>
            Why are you even reading this ?! There's never anything interesting
            in the footer !
          </p>
          <ul>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSnapchatGhost />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
