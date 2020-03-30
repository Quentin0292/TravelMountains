import React from "react"
import Image from "../components/image"

const Destination = ({ datas }) => {
  console.log(datas.data.allFile.edges)
  return (
    <section className="destinations">
      <h3>Some of our destinations</h3>
      <p>
        Tired of the ocean ? Are the plains too plain ? Come along with us on
        one of our mountain adventures. Here are some pictures from people who
        have had elevated experiences with us.
      </p>
      <hr />
      <div className="gallery">
        {datas.data.allFile.edges.map((item, index) => {
          return (
            <div className="gallery-item" key={index}>
              <Image src={item.node.childImageSharp.fluid} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Destination
