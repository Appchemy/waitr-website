import React from 'react'
import PageLayout from '../templates/page-layout'
import { Link } from 'gatsby'

const Pricing = () => {
    return (
        <PageLayout pages={[
            {
                title: 'Pricing',
                active: true
            }
        ]}>
            <h1>Pricing</h1>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <img src='/assets/images/pricing.png' alt='Pricing' style={{marginBottom: 0}} />
                <Link to='/signup' className="btn action-button mt-lg-5 mt-4 ">Start 30 day trial</Link>
            </div>
        </PageLayout>
    )
}

export default Pricing