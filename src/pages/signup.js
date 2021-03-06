import React, { useState } from 'react'
import PageLayout from '../templates/page-layout'
import { navigate } from 'gatsby'
import { Formik } from 'formik'
import Axios from 'axios'

const Pricing = () => {
    const [formValues] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: ''
    })

    const encode = data => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const submit = values => {
        Axios.post()
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
            "form-name": 'Sign Up',
            ...values,
        }),
        })
        .then(() => navigate("/success-signup"))
        .catch(error => alert(error))
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
            <div style={{marginTop: 20}}>
            <Formik initialValues={formValues} onSubmit={values => {
                submit(values)
            }}>
                {({
                    values,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) => {
                    return (
                        <form data-netlify="true" name="Sign Up">
                        <div>
                            <input method='POST' type="hidden" name="form-name" value="Sign Up" />
                            <div class="row main-cont-sec">
                                <div class="col-lg-6 left-cont-contact">
                                    <div class="form-group input-gap">
                                        <input class="form-control" type="text" onBlur={handleBlur} onChange={handleChange} value={values.firstname} name="firstname" id="w3fName" placeholder="First Name"
                                            required="" />
                                    </div>
                                    <div class="form-group input-gap">
                                        <input class="form-control" type="text" onBlur={handleBlur} onChange={handleChange} value={values.lastname} name="lastname" id="w3lName" placeholder="Last Name"
                                            required="" />
                                    </div>
                                    <div class="form-group input-gap">
                                        <input class="form-control" type="email" onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" id="w3lEmail" placeholder="Email"
                                            required="" />
                                    </div>
                                    <div class="form-group input-gap">
                                        <input class="form-control" type="tel" name="phone" onBlur={handleBlur} onChange={handleChange} value={values.phone} id="w3lPhone" placeholder="Phone Number"
                                            required="" />
                                    </div>
                                    <div class="form-group-2">
                                        <button onClick={handleSubmit} class="btn action-button mt-3">Sign Me Up</button>
                                    </div>
                                </div>
                                <div class="col-lg-6 right-cont-contact">
                                    <div class="form-group">
                                        <img src='/assets/images/b11.png' alt='waitr-sign-up' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    )
                }}
            </Formik>
            </div>
        </PageLayout>
    )
}

export default Pricing