import React from "react"
import PageLayout from "../templates/page-layout"
import { Row, Col, Card } from "antd"
import { Link, graphql } from "gatsby"

const BlogPage = ({
    data
}) => {
    const blogs = data.allMarkdownRemark.edges.map(item => {
        return item.node
    })

  return (
    <PageLayout>
      <div style={{paddingLeft: 20, paddingRight: 20}}>
        <h1>Blog Posts</h1>
        <Row gutter={[16, 16]}>
        {blogs.map((blog, index) => {
            return (
                <Col xs={24} sm={12} lg={12} key={index}>
                    <Card hoverable actions={[<Link to={blog.fields.slug}>Read</Link>]} cover={<img alt={blog.frontmatter.title} style={{height: 200, width: '100%', objectFit: 'cover'}} src={blog.frontmatter.image} />}>
                        <Card.Meta title={blog.frontmatter.title} description={<div style={{minHeight: 100}}>{blog.excerpt}<br/><div style={{marginTop: 10, fontWeight: 'bold'}}></div></div>} />
                    </Card>
                </Col>
            )
        })}
        </Row>
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
            }
            excerpt(format: PLAIN)
          }
        }
      }
  }
`