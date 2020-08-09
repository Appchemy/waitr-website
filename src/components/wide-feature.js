import React from 'react'
import { Link } from 'gatsby'

const WideFeature = () => {
    return (
        <section className="w3l-teams-15">

            <div className="team-single-main">
                <div className="container">
                    <div className=" grid grid-column-2 row">
                        <div className="column1 col-lg-6">
                            <img src="assets/images/b11.png" alt="product" className="img-responsive " />
                        </div>
                        <div className="column2 col-lg-6">
                            <h3 className="team-head">Get your own app for online orders</h3>
                            <p className="para text">Mollitia placeat modi explicabo voluptatum corporis unde? Dicta, provident!
                            Rem adipisci Mollitia placeat modi explicabo voluptatum corporis unde? Dicta, provident!
                            Rem adipisci consectetur adipisicing elit. Deleniti possimus culpa nemo asperiores aperiam
                                mollitia, maiores fugiat tempor Vero est aliquid nisi fugit.</p>
                            <p className="para mt-2 dis-none">
                                Placeat modi explicabo voluptatum corporis unde? Dicta, provident!
                                Rem adipisci consectetur adipisicing elit. Deleniti possimus culpa nemo asperiores aperiam
                                mollitia, maiores
                                </p>
                                <Link to='/features' className="btn action-button" style={{width: 250, marginTop: 10}}>Start 30 Days Free Trial</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WideFeature