import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img from "gatsby-image"

const HomeHero = () => {
    return <StaticQuery query={graphql`
        query GetHeaders {
            allMarkdownRemark(filter: {fields: {type: {eq: "header"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            image {
                                childImageSharp {
                                  sizes(maxWidth: 1000) {
                                      ...GatsbyImageSharpSizes_withWebp
                                  }
                                }
                              }
                            subtitle
                        }
                        html
                    }
                }
            }
        }`} render={data => {
            const headers = data.allMarkdownRemark.edges.map(item => {
                return item.node
            })
            return (
                <div className="w3l-hero-headers-9" style={{background: '#4B4453', borderBottomRightRadius: '60%', height: 500}}>
                    <Carousel dynamicHeight={true} interval={3000} showArrows={false} swipeable={false} autoPlay={false} infiniteLoop={true} stopOnHover={true} axis='vertical' showStatus={false}>
                        {headers.map((header, index) => {
                            return (
                                <section key={`header-${index}`} className="slide slide-one" style={{background: 'none', height: 500}}>
                    
                                <div className="container" style={{height: 300}}>
                                
                                        <div className="row">
                                            <div className="banner-text col-lg-5" style={{textAlign: 'left'}}>
                                                <h5 dangerouslySetInnerHTML={{__html: header.frontmatter.title}} />
                                                <p dangerouslySetInnerHTML={{__html: header.frontmatter.subtitle}} />
                                                <Link to='/sign-up' className="btn logo-button top-margin">Get Started</Link>
                                                <h6 className="para">Try a <strong>free demo </strong>with all the features.</h6>
                                            </div>
                                            <div className="image-postion col-lg-7">
                                                {header.frontmatter.image && <Img sizes={header.frontmatter.image.childImageSharp.sizes} alt={header.frontmatter.title} imgStyle={{height: 300, objectFit: 'cover', objectPosition: 'top', borderRadius: 10}} alt="product" className="img-responsive banner-images" />}
                                                {/* <img src={header.frontmatter.image}    /> */}
                                            </div>
                                        </div>
                                        
                                    </div>
                                
                                
                                    
                                </section>
                            )
                        })}
                    </Carousel>
                </div>
            )
        }} />
}

export default HomeHero