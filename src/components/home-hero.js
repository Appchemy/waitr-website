import React from 'react'
import { StaticQuery } from 'gatsby'
import { Carousel } from 'antd'

const HomeHero = () => {
    return <StaticQuery query={graphql`
        query GetHeaders {
            allMarkdownRemark(filter: {fields: {type: {eq: "header"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
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
                <div className="w3l-hero-headers-9" style={{background: '#4B4453', borderBottomRightRadius: '60%'}}>
                    <Carousel autoplay={true} autoplaySpeed={6000} dotPosition='left' style={{paddingTop: 30}}>
                        {headers.map((header, index) => {
                            return (
                                <section key={`header-${index}`} className="slide slide-one" style={{background: 'none'}}>
                    
                                <div className="container">
                                
                                        <div className="row">
                                            <div className="banner-text col-lg-5">
                                                <h5 dangerouslySetInnerHTML={{__html: header.frontmatter.title}} />
                                                <p dangerouslySetInnerHTML={{__html: header.frontmatter.subtitle}} />
                                                <a href="#" className="btn logo-button top-margin">Get Started</a>
                                                <h6 className="para">Try a <strong>free demo </strong>with all the features.</h6>
                                            </div>
                                            <div className="image-postion col-lg-7">
                                                <img src="/assets/images/bb2.jpg" alt="product" className="img-responsive banner-images" />
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