import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const WideFeature = () => {
    return (
        <StaticQuery query={graphql`
            query WaitrOnlineImage {
                file(relativePath: {eq: "b11.png"}) {
                    childImageSharp {
                        sizes(maxWidth: 600) {
                            ...GatsbyImageSharpSizes_withWebp
                        }
                      }
                }
            }`} render={data => {
                const waitrOnlineImage = data.file

                return (
                    <section className="w3l-teams-15">

                        <div className="team-single-main">
                            <div className="container">
                                <div className=" grid grid-column-2 row">
                                    <div className="column1 col-lg-6">
                                        <Img sizes={waitrOnlineImage.childImageSharp.sizes} className='img-responsive' alt='Waitr Online' />
                                    </div>
                                    <div className="column2 col-lg-6">
                                        <h3 className="team-head">Get your own app for online orders</h3>
                                        <p className="para text">The best thing you can do for your business is to take it online. Waitr online allows you to save up even more time on your customers’ schedule through a speedy and efficient ordering process, which enables them to do business with you anytime and anywhere. You can add this app to your package for free.</p>
                                            <Link to='/signup' className="btn action-button" style={{width: 250, marginTop: 10}}>Start 30 Days Free Trial</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }} />
    )
}

export default WideFeature