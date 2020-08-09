import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

const Features = () => {
    return (
        <StaticQuery query={graphql`
            query GetFeatures {
                allMarkdownRemark(filter: {fields: {type: {eq: "feature"}}}) {
                    edges {
                    node {
                        frontmatter {
                        title
                        icon
                        }
                        html
                    }
                    }
                }
            }`} render={data => {
                const features = data.allMarkdownRemark.edges.map(item => {
                    return item.node
                }).sort((a, b) => {
                    if (a.frontmatter.title < b.frontmatter.title) {
                        return -1
                    }

                    return 1
                })

                return (
                    <section className="w3l-grids-7">
                        <div className="grids4-block">
                            <div className="container">
                                <div className="row">
                                    <div className="column-text col-lg-6">
                                        <h3 className="team-head">Features</h3>
                                        <p className="para text">View some of the features we offer</p>
                                        <div className="call-grids-w3">
                                            {features.map((feature, index) => {
                                                return (
                                                    <div key={`feature-${index}`} className="grids-1 grids-effect-2">
                                                        <h4 style={{marginBottom: 5}}>{feature.frontmatter.title}</h4>
                                                        <div className="para" dangerouslySetInnerHTML={{__html: feature.html}}></div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <Link to='/signup' className="btn action-button mt-lg-5 mt-4 ">Sign Up</Link>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="assets/images/b2.png" alt="product" className="img-responsive " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }} />
    )
}

export default Features