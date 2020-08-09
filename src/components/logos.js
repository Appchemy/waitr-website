import React from 'react'
import Title from './title'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Logos = () => {
    return <StaticQuery query={graphql`
        query GetClients {
            allMarkdownRemark(filter: {fields: {type: {eq: "client"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            logo {
                                childImageSharp {
                                  sizes(maxHeight: 150) {
                                      ...GatsbyImageSharpSizes_withWebp
                                  }
                                }
                              }
                        }
                    }
                }
            }
        }`} render={data => {
            const clients = data.allMarkdownRemark.edges.map(item => {
                return item.node
            })

            return (
                <section className="w3l-call-to-action_9">
            <div className="call-w3">
                <div className="container">
                <Title>Some of our clients</Title>
                    <div className=" main-cont-wthree-2">
                        <div className="left-contect-calls text-center">

                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center'}}>
                                {clients.map((client, index) => {
                                    return (
                                        <div key={`client-${index}`} style={{marginLeft: 20, marginRight: 20, marginBottom: 0, paddingBottom: 0, display: 'inline'}} className="grids-effect-2">
                                            <Img style={{padding: 0, margin: 0, width: 150, height: 200}} sizes={client.frontmatter.logo.childImageSharp.sizes} imgStyle={{height: 200, width: 200, objectFit: 'contain'}} alt={client.frontmatter.title} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            )
        }} />
}

export default Logos