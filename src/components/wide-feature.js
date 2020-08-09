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
                            <p className="para text">The best thing you can do for your business is to take it online. Waitr online allows you to save up even more time on your customers’ schedule through a speedy and efficient ordering process, which enables them to do business with you anytime and anywhere. You can add this app to your package for free.</p>
                            {/* <p className="para mt-2 dis-none">
                                Placeat modi explicabo voluptatum corporis unde? Dicta, provident!
                                Rem adipisci consectetur adipisicing elit. Deleniti possimus culpa nemo asperiores aperiam
                                mollitia, maiores
                                </p> */}
                                <Link to='/features' className="btn action-button" style={{width: 250, marginTop: 10}}>Start 30 Days Free Trial</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WideFeature