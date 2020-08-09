import React from 'react'
import PageLayout from '../templates/page-layout'

const Pricing = () => {
    return (
        <PageLayout pages={[
            {
                title: 'Sign Up',
                active: true
            }
        ]}>
            <h1>Sign Up</h1>
            <p><strong>#WhyWait</strong> for better days? Sign up for a <strong>FREE</strong> trial to enjoy 30 days of no admin work while Waitr helps you to improve your business. No need to take our word for it, let your customers give you feedback, and if it doesn’t work out, we will let you run your business as you used to. </p>
            <div>
            <form method="post" netlify-honeypot="bot-field" class="w3layouts-contact-fm" data-netlify="true" name="Sign Up" netlify>
                <input type="hidden" name="form-name" value="Contact Form" />
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
                        <div class="form-group input-gap">
                            <input class="form-control" type="tel" name="w3lSender" id="w3lSender" placeholder="Phone Number"
                                required="" />
                        </div>
                        <div class="form-group-2">
                            <button type="submit" class="btn action-button mt-3">Sign Me Up</button>
                        </div>
                    </div>
                    <div class="col-lg-6 right-cont-contact">
                        <div class="form-group">
                            <img src='/assets/images/b11.png' alt='waitr-sign-up' />
                        </div>
                    </div>
                </div>
               
            </form>
            </div>
        </PageLayout>
    )
}

export default Pricing