import React from 'react'
import Title from './title'
import Card from './card'

const CardList = () => {
    return (
        <section class="w3l-specification-6">
            <div class="specification-layout">
                <div class="container">
                    <Title>We Bring The Best Things For Business</Title>
                    <div class="specification-effect row text-center">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardList