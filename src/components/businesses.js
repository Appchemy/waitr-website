import React from 'react'
import { Row, Col, Card, Button } from 'antd'

const Businesses = () => {
    const businesses = [
        {
            title: 'Car Wash',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'Laundromat',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        },
        {
            title: 'Takeaway',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'Artisan',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.'
        }
    ]

    return (
        <div>
            <h2 style={{textAlign: 'center', marginBottom: 20, fontSize: '2em'}}>Is your business one of the following?</h2>
            <Row gutter={[16, 16]}>
                {businesses.map((business, index) => {
                    return (
                        <Col xs={24} sm={12} md={12} lg={6} key={index}>
                            <Card actions={[
                                (
                                    <div>
                                        <Button type='primary'>Read More</Button>
                                    </div>
                                )
                            ]} style={{}} hoverable={true} title={<p style={{textAlign: 'center', margin: 0}}>{business.title}</p>}>
                                <p style={{textAlign: 'center', height: 140}}>{business.description}</p>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Businesses