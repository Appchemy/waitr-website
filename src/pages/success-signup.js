import React from 'react'
import PageLayout from '../templates/page-layout'
import { Link } from 'gatsby'

const SuccessSignUp = () => {
    return (
        <PageLayout pages={[
            {
                title: 'Sign Up',
                active: true
            }
        ]}>
            <h1>Thank You</h1>
            <p>
                The best time is now, and you know that. Congratulations on successfully signing up. We will give you a call to setup up your account. 
            </p>
            <Link to='/' className="btn action-button mt-lg-5 mt-4 ">Go to home page</Link>
        </PageLayout>
    )
}

export default SuccessSignUp