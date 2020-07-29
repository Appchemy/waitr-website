import React from 'react'
import { Theme } from '../styles/theme'
import { Form, Input, Button } from 'antd'

const HorizontalContactForm = () => {
    return (
        <div style={{width: '100%', padding: 40, backgroundColor: Theme.primaryColor, color: 'white', marginTop: 60, marginBottom: 60}}>
            <p style={{fontSize: '2em', marginBottom: 2}}>Is your business not listed above?</p>
            <p>We might still be able to help</p>
            <Form>
                <Form.Item>
                    <div>
                        <Input placeholder='Phone Number' style={{width: 300, marginRight: 10}} />
                        <Button type='ghost' style={{color: 'white'}}>Please Call Me</Button>
                    </div>
                </Form.Item>
            </Form>
            <p>We will give you a free consulting service to help you improve your business workflow</p>
        </div>
    )
}

export default HorizontalContactForm