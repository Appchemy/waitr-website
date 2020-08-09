import React from 'react'
import PageLayout from '../templates/page-layout'

const Pricing = () => {
    return (
        <PageLayout pages={[
            {
                title: 'Pricing',
                active: true
            }
        ]}>
            <h1>Prcing</h1>
        </PageLayout>
    )
}

export default Pricing