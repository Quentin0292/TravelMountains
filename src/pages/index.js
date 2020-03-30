import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Destination from "../components/Destination"
import Features from "../components/Features"
import Testimonials from "../components/Testimonial"
import Contact from "../components/Contact"

import "../sass/App.scss"

const IndexPage = data => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Destination datas={data} />
    <Features />
    <Testimonials />
    <Contact />
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
