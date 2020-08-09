import React from 'react'
import Title from './title'
import Card from './card'
import { StaticQuery, graphql } from 'gatsby'

const CardList = () => {
    return <StaticQuery query={graphql`
    query GetBusinesses {
        allMarkdownRemark(filter: {fields: {type: {eq: "business"}}}) {
            edges {
            node {
                frontmatter {
                title
                position
                icon
                }
                html
            }
            }
        }
    }`} render={data => {
        const businesses = data.allMarkdownRemark.edges.map(item => {
            return item.node
          }).sort((a, b) => {
              if (a.frontmatter.position < b.frontmatter.position) {
                  return -1
              }

              return 1
          })

        return (
            <section className="w3l-specification-6">
                <div className="specification-layout">
                    <div className="container">
                        <Title>Is Your Busines One of the Following?</Title>
                        <div className="specification-effect row text-center">
                            {businesses.map((business, index) => {
                                return <Card key={`business-${index}`} title={business.frontmatter.title} description={business.html} icon={business.frontmatter.icon} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }} />
}

export default CardList