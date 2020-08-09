import React from 'react'
import PageLayout from '../templates/page-layout'
import { Link } from 'gatsby'

const SuccessContact = () => {
    return (
        <PageLayout pages={[
            {
                title: 'Contact Us',
                active: true
            }
        ]}>
            <h1 style={{marginBottom: 20}}>We've received your query</h1>
            <p>
                One of our agents will get back to you within the next 24 hours
            </p>
            <Link to='/' className="btn action-button mt-lg-5 mt-4 ">Go to home page</Link>
        </PageLayout>
    )
}

export default SuccessContact