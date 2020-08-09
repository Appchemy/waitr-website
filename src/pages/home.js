import React from 'react'
import Header from '../components/header'
import HomeHero from '../components/home-hero'
import WideFeature from '../components/wide-feature'
import Logos from '../components/logos'
import CardList from '../components/card-list'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'
import Features from '../components/features'
import SEO from "../components/seo"

const HomePage = () => {
    return (
        <div id="home">
            <SEO title='Why Wait' description="Waitr is a point of sale customized for your business. Whether you are a car wash, laundromat or any business that has customers waiting - Waitr can help you optimize your workflow and keep your customers happy" />
            <Header />
            <HomeHero />
            <WideFeature />
            <CardList />
            <Features />
            <Logos />
            <Testimonials />
            <Footer />
        </div >
    )
}

export default HomePage