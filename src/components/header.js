import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <section className=" w3l-header-4 header-sticky">
                <header className="absolute-top">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <h1><Link className="navbar-brand" to='/'><span className="fa fa-line-chart" aria-hidden="true"></span>
                   Hype
                </Link></h1>
                            <button className="navbar-toggler bg-gradient" type="button" data-toggle="collapse"
                                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/services">Services</Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav search-righ">
                                    {/* <li className="nav-item" title="Search"><Link to="#search" className="btn search-search"><i className="fa fa-search mr-2" aria-hidden="true"></i>Search</Link></li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                </ul>
                                {/* <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <form action="#" method="GET" className="d-flex">
                                            <input type="search" placeholder="Search.." name="search" required="required" autofocus />
                                            <button type="submit">Search</button>
                                            <Link className="close" to="#">&times;</Link>
                                        </form>
                                    </div>
                                </div> */}
                            </div>

                        </nav>
                    </div>
                </header>
            </section>
    )
}

export default Header