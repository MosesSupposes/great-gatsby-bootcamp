import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query allBlogPosts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      <h1>My Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(function renderPreview(edge, index) {
          return (
            <Link to={edge.node.fields.slug}>
              <li key={index}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}
