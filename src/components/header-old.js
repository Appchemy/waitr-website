import React from 'react'
import { Theme } from '../styles/theme'
import { Carousel, Button } from 'antd'

const Header = ({
    headers = []
}) => {
    return (
        <div style={{width: '100%', background: Theme.primaryColor, height: 600, position: 'relative', overflow: 'hidden'}}>
            <Carousel autoplay={true} autoplaySpeed={6000} dotPosition='left'>
                {headers.map((header, index) => {
                    return (
                        <div>
                            <div key={'header-' + index} style={{
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center center', 
                                background: `url(${header.frontmatter.image})`, 
                                width: '100%', 
                                minHeight: 600,
                                padding: 80,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <div style={{background: 'rgba(0,0,0,0.1)', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} />
                                <h1 style={{color: 'white', zIndex: 10000, fontSize: '3em', marginBottom: 5}} dangerouslySetInnerHTML={{__html: header.frontmatter.title}}></h1>
                                <p style={{color: 'white', zIndex: 10000, marginTop: 0, fontSize: '1.5em', fontWeight: '100'}} dangerouslySetInnerHTML={{__html: header.frontmatter.subtitle}}></p>
                                <div style={{zIndex: 10000}}>
                                    <Button style={{height: 50, width: 150, fontWeight: 'bold', backgroundColor: '#CE3261'}} type='primary'>Get Started</Button>
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
            </Carousel>

            <img alt='WaitrPOS' src='/images/header-image.png' style={{position: 'absolute', zIndex: 100, right: 0, bottom: -150, width: 800}} />
        </div>
    )
}

export default Header

