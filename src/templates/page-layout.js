import React from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import { Link } from 'gatsby';
import { Theme } from '../styles/theme';
import HomeHeader from '../components/header'
const { Header, Content, Footer } = Layout;

const PageLayout = ({
    children,
    showHeader
}) => {
    return (
        <Layout>
            <Header>
                <div className='logo' />
                <Menu theme='dark' mode='horizontal'>
                    <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
                    <Menu.Item key='2'><Link to='/blog'>Blog</Link></Menu.Item>
                    <Menu.Item key='3'>Case Studies</Menu.Item>
                </Menu>
            </Header>
            {showHeader && <HomeHeader />}
            <Content style={{padding: 50, minHeight: 600}}>
                <Row style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Col xs={24} sm={24} md={18} lg={16} style={{background: 'white', padding: 20}}>
                        {children}
                    </Col>
                </Row>
            </Content>
            <Footer style={{minHeight: 200, background: Theme.primaryColor, color: 'white'}}>
                Copyright &copy; WaitrPOS 2020
            </Footer>
        </Layout>
    )
}

export default PageLayout