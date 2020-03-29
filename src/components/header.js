import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h2>
      <Link to="#">{siteTitle}</Link>
    </h2>
    <nav>
      <li>
        <Link to="#">Tours</Link>
      </li>
      <li>
        <Link to="#">About</Link>
      </li>
      <li>
        <Link to="#">Contact</Link>
      </li>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
