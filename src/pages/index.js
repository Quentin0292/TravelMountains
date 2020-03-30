import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Destination from "../components/Destination"

import "../sass/App.scss"

const IndexPage = data => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Destination datas={data} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "destinations" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
