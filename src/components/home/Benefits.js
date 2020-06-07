import React from 'react'
import { Link } from 'react-router-dom'
import { DISCOUNT_TAG, API_URL } from '../../store/actions/types'
import Loading from '../layout/Loading'
import Axios from 'axios';


class Benefits extends React.Component {
    state = {
        data: {},
        loading: true
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get(`${API_URL}api/deal-benefits`)
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                })
            })
    }
    render() {
        let { data, loading } = this.state
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
                    {loading ? <Loading /> : data.length > 0 && data.map(item =>
                        <div className="row" key={item.id}>
                            <div className="col-lg-6 col-md-6">
                                <div className="deails-img relative free-ticke-img deals-benefits-style free-offer">
                                    <Link to={`${process.env.PUBLIC_URL}/ticket`} className="freeticketbg">
                                        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/deals/free-ticket-img.png`} alt="deals img" /> */}
                                        <img src={API_URL + item.image1} alt="deals img" />
                                    </Link>
                                    <div className="deails-details-btn  free-ticket">
                                        <Link to={`${process.env.PUBLIC_URL}/ticket`}>Tickets</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="deails-img relative deals-benefits-style discount-offer">
                                    <Link to={`${process.env.PUBLIC_URL}/ticket/${DISCOUNT_TAG}`} className="discountbg">
                                        <img src={API_URL + item.image2} alt="deals img" />
                                        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/deals/discountdealsimg.png`} alt="deals img" /> */}
                                    </Link>
                                    <div className="deails-details-btn">
                                        <Link to={`${process.env.PUBLIC_URL}/ticket/${DISCOUNT_TAG}`}>Discounts Deals</Link>
                                    </div>
                                </div>
                                <div className="deails-img relative deals-benefits-style package-offer">
                                    <Link to={`${process.env.PUBLIC_URL}/ticket/${DISCOUNT_TAG}`} className="dealspackagebg">
                                        <img src={API_URL + item.image3} alt="deals img" />
                                        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/deals/dealspackageimg.png`} alt="deals img" /> */}
                                    </Link>
                                    <div className="deails-details-btn">
                                        <Link to={`${process.env.PUBLIC_URL}/ticket/${DISCOUNT_TAG}`} className="deals-shape-btn">Package Offers</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        )
    }
}
export default Benefits
