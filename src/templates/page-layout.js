import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Breadcrumbs from '../components/breadcrumbs'

const PageLayout = ({
    children,
    pages = []
}) => {
    return (
        <div>
            <Header />
            <Breadcrumbs pages={pages} />
            <section class="w3l-recent-work-hobbies">
                <div class="recent-work ">
                    <div class="container">
                        <div class="left-text">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default PageLayout