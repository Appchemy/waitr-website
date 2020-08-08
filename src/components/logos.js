import React from 'react'
import Title from './title'
import { StaticQuery } from 'gatsby'

const Logos = () => {
    return <StaticQuery query={graphql`
        query GetClients {
            allMarkdownRemark(filter: {fields: {type: {eq: "client"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            logo
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

                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                {clients.map((client, index) => {
                                    return (
                                        <div key={`client-${index}`} style={{marginLeft: 20, marginRight: 20}} className="grids-effect-2">
                                            <img src={client.frontmatter.logo} style={{height: 100, objectFit: 'contain'}} alt={client.frontmatter.title} />
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