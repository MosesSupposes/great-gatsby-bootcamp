import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function AboutPage() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        I am a Lambda School grad. I currently work as a freelance developer.
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out. </Link>
      </p>
    </Layout>
  )
}
