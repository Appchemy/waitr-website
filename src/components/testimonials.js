import React from 'react'
import Title from './title'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Testimonials = () => {
    return <StaticQuery query={graphql`
    query GetTestimonials {
        allMarkdownRemark(filter: {fields: {type: {eq: "testimony"}}}) {
            edges {
            node {
                frontmatter {
                    name
                    image {
                        childImageSharp {
                          sizes(maxHeight: 80) {
                              ...GatsbyImageSharpSizes_withWebp
                          }
                        }
                      }
                    comment
                    occupation
                }
            }
            }
        }
    }`} render={data => {
        const testimonials = data.allMarkdownRemark.edges.map(item => {
            return item.node
          })

        return (
            <section className="w3l-clients">
            <div className="main-w3">
                <div className="container">
                    <Title>What our customers have to say</Title>

                    <div className="row">
                        {testimonials.map((testimony, index) => {
                            return (
                                <div key={`testimony-${index}`} className="col-lg-6 col-md-6 hh14-text margin-bottom">
                                    <div className="hh14-info">
                                    
                                        <Img className='img-responsive' sizes={testimony.frontmatter.image.childImageSharp.sizes} style={{height: 80}} imgStyle={{width: 80, height: 80}} alt={testimony.frontmatter.name} />
                                        <p className="para mt-3" style={{height: 100}}>{testimony.frontmatter.comment}</p>
                                        <h4>{testimony.frontmatter.name}</h4>
                                        <p style={{color: 'grey', fontSize: '0.8em'}}>{testimony.frontmatter.occupation}</p>
                                    </div>
                                </div>
                            )
                        })}

                        

                        {/* <div className="col-lg-6 col-md-6 hh14-text">
                            <div className="hh14-info">
                                <img src="/images/conner.png" alt="product" className="img-responsive " />
                                <p className="para mt-3">I'm very happy with the app. It makes your work easier at the end of the day. Everything goes online on the cloud and you don't have any paper work to do.</p>
                                <h4>Conner</h4>
                                <p style={{color: 'grey', fontSize: '0.8em'}}>Employee at Konette Car Wash in Pretoria North</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        )
    }} />
}

export default Testimonials