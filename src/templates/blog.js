import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// Beacause we exported a graphql query before rendering our JSX, the resolved value of this query gets passed as props to our component.
export const query = graphql`
  query blogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

// Don't forget that unlike with `useStaticQuery`, the graphql data gets stored under an attribute called `data`.
export default function Blog(props) {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}
