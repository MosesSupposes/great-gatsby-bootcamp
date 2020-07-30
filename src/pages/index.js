import React from "react"
import { Link } from "gatsby"

export default function HomePage() {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Moses, a full-stack developer living in beautiful California.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}
