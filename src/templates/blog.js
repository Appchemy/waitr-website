import PageLayout from "./page-layout"
import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import { Theme } from "../styles/theme"

const Page = ({
    data
}) => {
    const post = data.markdownRemark

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
            <div style={{padding: 10}}>
            
            {post.frontmatter.image && <img src={post.frontmatter.image} alt={post.frontmatter.title} style={{width: '100%'}} />}
            <h1 style={{marginTop: 20}}>{post.frontmatter.title}</h1>
            <span style={{color: Theme.secondaryColor}}>
                  <i aria-label='Date' className='fas fa-calendar' style={{marginRight: 10}} />
                  {moment(post.frontmatter.date).format('MMM, D YYYY')}
                  <span style={{fontWeight: 'bold', marginLeft: 10, marginRight: 10, fontSize: '2em'}}>&middot;</span>
                  <span>{post.timeToRead} min read</span>
              </span>

            <div style={{
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
        image
        date
      }
      timeToRead
    }
  }
`