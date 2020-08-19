import React, { useState } from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Formik } from 'formik'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Loader from './loader'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    const [isSubscribing, setIsSubscribing] = useState(false)
    const [subscribingError, setSubscribingError] = useState(null)
    const [hasSubscribed, setHasSubscribed] = useState(false)

    return <StaticQuery query={graphql`
        query GetMenuForFooter {
            allMarkdownRemark(filter: {fields: {type: {eq: "menu"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            type
                            target
                            position
                        }
                        html
                    }
                }
            },
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
        }`} render={data => {
            const site = data.site.siteMetadata
            const menus = data.allMarkdownRemark.edges.map(item => {
                return item.node
            }).sort((a, b) => {
                if (a.frontmatter.position < b.frontmatter.position) {
                    return -1
                }

                return 1
            })

            // const encode = data => {
            //     return Object.keys(data)
            //         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            //         .join("&")
            // }

            const subscribe = (values) => {
                setIsSubscribing(true)
                setSubscribingError(null)
                addToMailchimp(values.email).then(result => {
                    setHasSubscribed(true)
                    setIsSubscribing(false)
                }).catch(err => {
                    setSubscribingError(err)
                    setIsSubscribing(false)
                })
                // fetch("/", {
                //     method: "POST",
                //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
                //     body: encode({
                //         "form-name": 'Subscription',
                //         ...values,
                //     }),
                // })
                //     .then(() => navigate("/success-subscription"))
                //     .catch(error => alert(error))
            }

            return (
                <section className="w3l-footers-20">
                    <div className="footers20">
                        <div className="container">
                            <a className="footer-logo" href="index.html">
                                <img src='/images/logo.png' style={{ height: 60 }} alt='Waitr Logo' /></a>
                            <hr style={{ background: 'white', height: 2, width: 60 }} />
                            <div className=" row">
                                <div className="grid-col col-lg-7 col-md-7">
                                    <h3>Get latest updates and offers.</h3>
                                    <div className="footer-subscribe mt-4">
                                        <Formik initialValues={{ email: '' }} onSubmit={subscribe}>
                                            {({
                                                values,
                                                handleBlur,
                                                handleChange,
                                                handleSubmit
                                            }) => {
                                                return (
                                                    <form data-netlify="true" name="Sign Up">
                                                        <input method='POST' type="hidden" name="form-name" value="Sign Up" />
                                                        <div className="input-button">
                                                            <input disabled={isSubscribing} type="email" name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} className="form-control" placeholder="Your Email"
                                                                required="" />
                                                            <button disabled={isSubscribing} onClick={handleSubmit} className="btn footer-button btn-secondary action-button">
                                                                Subscribe
                                                            </button>
                                                            <div style={{marginLeft: 10}}>
                                                            {isSubscribing && <Loader />}
                                                            </div>
                                                        </div>
                                                        {hasSubscribed && <p style={{color: 'green', marginTop: 10}}>Thank you for subscribing</p>}
                                                        {subscribingError && <p style={{color: 'red', marginTop: 10}}>An error occurred while subscribing. Please try again</p>}
                                                    </form>
                                                )
                                            }}
                                        </Formik>

                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 footer-bottom-two">
                                    <ul>
                                        <li> <Link to="/contact" className="btn action-sub-button">Contact</Link></li>
                                        {/* <li> <a href="services.html" className="btn logo-button top-margin mt-md-3">Our Service</a>
                                            </li> */}
                                    </ul>
                                </div>

                            </div>
                            <div className="border-line-bottom"></div>
                            <div className=" row">
                                <div className="grids-content col-lg-2 col-md-2 col-sm-6">
                                    <h4>Company</h4>
                                    <div className="footer-nav">
                                        {menus.map((menu, index) => {
                                            return <Link key={`footer-menu-${index}`} to={menu.frontmatter.target} className="contact-para3">{menu.frontmatter.title}</Link>
                                        })}
                                    </div>

                                </div>
                                <div className="grids-content col-lg-3 col-md-3 col-sm-6">
                                    <h4>Information</h4>
                                    <a href={`mailto:${site.contact.email}`}>
                                        <p className="contact-text-sub contact-para3">{site.contact.email}</p>
                                    </a>
                                    <a href={`tel:${site.contact.phone}`}>
                                        <p className="contact-text-sub contact-para3">{site.contact.phone}</p>
                                    </a>
                                    {site.contact.address.map((address, index) => {
                                        return <p key={`footer-address-${index}`} className="contact-text-sub contact-para3">{address}</p>
                                    })}

                                    {/* <p className="contact-text-sub contact-para3">75 West Rock, Maple Building</p> */}

                                </div>
                                <div className="col-lg-7 col-md-7 col-12 copyright-grid ">
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
                                        <div className="buttons-teams">
                                            <a href={`https://www.facebook.com/${site.socialMedia.facebook}`} rel='noreferrer' target='_blank'><span className="facebook social-icon"><FontAwesomeIcon icon={faFacebookF} color='white' /></span> </a>
                                            <a href={`https://www.twitter.com/${site.socialMedia.twitter}`} rel='noreferrer' target='_blank'><span className="twitter social-icon" aria-hidden="true"><FontAwesomeIcon icon={faTwitter} color='white' /></span> </a>
                                            <a href={`https://www.instagram.com/${site.socialMedia.instagram}`} rel='noreferrer' target='_blank'><span aria-label="Instagram" className="instagram social-icon" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} color='white' /></span> </a>
                                            {/* <a href={`https://www.linkedin.com/${site.socialMedia.linkedin}`} rel='noreferrer' target='_blank'><i aria-label="Linkedin" className="linkedin social-icon fab fa-linkedin" aria-hidden="true" /> </a> */}
                                        </div>
                                    </div>
                                    <p className="copy-footer-29">© 2020 WaitrPOS. All rights reserved
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }} />
}

export default Footer