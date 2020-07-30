import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

export default function HomePage() {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm Moses, a full-stack developer living in beautiful California.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </div>
  )
}
