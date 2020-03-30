import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  // console.log(
  //   data.allFile.edges.map(item => {
  //     return item.node.childImageSharp.fixed.src
  //   })
  // )
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <div className="container">
        {data.allFile.edges.map((item, index) => (
          <Image src={item.node.childImageSharp.fixed} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "destinations" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default SecondPage
