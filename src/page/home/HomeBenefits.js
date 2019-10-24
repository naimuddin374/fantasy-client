import React from 'react'
import { Link } from 'react-router-dom'

class HomeBenefits extends React.Component {
    render() {
        return (
            <section className="deals-benefits-area section-padding-top full-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 offset-lg-1 offset-md-1">
                            <div className="section-title fantasy-section-title text-center pb-40">
                                <h2>Deals & Benefits</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="deails-img relative free-ticke-img deals-benefits-style free-offer">
                                <Link to="#" className="freeticketbg">
                                    <img src="./assets/images/deals/free-ticket-img.png" alt="deals img" />
                                </Link>
                                <div className="deails-details-btn  free-ticket">
                                    <Link to="#">Free Tickets</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="deails-img relative deals-benefits-style discount-offer">
                                <Link to="#" className="discountbg">
                                    <img src="./assets/images/deals/discountdealsimg.png" alt="deals img" />
                                </Link>
                                <div className="deails-details-btn">
                                    <Link to="#">Discounts Deals</Link>
                                </div>
                            </div>
                            <div className="deails-img relative deals-benefits-style package-offer">
                                <Link to="#" className="dealspackagebg">
                                    <img src="./assets/images/deals/dealspackageimg.png" alt="deals img" /></Link>
                                <div className="deails-details-btn">
                                    <Link to="#" className="deals-shape-btn">Package Offers</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default HomeBenefits
