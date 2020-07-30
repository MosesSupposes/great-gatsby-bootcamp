import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

export default function ContactPage() {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/__MosesSupposes" target="_blank">
          @__MosesSupposes
        </a>{" "}
        on Twitter.
      </p>
      <Footer />
    </div>
  )
}
