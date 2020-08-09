import React from "react"
import PageLayout from "../templates/page-layout"
import { graphql } from "gatsby"
import BlogCard from "../components/blog-card"

const BlogPage = ({
  data
}) => {
  const blogs = data.allMarkdownRemark.edges.map(item => {
    return item.node
  })

  return (
    <PageLayout pages={[
      {
        title: 'Blog',
        active: true
      }
    ]}>
        <h1>Blog Posts</h1>
          <div className="main-w3">
            <div className="container">
              <div className="row">
                {blogs.map((blog, index) => {
                  return <BlogCard key={`blog-card-${index}`} blog={blog} />
                })}
              </div>
            </div>
          </div>
    </PageLayout>
  )
}

export default BlogPage

export const query = graphql`
  query GetBlogs {
    allMarkdownRemark(filter: {fields: {type: {eq: "blog"}}}) {
        edges {
          node {
            fields {
              type
              slug
            }
            frontmatter {
              title
              image
              date
            }
            excerpt(format: PLAIN)
            timeToRead
          }
        }
      }
  }
`