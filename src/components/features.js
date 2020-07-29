import React from 'react'
import { Row, Col, Card } from 'antd'
import { StaticQuery, graphql } from 'gatsby'
import { Theme } from '../styles/theme'

const Features = ({
    features = []
}) => {
    
    return (
        <StaticQuery query={graphql`
            query GetFeatures {
                allMarkdownRemark(filter: {fields: {type: {eq: "feature"}}}) {
                    edges {
                    node {
                        frontmatter {
                        title
                        icon
                        }
                        html
                    }
                    }
                }
            }`} render={data => {
                const features = data.allMarkdownRemark.edges.map(item => {
                    return item.node
                  }).sort((a, b) => {
                      if (a.frontmatter.title < b.frontmatter.title) {
                          return -1
                      }

                      return 1
                  })

                return (
                    <div style={{marginTop: 60, marginBottom: 60}}>
                    <h3 style={{textAlign: 'center', fontSize: '2em', marginBottom: 40}}>Features</h3>
                    <Row gutter={[16, 16]}>
                        {features.map((feature, index) => {
                            return (
                                <Col key={index} xs={24} sm={12} md={8}>
                                    <Card hoverable style={{marginBottom: 30}}>
                                        <div style={{position: 'absolute', left: 0, right: 0, top: -30, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                            <div style={{backgroundColor: Theme.secondaryColor, width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                <img style={{
                                                    width: 30,
                                                    height: 30,
                                                    objectFit: 'contain'
                                                }} src={feature.frontmatter.icon} alt={feature.frontmatter.title} />
                                            </div>
                                        </div>
                                        <h2 style={{textAlign: 'center', marginTop: 20}}>{feature.frontmatter.title}</h2>
                                        <div style={{textAlign: 'center', minHeight: 150}} dangerouslySetInnerHTML={{__html: feature.html}} />
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                )
            }} />
        
    )
}

export default Features