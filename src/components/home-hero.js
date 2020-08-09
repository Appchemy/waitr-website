import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import style from 'antd/dist/antd.css';
// import '../styles/theme.less';

const HomeHero = () => {
    return <StaticQuery query={graphql`
        query GetHeaders {
            allMarkdownRemark(filter: {fields: {type: {eq: "header"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            image
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
                    <Carousel dynamicHeight={false} showArrows={false} swipeable={false} autoPlay={true} infiniteLoop={true} stopOnHover={true} axis='vertical' showStatus={false}>
                        {headers.map((header, index) => {
                            return (
                                <section key={`header-${index}`} className="slide slide-one" style={{background: 'none', height: 350}}>
                    
                                <div className="container">
                                
                                        <div className="row">
                                            <div className="banner-text col-lg-5" style={{textAlign: 'left'}}>
                                                <h5 dangerouslySetInnerHTML={{__html: header.frontmatter.title}} />
                                                <p dangerouslySetInnerHTML={{__html: header.frontmatter.subtitle}} />
                                                <Link to='/sign-up' className="btn logo-button top-margin">Get Started</Link>
                                                <h6 className="para">Try a <strong>free demo </strong>with all the features.</h6>
                                            </div>
                                            <div className="image-postion col-lg-7">
                                                <img src={header.frontmatter.image} alt="product" className="img-responsive banner-images" />
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