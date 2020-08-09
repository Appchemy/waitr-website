import React from 'react'
import Header from '../components/header'
import HomeHero from '../components/home-hero'
import WideFeature from '../components/wide-feature'
import Logos from '../components/logos'
import CardList from '../components/card-list'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'
import Features from '../components/features'

const HomePage = () => {
    return (
        <div id="home">
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