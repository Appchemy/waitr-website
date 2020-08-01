import PageLayout from "./page-layout"
import React from 'react'
import { graphql } from 'gatsby'
import typography from "../utils/typography"

const Page = ({
    data
}) => {
    const post = data.markdownRemark
    const typographyStyle = typography.toJSON()

    console.log(typography.toJSON())
    // typography.injectStyles()

    return (
        <PageLayout>
            <div style={{padding: 10}} ref={ref => {
              if (ref) {
                ref.setAttribute('style', typography.toString())
              }
              
            }}>
            
            {post.frontmatter.investment && <h3>{post.frontmatter.investment}</h3>}
            {post.frontmatter.image && <img src={post.frontmatter.image} alt={post.frontmatter.title} style={{width: '100%'}} />}
            <h1 style={{...typographyStyle.h1, marginTop: 20}}>{post.frontmatter.title}</h1>
            <div style={{
                marginTop: 20,
                ...typographyStyle.html,
                overflow: 'hidden'
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