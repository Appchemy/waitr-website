import React from 'react'
import { Link } from 'gatsby'

const Breadcrumbs = ({
    pages
}) => {
    return (
        <section class="w3l-inner-banner-main">
            <div class="about-inner inner2">
                <div class="container seen-w3">
                    <ul class="breadcrumbs-custom-path">
                        <li><Link to='/'>Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                        {pages.map((page, index) => {
                            return page.active ? <li key={`breadcrump-${index}`} class="active">{page.title}</li> : <li key={`breadcrump-${index}`} class="active"><Link to={page.link}>{page.title} <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                        })}
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumbs