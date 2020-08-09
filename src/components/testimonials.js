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
                                <img src="/images/shabnam.jpg" alt="product" className="img-responsive " />
                                <p className="para mt-3" style={{height: 73}}>It has given me flexibility where I can be anywhere and monitor my business.</p>
                                <h4>Shabnam</h4>
                                <p style={{color: 'grey', fontSize: '0.8em'}}>Owner of Eazi Laundromat in Centurion</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 hh14-text">
                            <div className="hh14-info">
                                <img src="/images/conner.png" alt="product" className="img-responsive " />
                                <p className="para mt-3">I'm very happy with the app. It makes your work easier at the end of the day. Everything goes online on the cloud and you don't have any paper work to do.</p>
                                <h4>Conner</h4>
                                <p style={{color: 'grey', fontSize: '0.8em'}}>Employee at Konette Car Wash in Pretoria North</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials