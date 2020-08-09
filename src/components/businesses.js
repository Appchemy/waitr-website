import React from 'react'
import { Row, Col, Card, Button } from 'antd'
import { StaticQuery, graphql } from 'gatsby'

const Businesses = () => {
    return (
        <StaticQuery query={graphql`
            query GetBusinessesOld {
                allMarkdownRemark(filter: {fields: {type: {eq: "business"}}}) {
                    edges {
                    node {
                        frontmatter {
                        title
                        position
                        }
                        html
                    }
                    }
                }
            }`} render={data => {
                const businesses = data.allMarkdownRemark.edges.map(item => {
                    return item.node
                  }).sort((a, b) => {
                      if (a.frontmatter.position < b.frontmatter.position) {
                          return -1
                      }

                      return 1
                  })

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
                                        ]} style={{}} hoverable={true} title={<p style={{textAlign: 'center', margin: 0}}>{business.frontmatter.title}</p>}>
                                            <div style={{textAlign: 'center', minHeight: 160}} dangerouslySetInnerHTML={{
                                                __html: business.html
                                            }} />
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                )
            }}>
                
            </StaticQuery>
        
    )
}

export default Businesses