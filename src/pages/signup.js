import React, { useState, useEffect } from 'react'
import PageLayout from '../templates/page-layout'
import { navigate } from 'gatsby'

const Pricing = () => {
    const [contactForm, setContactForm] = useState(null)
    const [formValues, setFormValues] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: ''
    })

    useEffect(() => {
        // setContactForm(React.createRef())
    }, [])

    const encode = data => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const submit = event => {
        event.preventDefault()
        const form = contactForm
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
            "form-name": form.getAttribute("name"),
            ...formValues,
        }),
        })
        .then(() => navigate("/success-signup"))
        .catch(error => alert(error))

        setFormValues({
            firstname: 'Melvin',
            lastname: 'Musehani',
            phone: '0715544918',
            email: 'melvin@appchemy.co.za'
        })
    }

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
            <form ref={ref => {
                if (ref) {
                    setContactForm(ref)
                }
            }} method="POST" netlify-honeypot="bot-field" class="w3layouts-contact-fm" data-netlify="true" name="Sign Up" netlify>
                <input type="hidden" name="form-name" value="Contact Form" />
                <div class="row main-cont-sec">
                    <div class="col-lg-6 left-cont-contact">
                        <div class="form-group input-gap">
                            <input class="form-control" type="text" name="firstName" id="w3lName" placeholder="First Name"
                                required="" />
                        </div>
                        <div class="form-group input-gap">
                            <input class="form-control" type="text" name="lastName" id="w3lName" placeholder="Last Name"
                                required="" />
                        </div>
                        <div class="form-group input-gap">
                            <input class="form-control" type="email" name="email" id="w3lSender" placeholder="Email"
                                required="" />
                        </div>
                        <div class="form-group input-gap">
                            <input class="form-control" type="tel" name="phone" id="w3lSender" placeholder="Phone Number"
                                required="" />
                        </div>
                        <div class="form-group-2">
                            <button onClick={submit} class="btn action-button mt-3">Sign Me Up</button>
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