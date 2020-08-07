import React from "react"
// import PageLayout from "../templates/page-layout"
import { graphql } from 'gatsby'
// import Businesses from "../components/businesses"
// import HorizontalContactForm from "../components/horizontal-contact-form"
// import Features from "../components/features"
import HomePage from "./home"

export default function Home({
  data
}) {
  // const headers = data.allMarkdownRemark.edges.map(item => {
  //   return item.node
  // })

  return (
    <HomePage />
    // <PageLayout showHeader={true} headers={headers}>
    //   <Businesses />
    //   <HorizontalContactForm />
    //   <Features />
    // </PageLayout>
  )
}

export const query = graphql`
  query GetHeaders {
    allMarkdownRemark(filter: {fields: {type: {eq: "header"}}}) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              image
            }
          }
        }
      }
  }
`