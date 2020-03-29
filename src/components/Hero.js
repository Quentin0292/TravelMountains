import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <section className="hero">
      <div className="background-image"></div>
      <div className="hero-content-area">
        <h1>Mountain Travel</h1>
        <h3>Unmissable Adventure Tours Around The World</h3>
        <Link className="btn" to="#">
          Contact Us
        </Link>
      </div>
    </section>
  )
}

export default Hero
