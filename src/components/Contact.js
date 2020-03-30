import React from "react"

const Contact = () => {
  return (
    <section className="contact">
      <h3 className="title">Learn More</h3>
      <p>
        Want to know about our upcoming mountain-related events, or come to one
        of our mixers ? Just sign up for our mailing list. No spam from us, we
        promise ! Except for the spam we give you to keep up your energy while
        you're hiking throung the mountains. We have tons of that.
      </p>
      <hr />
      <form action="">
        <input type="email" placeholder="Email" />
        <a href="#" className="btn">
          Subscribe Now
        </a>
      </form>
    </section>
  )
}

export default Contact
