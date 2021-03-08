import React from 'react'
import PageLayout from '../templates/page-layout'
import { navigate } from 'gatsby'
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table'

const Pricing = () => {
    const tryForFree = () => {
        navigate("/signup")
    }

    const standard = () => {
        navigate("/signup")
    }

    return (
        <PageLayout pages={[
            {
                title: 'Pricing',
                active: true
            }
        ]}>
            <h1>Pricing</h1>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                {/* <img src='/assets/images/pricing.png' alt='Pricing' style={{marginBottom: 0}} />
                <Link to='/signup' className="btn action-button mt-lg-5 mt-4 ">Start 30 day trial</Link> */}
                <PricingTable highlightColor='#4B4453'>
                    <PricingSlot onClick={tryForFree} buttonText='TRY IT FREE' title='30 Days Trial' priceText='FREE'>
                        <PricingDetail> <b>200</b> Notifications</PricingDetail>
                        <PricingDetail> <b>Unlimited</b> Cloud Storage</PricingDetail>
                        <PricingDetail> <b>5</b> Users</PricingDetail>
                        <PricingDetail> <b>1</b> Business</PricingDetail>
                        <PricingDetail> <b>Customer Ratings</b></PricingDetail>
                        <PricingDetail strikethrough> <b>Customer Support</b></PricingDetail>
                    </PricingSlot>
                    <PricingSlot onClick={standard} highlighted buttonText='SIGN UP' title='STANDARD' priceText='R250/month'>
                    <PricingDetail> <b>1000</b> Notifications</PricingDetail>
                        <PricingDetail> <b>Unlimited</b> Cloud Storage</PricingDetail>
                        <PricingDetail> <b>5</b> Users</PricingDetail>
                        <PricingDetail> <b>1</b> Business</PricingDetail>
                        <PricingDetail> <b>Customer Ratings</b></PricingDetail>
                        <PricingDetail> <b>Customer Support</b></PricingDetail>
                    </PricingSlot>
                </PricingTable>
            </div>
        </PageLayout>
    )
}

export default Pricing