import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img from "gatsby-image"
import { Carousel } from 'antd';

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
                <div className="w3l-hero-headers-9" style={{background: '#4B4453', borderBottomRightRadius: '60%', paddingTop: 60}}>
                    <Carousel autoplaySpeed={6000} dotPosition={"left"} vertical={true} showArrows={false} swipeable={false} autoplay={true} infiniteLoop={true} stopOnHover={true} axis='vertical' showStatus={false}>
                        {headers.map((header, index) => {
                            return (
                                <section key={`header-${index}`} className="slide slide-one" style={{background: 'none'}}>
                    
                                <div className="container">
                                
                                        <div className="row">
                                            <div className="banner-text col-lg-5" style={{textAlign: 'left', marginLeft: 20}}>
                                                <h5 dangerouslySetInnerHTML={{__html: header.frontmatter.title}} />
                                                <p dangerouslySetInnerHTML={{__html: header.frontmatter.subtitle}} />
                                                <Link to='/signup' className="btn logo-button top-margin">Get Started</Link>
                                                <h6 className="para">Try a <strong>free demo </strong>with all the features.</h6>
                                            </div>
                                            <div className="image-postion col-lg-6">
                                                {header.frontmatter.image && <Img sizes={header.frontmatter.image.childImageSharp.sizes} alt={header.frontmatter.title} imgStyle={{height: 300, objectFit: 'cover', objectPosition: 'top', borderRadius: 10}} className="img-responsive banner-images" />}
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