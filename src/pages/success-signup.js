import React from 'react'
import PageLayout from '../templates/page-layout'

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
        </PageLayout>
    )
}

export default SuccessSignUp