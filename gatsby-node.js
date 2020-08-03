const path = require("path")

exports.onCreateNode = function generateAndAttachSlug({ node, actions }) {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async function createPagesForBlogPosts({
  graphql,
  actions,
}) {
  const { createPage } = actions
  // Fetch all slugs
  const { data } = await graphql(`
    query allSlugs {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Create an individual page for each slug, passing in the slug as context
  data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: path.resolve("./src/templates/blog.js"),
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
