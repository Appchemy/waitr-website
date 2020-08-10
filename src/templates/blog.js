import PageLayout from "./page-layout"
import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import { Theme } from "../styles/theme"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Disqus } from 'gatsby-plugin-disqus'
import Share from "../components/share"

const Page = ({
    data
}) => {
    const post = data.markdownRemark
    const site = data.site.siteMetadata
    const twitterHandle = site.socialMedia.twitter
    const disqusConfig = {
      url: `https://waitr.co.za${post.fields.slug}`,
      identifier: post.fields.slug,
      title: post.frontmatter.title,
    }

    return (
        <PageLayout pages={[
          {
            title: 'Blog',
            link: '/blog'
          },
          {
            title: post.frontmatter.title,
            active: true
          }
        ]}>
          <SEO title={post.frontmatter.title} description={post.frontmatter.description} image={`${site.url}${post.frontmatter.image.childImageSharp.sizes.src}`} />
            <div style={{padding: 10}}>
            
            {post.frontmatter.image && <Img sizes={post.frontmatter.image.childImageSharp.sizes} alt={post.frontmatter.title} style={{width: '100%'}} />}
            <h1 style={{marginTop: 20}}>{post.frontmatter.title}</h1>
            <span style={{color: Theme.secondaryColor}}>
                  <i aria-label='Date' className='fas fa-calendar' style={{marginRight: 10}} />
                  {moment(post.frontmatter.date).format('MMM, D YYYY')}
                  <span style={{fontWeight: 'bold', marginLeft: 10, marginRight: 10, fontSize: '2em'}}>&middot;</span>
                  <span>{post.timeToRead} min read</span>
              </span>

            <div className='blog-post' style={{
                marginTop: 20,
                overflow: 'hidden'
            }} dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>

            <Share
              socialConfig={{
                twitterHandle,
                config: {
                  url: `${site.url}${post.fields.slug}`,
                  title: post.frontmatter.title,
                },
              }}
              tags={post.frontmatter.tags}
            />

            <Disqus config={disqusConfig} />
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