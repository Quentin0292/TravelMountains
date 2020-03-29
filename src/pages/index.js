import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from "../components/Hero"
import SEO from "../components/seo"

import "../sass/App.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
