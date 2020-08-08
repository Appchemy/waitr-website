import React from 'react'
import Title from './title'

const Testimonials = () => {
    return (
        <section className="w3l-clients">
            <div className="main-w3">
                <div className="container">
                    <Title>What out customers have to say</Title>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 hh14-text margin-bottom">
                            <div className="hh14-info">
                                <img src="assets/images/c1.jpg" alt="product" className="img-responsive " />
                                <p className="para mt-3">Consectetur adipisicing Lorem ipsum dolor sit amet,elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim.</p>
                                <h4>Jack Willson</h4>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 hh14-text">
                            <div className="hh14-info">
                                <img src="assets/images/c2.jpg" alt="product" className="img-responsive " />
                                <p className="para mt-3">Consectetur adipisicing Lorem ipsum dolor sit amet,elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim.</p>
                                <h4>Nike samson</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials