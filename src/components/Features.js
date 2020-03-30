import React from "react"
import {
  FaCompass,
  FaCameraRetro,
  FaBicycle,
  FaFlagCheckered,
} from "react-icons/fa"

const Features = () => {
  return (
    <section className="packages">
      <h3>Tour Packages</h3>
      <hr />
      <p>
        We offer a variety of mountaineering packages. Whether you've climbed
        Everest or don't even know what a mountain is, we've got the perfect
        vacation for you.
      </p>
      <ul className="grid">
        <li>
          <FaCompass />
          <h4>Guided Trips</h4>
          <p>
            Looking for the complete experience ? Take a tour with one of our
            experts. They'll show you secrets that you're likely to miss
            otherwise.
          </p>
        </li>
        <li>
          <FaCameraRetro />
          <h4>Photo Trips</h4>
          <p>
            Want to experience nature's beauty without all of that annoying
            exercise ? Take a photo tour on one of our mountain buses.
          </p>
        </li>
        <li>
          <FaBicycle />
          <h4>Biking Trips</h4>
          <p>
            If bicycles are more your speed, consider taking a tour throug one
            of our mountain bike paths. We'll provide the bikes, and lunch too !
          </p>
        </li>
        <li>
          <FaFlagCheckered />
          <h4>Racing Trips</h4>
          <p>
            Got a competitive spirit ? Sign up for one of our mountain marathons
            ! Try to reach the summit before anyone else.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Features
