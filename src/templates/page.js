import PageLayout from "./page-layout"
import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Img from "gatsby-image"

const Page = ({
    data
}) => {
    const post = data.markdownRemark
    const site = data.site.siteMetadata

    return (
        <PageLayout pages={[
          {
            title: post.frontmatter.title,
            active: true
          }
        ]}>
          <SEO title={post.frontmatter.title} description={post.frontmatter.description} image={post.frontmatter.image ? `${site.url}${post.frontmatter.image.childImageSharp.sizes.src}` : null} />
            <div style={{padding: 10}}>
            
            {post.frontmatter.image && <Img sizes={post.frontmatter.image.childImageSharp.sizes} alt={post.frontmatter.title} style={{width: '100%'}} />}
            <h1 style={{marginTop: 20}}>{post.frontmatter.title}</h1>
            <div className='blog-post' style={{
                marginTop: 20,
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
        date
        image {
          childImageSharp {
            sizes(maxWidth: 1200, quality: 80) {
                ...GatsbyImageSharpSizes_withWebp
                src
            }
          }
        }
      }
      fields {
        slug
      }
      timeToRead
    },
    site {
			siteMetadata { url, socialMedia { twitter } },
		},
  }
`