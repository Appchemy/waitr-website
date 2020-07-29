import PageLayout from "./page-layout"
import React from 'react'
import { graphql } from 'gatsby'

const Page = ({
    data
}) => {
    const post = data.markdownRemark

    return (
        <PageLayout>
            <div style={{padding: 10}}>
            
            {post.frontmatter.investment && <h3>{post.frontmatter.investment}</h3>}
            {post.frontmatter.image && <img src={post.frontmatter.image} alt={post.frontmatter.title} style={{width: '100%'}} />}
            <h1 style={{marginTop: 40}}>{post.frontmatter.title}</h1>
            <div style={{
                marginTop: 20
            }} dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </PageLayout>
    )
}

export default Page

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`