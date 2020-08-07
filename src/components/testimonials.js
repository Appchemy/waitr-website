import React from 'react'
import Title from './title'

const Testimonials = () => {
    return (
        <section class="w3l-clients">
            <div class="main-w3">
                <div class="container">
                    <Title>What out customers have to say</Title>

                    <div class="row">
                        <div class="col-lg-6 col-md-6 hh14-text margin-bottom">
                            <div class="hh14-info">
                                <img src="assets/images/c1.jpg" alt="product" class="img-responsive " />
                                <p class="para mt-3">Consectetur adipisicing Lorem ipsum dolor sit amet,elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim.</p>
                                <h4>Jack Willson</h4>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 hh14-text">
                            <div class="hh14-info">
                                <img src="assets/images/c2.jpg" alt="product" class="img-responsive " />
                                <p class="para mt-3">Consectetur adipisicing Lorem ipsum dolor sit amet,elit, sed do
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