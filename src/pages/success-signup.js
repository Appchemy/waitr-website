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
        </PageLayout>
    )
}

export default SuccessSignUp