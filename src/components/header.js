import React from 'react'
import { Link, StaticQuery } from 'gatsby'

const Header = () => {
    return (
        <StaticQuery query={graphql`
        query GetMenuForTop {
            allMarkdownRemark(filter: {fields: {type: {eq: "menu"}}}) {
                edges {
                node {
                    frontmatter {
                    title
                    type
                    target
                    position
                    }
                    html
                }
                }
            }
        }`} render={data => {
            const menus = data.allMarkdownRemark.edges.map(item => {
                return item.node
              }).sort((a, b) => {
                  if (a.frontmatter.position < b.frontmatter.position) {
                      return -1
                  }

                  return 1
              })

            return (
                <section className=" w3l-header-4 header-sticky">
                <header className="absolute-top">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light" >
                            <Link className="navbar-brand" to='/'>
                   <img src='/images/logo.png' alt='Waitr Logo' style={{height: 40, marginTop: 15}} />
                </Link>
                            <button className="navbar-toggler bg-gradient" type="button" data-toggle="collapse"
                                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    {menus.map(menu => {
                                        return (
                                            <li className="nav-item">
                                                <Link className="nav-link" to={menu.frontmatter.target}>{menu.frontmatter.title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className="navbar-nav search-righ">
                                    <li className="nav-item">
                                        <a href='https://portal.waitr.co.za' target='_blank' className="nav-link">Sign In</a>
                                    </li>
                                </ul>
                            </div>

                        </nav>
                    </div>
                </header>
            </section>
            )
        }} />
    )
}

export default Header