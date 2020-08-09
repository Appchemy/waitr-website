import React from 'react'
import PageLayout from '../templates/page-layout'
import { Link } from 'gatsby'

const PageNotFound = () => {
    return (
        <PageLayout>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <h1>Page not found</h1>
                <p>The page you are looking for was not found</p>
                <Link to='/' className="btn action-button mt-lg-5 mt-4 ">Go to home page</Link>
            </div>
        </PageLayout>
    )
}

export default PageNotFound