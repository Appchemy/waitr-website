const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode, basePath: `content` })

    const fileNode = getNode(node.parent)
    let parts = fileNode.relativePath.split('/')

    createNodeField({
      node,
      name: `type`,
      value: parts[0],
    })

    slug = createFilePath({ node, getNode, basePath: parts[0] })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                type
              }
            }
          }
        }
      }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (['blog'].indexOf(node.fields.type) != -1) {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      }
    })
  }