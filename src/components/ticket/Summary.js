import React from 'react'
import { Link } from 'react-router-dom';

class Summary extends React.Component {

    render() {
        return (
            <div className="col-lg-3 col-md-12">
                <div className="single-widget summary-widget mt-5">
                    <div className="ticket-widget-content-title">
                        <h3>Summary</h3>
                    </div>
                    <div className="ticket-widget-content-inner first-ticket-widget" id="oneticket">
                        <ul>
                            <li>
                                <h5>Regular Ticket</h5>
                                <p>for Fantasy Kingdom</p>
                            </li>
                            <li>
                                <h5>TK 1000+ TK 300</h5>
                                <p>2 Adult + 1 Child</p>
                            </li>
                        </ul>
                        <p>No Food</p>
                        <button className="remove-btn" id="remove-ticket-one">Remove</button>
                    </div>
                    <div className="ticket-widget-content-inner second-titket-widget" id="twoticket">
                        <ul>
                            <li>
                                <h5>Free Deals</h5>
                                <p>for Fantasy+ Water</p>
                            </li>
                            <li>
                                <h5>TK 1000</h5>
                                <p>2 Adult</p>
                            </li>
                        </ul>
                        <p>Free Lunch</p>
                        <button className="remove-btn" id="remove-ticket-two">Remove</button>
                    </div>
                    <div className="widget-checkout-money">
                        <h4 className="total-price-widget">Total : 1300 BDT</h4>
                        <div className="widget-chekout-btn-area mt-3 text-center">	<Link to="/" className="payment-btn">Check Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Summary
