import React from 'react'
import { Link } from 'react-router-dom'
import * as Types from '../../store/actions/types'
import Axios from 'axios'
import {textLimit} from '../../util/helper'
import CircleShape from './CircleShape'

class ThingsToDo extends React.Component {
    state = {
        thingsToDo: {}
    }
    componentDidMount() {
        Axios.get(`api/things-to-do`)
            .then(res => {
                this.setState({
                    thingsToDo: res.data
                })
            })
            .catch(err => console.log(err.response))
    }
    render() {
        let { thingsToDo } = this.state
        return (
            <div>
                <section className="ticket-choosen-area full-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="page-breadcrum-area row-center">
                                    <div className="ticket-title">
                                        <h4>Select Any park/resorts to view all the activities</h4>
                                    </div>
                                    <div className="select-park-ticket">
                                        <div className="fantasy-park-search-item float-right">
                                            <form action="#">
                                                <div className="single-fantasy-park-search">
                                                    <div className="fantasy-parki-select-item">
                                                        {/* <select id="fantasysearchtype" className="form-control" style="display: none;">
                                                        <option selected="">Select Your Park or resorts</option>
                                                    </select> */}
                                                        <div className="nice-select fantasy-nice-select ticket-search-bg ticket-page-select" tabIndex="0"><span className="current">Select Your Park or resorts</span>
                                                            <ul className="list">
                                                                <li data-value="Fantasy" className="option">Fantasy Kingdom</li>
                                                                <li data-value="water" className="option">Water Kingdom</li>
                                                                <li data-value="foys" className="option">Foys Lake</li>
                                                                <li data-value="Heritage" className="option">Heritage Park</li>
                                                            </ul>
                                                        </div>
                                                        <div className="park-select-submit top-select-btn">
                                                            <input type="submit" value="Submit" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="things-to-do-page-content-area section-padding relative">
                    <CircleShape />
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title fantasy-section-title mb-40">
                                    <h2>Things To Do</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row advanture-ride-area pb-3">
                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                <div className="thing-to-title text-center pb-40 pt-3">
                                    <h4 className="advanture-ride-title">Adventure Rides</h4>
                                </div>
                            </div>
                            <div className="row">
                                {Object.keys(thingsToDo).length !== 0 &&
                                    thingsToDo.map(item => (
                                        <div className="col-lg-4 col-md-6" key={item.id}>
                                            <div className="single-thing-to-do-content single-advanture-ride popular-item-border">
                                                <Link to="/">
                                                    <img src={Types.BASE_URL + item.image} alt="advanture img" />
                                                </Link>
                                                <div className="popular-item"> <span className="thing-popular">popular</span>
                                                </div>
                                                <div className="thing-to-do-inner-content">
                                                    <div className="t-top-content">
                                                        <div className="t-title-content"> <Link to="/" className="t-tile">Roller Coaster</Link>
                                                        </div>
                                                        <div className="aggressive-hight-content"> <span className="aggressive t-agg-high">{item.title}</span>
                                                        </div>
                                                    </div>
                                                    <p>{textLimit(item.description, 170)}</p>
                                                    <div className="t-bottom-content">
                                                        <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                        </div>
                                                        <div className="t-ticket-btn-content"> <Link to="/ticket" className="payment-btn">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="row live-entertainment">
                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                <div className="thing-to-title text-center pb-40 pt-3">
                                    <h4 className="event-entertainment-title">Events & Live Entertainment</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/event/1.png" alt="event img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Fantasy Show</Link>
                                            </div>
                                            <p>For the lovers of heart-thumping adventures, the roller coaster will take you on the ride of your life giving you an aerial view of the entire park.</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/event/2.png" alt="event img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">3D Cinema</Link>
                                            </div>
                                            <p>Now I know how those poor sailors felt on the seven seas - they must have been SCARED!</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/event/3.png" alt="event img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Picnic Spot</Link>
                                            </div>
                                            <p>Bangasaur's favourite. A maximum intensity ride that will knock your socks off. Don't eat before getting on this one!</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/thingtodo/1.png" alt="event img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Party Zone</Link>
                                            </div>
                                            <p>For the lovers of heart-thumping adventures, the roller coaster will take you on the ride of your life giving you an aerial view of the entire park.</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/thingtodo/2.png" alt="event img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">BBQ Night</Link>
                                            </div>
                                            <p>Now I know how those poor sailors felt on the seven seas - they must have been SCARED!</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/thingtodo/2.png" alt="event img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Wedding Ceremonies</Link>
                                            </div>
                                            <p>Bangasaur's favourite. A maximum intensity ride that will knock your socks off. Don't eat before getting on this one!</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row live-entertainment">
                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                <div className="thing-to-title text-center pb-40 pt-3">
                                    <h4 className="dining-shopping-title">Dining & Shopping</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/diningshopping/1.png" alt="dinner img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Ashulia Castle Restaurant</Link>
                                            </div>
                                            <p>3 Star Michelin Award winning Chef Akarach has set up a superb Thai and International menu at this restaurant.</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/diningshopping/2.png" alt="dinner img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Water Tower Café</Link>
                                            </div>
                                            <p>Set in a lagoon and surrounded by water on all sides, the Water Tower Café is an ideal place to while away the afternoon; thanks to its great food and wonderful view.</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/thingtodo/2.png" alt="dinner img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Platinum Ashu Lounge</Link>
                                            </div>
                                            <p>Exclusive air-conditioned lounge for use by members or by invitation only.</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/thingtodo/1.png" alt="event img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Bobo Bakery</Link>
                                            </div>
                                            <p>Blueberry Cheesecake, Brownies, Cookies, Cakes and Pies are freshly made everyday for you.</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/thingtodo/2.png" alt="event img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Gift Shop</Link>
                                            </div>
                                            <p>Yes, there are plenty of shops to explore. Gifts, jewelry, toys, handbags, T-shirts, model cars, stationery, cuddly-toys of Ashu, Lia and their friends and much more - they're the perfect birthday gift.</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-thing-to-do-content single-advanture-ride">
                                        <Link to="/">
                                            <img src="./assets/images/thingtodo/2.png" alt="event img" />
                                        </Link>
                                        <div className="thing-to-do-inner-content">
                                            <div className="t-title-content"> <Link to="/" className="t-tile">Gift Shop</Link>
                                            </div>
                                            <p>Yes, there are plenty of shops to explore. Gifts, jewelry, toys, handbags, T-shirts, model cars, stationery, cuddly-toys of Ashu, Lia and their friends and much more - they're the perfect birthday gift.</p>
                                            <div className="t-bottom-content">
                                                <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                </div>
                                                <div className="t-ticket-btn-content"> <Link to="/" className="payment-btn">Buy Ticket</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default ThingsToDo
