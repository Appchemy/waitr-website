import React from 'react'
import PageLayout from '../templates/page-layout'

const Contact = ({
    data
}) => {
    const site = data.site.siteMetadata

    return (
        <PageLayout pages={[
            {
                title: 'Contact Us',
                active: true
            }
        ]}>
            <section className='w3l-contact-info-main'>
                <h1>Contact Us</h1>
                <div class="contact-sec">
                    <div className='container'>
                        <div class="main-titles-head text-center">
                            <h3 class="header-name">
                                Drop us Message for any Query
                </h3>

                        </div>
                        <div class="contact row">
                            <div class="col-lg-4 col-md-6 col-sm-6 contact-grids" style={{marginTop: 20}}>
                                <div class="contact-gtids ">
                                    <span class="fa fa-envelope" aria-hidden="true"></span>
                                    <h4>Email Address</h4>
                                    <a href={`mailto:${site.contact.email}`}>
                                        <p class="contact-text-sub">{site.contact.email}</p>
                                    </a>
                                </div>
                            </div>
                            <div class=" col-lg-4 col-md-6 col-sm-6 contact-grids" style={{marginTop: 20}}>
                                <div class="contact-gtids ">
                                    <span class="fa fa-phone" aria-hidden="true"></span>
                                    <h4>Phone Number</h4>
                                    <a href="tel:+7-800-999-800">
                                        <p class="contact-text-sub">{site.contact.phone}</p>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="col-lg-4 col-md-12 col-sm-12 contact-grids" style={{marginTop: 20}}>
                                <div class="contact-gtids ">
                                    <span class="fa fa-headphones" aria-hidden="true"></span>
                                    <h4>Social Media</h4>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <div className="buttons-teams" style={{margin: 0, padding: 0}}>
                                            <a href={`https://www.facebook.com/${site.socialMedia.facebook}`} rel='noreferrer' target='_blank'><i aria-label="Facebook" className="facebook social-icon fab fa-facebook-f" aria-hidden="true" /> </a>
                                            <a href={`https://www.twitter.com/${site.socialMedia.twitter}`} rel='noreferrer' target='_blank'><i aria-label="Twitter" className="twitter social-icon fab fa-twitter" aria-hidden="true" /> </a>
                                            <a href={`https://www.instagram.com/${site.socialMedia.instagram}`} rel='noreferrer' target='_blank'><i aria-label="Instagram" className="instagram social-icon fab fa-instagram" aria-hidden="true" /> </a>
                                            <a href={`https://www.linkedin.com/${site.socialMedia.linkedin}`} rel='noreferrer' target='_blank'><i aria-label="Linkedin" className="linkedin social-icon fab fa-linkedin" aria-hidden="true" /> </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 contact-grids" style={{marginTop: 20}}>
                                <div class="contact-gtids ">
                                    <span class="fa fa-building" aria-hidden="true"></span>
                                    <h4>Address</h4>
                                    {site.contact.address.map((address, index) => {
                                        return <p class="contact-text-sub" key={`contact-address-${index}`}>{address}</p>
                                    })}
                                    

                                </div>
                            </div>
                        </div>
                    </div>

                    <form method="post" class="w3layouts-contact-fm" action="https://sendmail.w3layouts.com/submitForm">
                        <div class="row main-cont-sec">
                            <div class="col-lg-6 left-cont-contact">
                                <div class="form-group input-gap">
                                    <input class="form-control" type="text" name="w3lName" id="w3lName" placeholder="First Name"
                                        required="" />
                                </div>
                                <div class="form-group input-gap">
                                    <input class="form-control" type="text" name="w3lName" id="w3lName" placeholder="Last Name"
                                        required="" />
                                </div>
                                <div class="form-group input-gap">
                                    <input class="form-control" type="email" name="w3lSender" id="w3lSender" placeholder="Email"
                                        required="" />
                                </div>
                            </div>
                            <div class="col-lg-6 right-cont-contact">
                                <div class="form-group">
                                    <textarea class="form-control" name="w3lMessage" id="w3lMessage" placeholder="Write Message"
                                        required=""></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-group-2">
                            <button type="submit" class="btn action-button mt-3">Send Now</button>
                        </div>
                    </form>
                </div>
            </section>
        </PageLayout>
    )
}

export default Contact

export const query = graphql`
  query GetContactInfo {
    site {
        siteMetadata {
            contact {
                email
                phone
                address
            }
            socialMedia {
                facebook
                instagram
                twitter
                linkedin
            }
        }
    }
  }
`