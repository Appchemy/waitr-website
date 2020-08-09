import React from 'react'
import PageLayout from '../templates/page-layout'
import { Link } from 'gatsby'

const SuccessSubscription = () => {
    return (
        <PageLayout pages={[
            {
                title: 'Subscription',
                active: true
            }
        ]}>
            <h1 style={{marginBottom: 20}}>Thank you for subscribing</h1>
            <p>
                You will be the first to know of our latest product offering and news updates
            </p>
            <Link to='/' className="btn action-button mt-lg-5 mt-4 ">Go to home page</Link>
        </PageLayout>
    )
}

export default SuccessSubscription