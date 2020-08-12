import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

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
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(function renderPreview(edge, index) {
          return (
            <li className={blogStyles.post} key={index}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
